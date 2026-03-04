import { BaseCommand, CommandOption } from "./BaseCommand";
import { Logger } from "../utils/Logger";

export class PasswordCommand extends BaseCommand {
    readonly name = "password";
    readonly description = "Generate a random password";

    getOptions(): CommandOption[] {
        return [
            { flags: "-l, --length <number>", description: "Length of the password", defaultValue: "12" },
            { flags: "-n, --numbers", description: "Include numbers", defaultValue: false },
            { flags: "-s, --symbols", description: "Include symbols", defaultValue: false }
        ];
    }

    async execute(args: string[], options: any): Promise<void> {
        const length = parseInt(options.length);
        const includeNumbers = options.numbers;
        const includeSymbols = options.symbols;

        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" +
            (includeNumbers ? "0123456789" : "") +
            (includeSymbols ? "!@#$%^&*()_+~`|}{[]:;?><,./-=" : "");

        let password = "";
        for (let i = 0; i < length; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }

        Logger.success("Generated Password:");
        Logger.info(password);
    }
}
