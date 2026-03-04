#!/usr/bin/env node

import { Command } from "commander";
import { CommandFactory } from "./factory/CommandFactory";
import { Logger } from "./utils/Logger";

async function main() {
  const program = new Command();

  program
    .name("sesd-cli")
    .description("A simple and extensible command-line interface tool")
    .version("1.0.0");

  const commands = CommandFactory.getAllCommands();

  for (const cmd of commands) {
    const cliCommand = program.command(cmd.name).description(cmd.description);

    for (const option of cmd.getOptions()) {
      cliCommand.option(option.flags, option.description, option.defaultValue);
    }

    cliCommand.action(async (...args) => {
      // Commander passes args as [arg1, arg2, ..., options, command]
      const options = args[args.length - 2];
      const commandArgs = args.slice(0, args.length - 2);

      try {
        await cmd.execute(commandArgs, options);
      } catch (error: any) {
        Logger.error(`Command failed: ${error.message}`);
      }
    });
  }

  program.parse(process.argv);

  if (!process.argv.slice(2).length) {
    program.outputHelp();
  }
}

main().catch((err) => {
  Logger.error(`Unexpected error: ${err.message}`);
});