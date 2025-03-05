# YouTube to MP3 Telegram Bot

A simple Telegram bot that converts YouTube links to MP3 files and sends them directly to your chat.

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- yt-dlp executable

## Installation

1. Clone the repository:
```bash
git clone https://github.com/benjamingjw/telegram-YouTube-MP3-converter-bot
cd youtube-mp3-telegram-bot
```

2. Install dependencies:
```bash
npm init -y
npm install node-telegram-bot-api
```

3. Download yt-dlp:

### Windows Users
- Go to the official yt-dlp GitHub releases page: https://github.com/yt-dlp/yt-dlp/releases
- Look for the latest release
- Download `yt-dlp.exe` from the Assets section
- Place `yt-dlp.exe` in the same directory as your bot script

### macOS/Linux Users
- Install via package manager:
  - macOS: `brew install yt-dlp`
  - Linux (Ubuntu/Debian): `sudo pip3 install yt-dlp`
  - Linux (Arch): `sudo pacman -S yt-dlp`

## Configuration

1. Create a Telegram Bot:
- Open Telegram and search for BotFather
- Send `/newbot` and follow the instructions
- Save the bot token

2. Set up the bot token:
- Open `bot.js`
- Replace `'YOUR_BOT_TOKEN'` with your actual Telegram bot token

## Running the Bot

```bash
node bot.js
```

## How to Use

1. Start a chat with your bot on Telegram
2. Send a YouTube link
3. Wait for the bot to convert and send the MP3 file

## Troubleshooting

- Ensure yt-dlp is installed and accessible
- For Windows, place `yt-dlp.exe` in the same directory as `bot.js`
- Check that your bot token is correct
- If you encounter permission issues, try running the script with administrator privileges

## Dependencies

- `node-telegram-bot-api`: Telegram Bot API wrapper
- `yt-dlp`: YouTube video downloader

## License

MIT License
