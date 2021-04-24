const glob = require("glob");
const fs = require("fs");
const path = require("path");
const util = require("util");
const readFile = util.promisify(fs.readFile);

const classNameRegex = new RegExp(/[^<>"'`\s]*[^<>"'`\s:]/g);
const globPromise = util.promisify(glob);

async function purge(
    directory,
    json,
    filesGlob = "**/*.{ts,tsx,js,jsx}",
    whitelist = []
) {
    const classNames = Object.keys(json);
    const classNamesToKeep = whitelist;

    const cliProgress = require("cli-progress");

    return globPromise(filesGlob, {
        cwd: directory,
        ignore: "node_modules/**/*",
    }).then(async (files) => {
        let promises = [];

        console.log("reading files");

        // create a new progress bar instance and use shades_classic theme
        const readingFilesProgress = new cliProgress.SingleBar(
            {
                format: `[{bar}] {percentage}% | {value}/{total}`,
            },
            cliProgress.Presets.legacy
        );

        readingFilesProgress.start(files.length, 0);

        files.forEach((file) => {
            const fileDir = path.resolve(directory, file);
            promises.push(
                readFile(fileDir, "utf8").then((fileAsString) => {
                    readingFilesProgress.increment();
                    return Promise.resolve(fileAsString);
                })
            );
        });

        await Promise.all(promises).then((filesAsStrings) => {
            readingFilesProgress.stop();
            console.log("searching for styles");

            // create a new progress bar instance and use shades_classic theme
            const searchingFilesProgress = new cliProgress.SingleBar(
                {
                    format: `[{bar}] {percentage}% | {value}/{total}`,
                },
                cliProgress.Presets.legacy
            );

            searchingFilesProgress.start(filesAsStrings.length, 0);

            filesAsStrings.forEach((fileAsString) => {
                const linesWithPotentialMatch = fileAsString.match(
                    classNameRegex
                );
                if (linesWithPotentialMatch.length > 0) {
                    linesWithPotentialMatch.forEach((line) => {
                        if (classNames.includes(line)) {
                            classNamesToKeep.push(line);
                        }
                    });
                }

                searchingFilesProgress.increment();
            });

            searchingFilesProgress.stop();
        });

        const purgedStyles = {};

        classNamesToKeep.forEach((className) => {
            const style = json[className];
            if (style) {
                purgedStyles[className] = style;
            }
        });

        return purgedStyles;
    });
}

module.exports = purge;
