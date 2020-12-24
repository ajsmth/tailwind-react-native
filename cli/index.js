#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const fs = require("fs");
const util = require("util");
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
    const projectFolder = argv.dir || process.cwd();
    const jsonFile = argv.styles;

    if (!fs.existsSync(jsonFile)) {
      throw new Error(
        `file not found at ${jsonFile} -- you need a custom styles.json in order to purge styles`
      );
    }

    let json = require(path.resolve(jsonFile));
    console.log(`using custom config at ${jsonFile} to purge styles`);
    const outPath = argv.out || process.cwd();
    const outfilePath = path.resolve(outPath, "styles.json");

    purge(projectFolder, json).then((purgedStyles) => {
      console.log(`writing purged styles to file ${outfilePath}`);
      fs.writeFile(
        outfilePath,
        JSON.stringify(purgedStyles, null, "\t"),
        (err) => {
          if (err !== null) {
            console.log("ERR: ", err);
          }

          console.log("DONE!");
        }
      );
    });
  })
  .option("dir", {
    alias: "d",
    type: "string",
    description: "directory of the source code to scan for styles",
  })
  .option("out", {
    alias: "o",
    type: "string",
    description: "file path to write to",
  })
  .option("styles", {
    alias: "s",
    type: "string",
    description: "path to your styles json file",
  }).argv;
