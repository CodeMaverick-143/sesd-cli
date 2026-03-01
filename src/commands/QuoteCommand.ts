import { BaseCommand } from "./BaseCommand";
import { ApiService } from "../services/ApiService";
import { Logger } from "../utils/Logger";

export class QuoteCommand extends BaseCommand {
    private api = new ApiService();

    async execute(): Promise<void> {
        const data = await this.api.get("https://zenquotes.io/api/random")
        const quote = data[0];

        Logger.success(`"${quote.q}"`);
        Logger.info(`- ${quote.a}`);
    }
}

