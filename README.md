# SESD CLI

A simple and extensible command-line interface tool built with TypeScript.

## Features

- github: Fetch basic information about a GitHub user.
- weather: Get current weather for a specific city (requires OpenWeatherMap API key).
- quote: Get a random inspirational quote.
- system: Display basic system information.

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

You can run the CLI using npm scripts:

### GitHub Info
```bash
npm run dev github [username]
```

### Weather Info
```bash
npm run dev weather [city_name]
```

### Random Quote
```bash
npm run dev quote
```

### System Info
```bash
npm run dev system
```

## Development

Build the project:
```bash
npm run build
```

Start the compiled version:
```bash
npm start
```

## Tech Stack

- TypeScript
- Node.js
- Axios (HTTP requests)
- Commander (CLI framework)
- Dotenv (Environment variable management)
- Chalk (Terminal styling)

## License

This project is licensed under the ISC License.