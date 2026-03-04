import { BaseCommand } from "./BaseCommand";
import { ApiService } from "../services/ApiService";
import { Logger } from "../utils/Logger";

export class QuoteCommand extends BaseCommand {
    readonly name = "quote";
    readonly description = "Get a random inspirational quote";
    private api = new ApiService();

    async execute(): Promise<void> {
        try {
            const data = await this.api.get("https://zenquotes.io/api/random");
            const quote = data[0];

            Logger.success(`"${quote.q}"`);
            Logger.info(`- ${quote.a}`);
        } catch (error: any) {
            Logger.error(`Failed to fetch quote: ${error.message}`);
        }
    }
}

