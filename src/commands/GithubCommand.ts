import { BaseCommand } from "./BaseCommand";
import { ApiService } from "../services/ApiService";
import { Logger } from "../utils/Logger";

export class GithubCommand extends BaseCommand{
    private api = new ApiService();

    async execute(args: string[]): Promise<void>{
        const username = args[0]

        if(!username){
            Logger.error("Username required");
            return;
        }

        const data = await this.api.get(`https://api.github.com/users/${username}`)

        Logger.success(`Github User: ${data.login}`)
        Logger.info(`Followers: ${data.followers}`)
        Logger.info(`Public Repos: ${data.public_repos}`)
    }
}

