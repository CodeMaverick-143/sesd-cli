import { BaseCommand } from "./BaseCommand";
import os from "os";
import { Logger } from "../utils/Logger";

export class SystemCommand extends BaseCommand {
  readonly name = "system";
  readonly description = "Display basic system information";

  async execute(): Promise<void> {
    Logger.success("System Info");
    Logger.info(`Platform: ${os.platform()}`);
    Logger.info(`CPU Cores: ${os.cpus().length}`);
    Logger.info(`Free Memory: ${Math.round(os.freemem() / 1024 / 1024)} MB`);
  }
}