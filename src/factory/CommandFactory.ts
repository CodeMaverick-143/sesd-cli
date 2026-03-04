import { BaseCommand } from "../commands/BaseCommand";
import { GithubCommand } from "../commands/GithubCommand";
import { WeatherCommand } from "../commands/WeatherCommand";
import { QuoteCommand } from "../commands/QuoteCommand";
import { SystemCommand } from "../commands/SystemCommand";
import { JokeCommand } from "../commands/JokeCommand";
import { CryptoCommand } from "../commands/CryptoCommand";
import { PasswordCommand } from "../commands/PasswordCommand";
import { CalcCommand } from "../commands/CalcCommand";
import { DictionaryCommand } from "../commands/DictionaryCommand";
import { AdviceCommand } from "../commands/AdviceCommand";

export class CommandFactory {
  static create(command: string): BaseCommand | null {
    const commands = this.getAllCommands();
    return commands.find(c => c.name.startsWith(command)) || null;
  }

  static getAllCommands(): BaseCommand[] {
    return [
      new GithubCommand(),
      new WeatherCommand(),
      new QuoteCommand(),
      new SystemCommand(),
      new JokeCommand(),
      new CryptoCommand(),
      new PasswordCommand(),
      new CalcCommand(),
      new DictionaryCommand(),
      new AdviceCommand()
    ];
  }
}