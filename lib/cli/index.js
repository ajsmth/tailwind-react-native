#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const fs = require("fs");
const path = require("path");

const build = require("./build");
const purge = require("./purge");

yargs(hideBin(process.argv))
  .command("build", "build the styles", ({ argv }) => {
    let configPath = argv.config || process.cwd();
    const configFileInCwd = path.resolve(configPath, "tailwind.config.js");
    let customConfig = {};

    if (fs.existsSync(configFileInCwd)) {
      customConfig = require(configFileInCwd);
      console.log(`using custom config at ${configPath} to generate styles`);
    }

    let outputPath = argv.out || process.cwd();
    const styles = build(customConfig);
    const filePath = path.resolve(outputPath, "styles.json");

    console.log(`writing styles.json to ${filePath}`);

    fs.writeFile(filePath, JSON.stringify(styles, null, "\t"), (err) => {
      if (err !== null) {
        console.log("ERR: ", err);
      }

      console.log("Done!");
    });
  })
  .option("config", {
    alias: "c",
    type: "string",
    description: "path to a custom tailwind.config.js file",
  })
  .option("out", {
    alias: "o",
    type: "string",
    description: "path to write the generated styles.json file",
  })
  .command("purge", "purge unused styles from styles.json", ({ argv }) => {
    const configDir = argv.config || process.cwd();
    const configPath = path.resolve(configDir, "tailwind.config.js");

    const config = require(configPath);
    const styles = build(config);

    const projectFolder = process.cwd();

    config.purge = config.purge || {};

    const filesGlob = config.purge.files;
    const whitelist = config.purge.whitelist;

    const outDir = argv.out || process.cwd();
    const outPath = path.resolve(outDir, "styles.json");

    console.log(`scanning ${projectFolder} for styles`);
    purge(projectFolder, styles, filesGlob, whitelist).then((purgedStyles) => {
      console.log(`writing purged styles to file ${outPath}`);
      fs.writeFile(outPath, JSON.stringify(purgedStyles, null, "\t"), (err) => {
        if (err !== null) {
          console.log("ERR: ", err);
        }

        console.log("DONE!");
      });
    });
  })

  .option("out", {
    alias: "o",
    type: "string",
    description: "file path to write to",
  })
  .option("config", {
    alias: "c",
    type: "string",
    description: "path to your tailwind.config.js file",
  }).argv;
