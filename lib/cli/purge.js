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

  return globPromise(filesGlob, {
    cwd: directory,
    ignore: "node_modules/**/*",
  }).then(async (files) => {
    let promises = [];

    console.log("reading files");
    files.forEach((file) => {
      const fileDir = path.resolve(directory, file);
      promises.push(readFile(fileDir, "utf8"));
    });

    await Promise.all(promises).then((filesAsStrings) => {
      console.log("searching for used styles");
      filesAsStrings.forEach((fileAsString) => {
        const linesWithPotentialMatch = fileAsString.match(classNameRegex);
        if (linesWithPotentialMatch.length > 0) {
          linesWithPotentialMatch.forEach((line) => {
            if (classNames.includes(line)) {
              classNamesToKeep.push(line);
            }
          });
        }
      });
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
