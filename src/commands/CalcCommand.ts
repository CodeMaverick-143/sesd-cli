import { BaseCommand } from "./BaseCommand";
import { Logger } from "../utils/Logger";

export class CalcCommand extends BaseCommand {
    readonly name = "calc <num1> <operator> <num2>";
    readonly description = "Basic arithmetic calculator (e.g. 10 + 5)";

    async execute(args: string[]): Promise<void> {
        if (args.length < 3) {
            Logger.error("Incomplete arguments. Usage: calc <num1> <operator> <num2>");
            return;
        }

        const num1 = parseFloat(args[0]);
        const operator = args[1];
        const num2 = parseFloat(args[2]);

        if (isNaN(num1) || isNaN(num2)) {
            Logger.error("Invalid numbers provided.");
            return;
        }

        let result: number;
        switch (operator) {
            case "+": result = num1 + num2; break;
            case "-": result = num1 - num2; break;
            case "*": result = num1 * num2; break;
            case "/":
                if (num2 === 0) {
                    Logger.error("Cannot divide by zero.");
                    return;
                }
                result = num1 / num2;
                break;
            default:
                Logger.error("Unsupported operator. Use +, -, *, or /");
                return;
        }

        Logger.success(`Result: ${result}`);
    }
}
