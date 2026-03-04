import { BaseCommand } from "./BaseCommand";
import { ApiService } from "../services/ApiService";
import { Logger } from "../utils/Logger";

export class JokeCommand extends BaseCommand {
    readonly name = "joke";
    readonly description = "Get a random joke";
    private api = new ApiService();

    async execute(): Promise<void> {
        try {
            const data = await this.api.get("https://official-joke-api.appspot.com/random_joke");
            Logger.success(data.setup);
            setTimeout(() => {
                Logger.info(`... ${data.punchline}`);
            }, 1000);
        } catch (error: any) {
            Logger.error(`Failed to fetch joke: ${error.message}`);
        }
    }
}
