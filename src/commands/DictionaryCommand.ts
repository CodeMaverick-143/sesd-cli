import { BaseCommand } from "./BaseCommand";
import { ApiService } from "../services/ApiService";
import { Logger } from "../utils/Logger";

export class DictionaryCommand extends BaseCommand {
    readonly name = "define <word>";
    readonly description = "Get the definition of a word";
    private api = new ApiService();

    async execute(args: string[]): Promise<void> {
        const word = args[0];
        if (!word) {
            Logger.error("Please provide a word to define.");
            return;
        }

        try {
            const data = await this.api.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            const definition = data[0].meanings[0].definitions[0].definition;
            Logger.success(`Definition of ${word}:`);
            Logger.info(definition);
        } catch (error: any) {
            Logger.error(`Word not found or API error: ${error.message}`);
        }
    }
}
