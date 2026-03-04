import { BaseCommand } from "./BaseCommand";
import { ApiService } from "../services/ApiService";
import { Logger } from "../utils/Logger";
import { config } from "dotenv";

config();

export class WeatherCommand extends BaseCommand {
    readonly name = "weather <city>";
    readonly description = "Get current weather for a specific city";
    private api = new ApiService();

    async execute(args: string[]): Promise<void> {
        const city = args[0];

        if (!city) {
            Logger.error("City name is required.");
            return;
        }

        const apiKey = process.env.WEATHER_API_KEY;
        if (!apiKey) {
            Logger.error("OpenWeatherMap API key is missing. Please add WEATHER_API_KEY to your .env file.");
            return;
        }

        try {
            const data = await this.api.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            Logger.success(`Weather in ${city}`);
            Logger.info(`Temperature: ${data.main.temp}°C`);
            Logger.info(`Condition: ${data.weather[0].description}`);
        } catch (error: any) {
            Logger.error(`Failed to fetch weather: ${error.message}`);
        }
    }
}