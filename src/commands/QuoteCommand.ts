import { BaseCommand } from "./BaseCommand";
import { ApiService } from "../services/ApiService";
import { Logger } from "../utils/Logger";

export class QuoteCommand extends BaseCommand{
    private api = new ApiService();

    async execute(): Promise<void>{
        const data = await this.api.get("https://api.quotable.io/random")

    Logger.success(`"${data.content}"`);
    Logger.info(`- ${data.author}`);
    }
}

