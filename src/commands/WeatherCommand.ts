import { BaseCommand } from "./BaseCommand";
import { ApiService } from "../services/ApiService";
import { Logger } from "../utils/Logger";
import { config } from "dotenv";

config();

export class WeatherCommand extends BaseCommand{
    private api = new ApiService();

    async execute(args: string[]): Promise<void> {
        const city = args[0]

        if(!city){
            Logger.error("City name is required.")
            return
        }
        const apiKey = process.env.Weather_API_Key;

        const data = await this.api.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

        Logger.success(`Weather in ${city}`)
        Logger.info(`Temprature: ${data.main.temp}°C`)
        Logger.info(`Condition: ${data.weather[0].description}`)
    }
}