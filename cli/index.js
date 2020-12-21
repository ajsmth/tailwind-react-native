#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const fs = require("fs");
const util = require("util");
const path = require("path");

const build = require("./build");

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
    alis: "c",
    type: "string",
    description: "path to a custom tailwind.config.js file",
  })
  .option("out", {
    alis: "o",
    type: "string",
    description: "path to write the generated styles.json file",
  }).argv;
