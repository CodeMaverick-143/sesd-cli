import { BaseCommand } from "./BaseCommand";
import { ApiService } from "../services/ApiService";
import { Logger } from "../utils/Logger";

export class CryptoCommand extends BaseCommand {
    readonly name = "crypto";
    readonly description = "Get current prices of Bitcoin and Ethereum";
    private api = new ApiService();

    async execute(): Promise<void> {
        try {
            const data = await this.api.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd");
            Logger.success("Current Crypto Prices (USD)");
            Logger.info(`Bitcoin: $${data.bitcoin.usd.toLocaleString()}`);
            Logger.info(`Ethereum: $${data.ethereum.usd.toLocaleString()}`);
        } catch (error: any) {
            Logger.error(`Failed to fetch crypto prices: ${error.message}`);
        }
    }
}
