#!/usr/bin/env node

import { CommandFactory } from "./factory/CommandFactory";
import { Logger } from "./utils/Logger";

async function main() {
  const [, , commandName, ...args] = process.argv;

  if (!commandName) {
    Logger.error("Please provide a command.");
    return;
  }

  const command = CommandFactory.create(commandName);

  if (!command) {
    Logger.error("Invalid command.");
    return;
  }

  await command.execute(args);
}

main();