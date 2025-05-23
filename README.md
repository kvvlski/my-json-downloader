# My JSON Downloader

This project is a TypeScript application that reads a JSON array of music track objects and downloads the tracks using the `yt-dlp` command-line tool.

## Project Structure

```
my-json-downloader
├── src
│   ├── main.ts          # Entry point of the application
│   ├── jsonProcessor.ts # Processes JSON data
│   ├── downloader.ts    # Handles downloading of tracks
│   └── types
│       └── index.ts     # Type definitions for Track and Album
├── package.json         # NPM configuration file
├── tsconfig.json        # TypeScript configuration file
└── README.md            # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-json-downloader
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Ensure you have `yt-dlp` installed on your system. You can install it via:
   ```
   pip install yt-dlp
   ```

## Usage

1. Place your JSON file containing the array of track objects in the project directory.

2. Update the `src/main.ts` file to point to your JSON file.

3. Run the application:
   ```
   npm start
   ```

## Dependencies

- TypeScript
- yt-dlp

## License

This project is licensed under the MIT License.