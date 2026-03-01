import { BaseCommand } from "../commands/BaseCommand";
import { GithubCommand } from "../commands/GithubCommand";
import { WeatherCommand } from "../commands/WeatherCommand";
import { QuoteCommand } from "../commands/QuoteCommand";
import { SystemCommand } from "../commands/SystemCommand";

export class CommandFactory {
  static create(command: string): BaseCommand | null {
    switch (command) {
      case "github":
        return new GithubCommand();
      case "weather":
        return new WeatherCommand();
      case "quote":
        return new QuoteCommand();
      case "system":
        return new SystemCommand();
      default:
        return null;
    }
  }
}