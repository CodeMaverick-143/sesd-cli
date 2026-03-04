# SESD CLI

A simple and extensible command-line interface tool built with TypeScript, following Object-Oriented Programming (OOP) principles.

---

<img width="1512" height="392" alt="Screenshot 2026-03-01 at 23 34 11" src="https://github.com/user-attachments/assets/1000bfb7-fc6c-4352-bf85-caef7b914588" />
<img width="1512" height="386" alt="Screenshot 2026-03-01 at 23 30 53" src="https://github.com/user-attachments/assets/92affede-f207-4632-8690-5206890b71a8" />
<img width="1509" height="391" alt="Screenshot 2026-03-01 at 23 30 29" src="https://github.com/user-attachments/assets/9fb10baf-14c2-4cfd-8172-8e2727e63344" />


---

## Features

- **github**: Fetch basic information about a GitHub user.
- **weather**: Get current weather for a specific city.
- **quote**: Get a random inspirational quote.
- **system**: Display basic system information.
- **joke**: Get a random joke.
- **crypto**: Get current prices of Bitcoin and Ethereum.
- **password**: Generate a random secure password with flags.
- **calc**: Basic arithmetic calculator.
- **define**: Get the definition of an English word.
- **advice**: Get random life advice.

## Prerequisites

- Node.js (v18 or higher recommended)
- npm

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/CodeMaverick-143/sesd-cli.git
   cd sesd-cli
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a .env file in the root directory and add your API keys:
   ```env
   WEATHER_API_KEY=your_openweathermap_api_key_here
   ```

## Usage

Run the CLI using `npm run dev -- [command] [args] [flags]`.

### Help & Version
```bash
npm run dev -- --help
npm run dev -- --version
```

### Examples

#### GitHub Info
```bash
npm run dev -- github [username]
```

#### Weather Info
```bash
npm run dev -- weather [city_name]
```

#### Password Generation (with flags)
```bash
npm run dev -- password --length 16 --numbers --symbols
```

#### Calculator
```bash
npm run dev -- calc 10 + 5
```

#### Crypto Prices
```bash
npm run dev -- crypto
```

#### Random Joke
```bash
npm run dev -- joke
```

## Tech Stack

- **TypeScript** (OOP approach with Classes and Interfaces)
- **Node.js**
- **Axios** (HTTP requests)
- **Commander** (Robust CLI framework)
- **Dotenv** (Environment variable management)
- **Chalk** (Advanced terminal styling)

## License

This project is licensed under the ISC License.
