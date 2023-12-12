#! /usr/bin/env node

const { program } = require("commander");
const { buildPortifolio } = require("../src/commands/buildPortifolio")
const { version } = require("../package.json");


program
    .command('build <username>')
    .description("Build site with your GitHub username. This will be used to customize your site")
    .action(buildPortifolio);


program
    .version(version, "-v --version")
    .usage("<command> [options]")
    .parse(process.argv);
  
if (program.args.length === 0) program.Help();