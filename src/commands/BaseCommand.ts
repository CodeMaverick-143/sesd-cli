export interface CommandOption {
  flags: string;
  description: string;
  defaultValue?: any;
}

export abstract class BaseCommand {
  abstract readonly name: string;
  abstract readonly description: string;

  getOptions(): CommandOption[] {
    return [];
  }

  abstract execute(args: string[], options: any): Promise<void>;
}
