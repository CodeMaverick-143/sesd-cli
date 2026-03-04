import chalk from 'chalk';

export class Logger {
    static success(message: string) {
        console.log(chalk.green(message))
    }

    static error(message: string) {
        console.log(chalk.red(message))
    }

    static info(message: string) {
        console.log(chalk.blue(message))
    }

    static warn(message: string) {
        console.log(chalk.yellow(message))
    }

    static debug(message: string) {
        console.log(chalk.gray(message))
    }
}