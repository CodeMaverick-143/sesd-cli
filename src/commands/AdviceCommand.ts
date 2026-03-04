import { BaseCommand } from "./BaseCommand";
import { ApiService } from "../services/ApiService";
import { Logger } from "../utils/Logger";

export class AdviceCommand extends BaseCommand {
    readonly name = "advice";
    readonly description = "Get random life advice";
    private api = new ApiService();

    async execute(): Promise<void> {
        try {
            const data = await this.api.get("https://api.adviceslip.com/advice");
            Logger.success("Random Advice:");
            Logger.info(data.slip.advice);
        } catch (error: any) {
            Logger.error(`Failed to fetch advice: ${error.message}`);
        }
    }
}
