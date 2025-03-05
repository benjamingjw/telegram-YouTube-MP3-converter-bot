const TelegramBot = require('node-telegram-bot-api');
const { exec } = require('child_process');
const fs = require('fs');

const bot = new TelegramBot('YOUR_BOT_TOKEN', { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    // Check if message is a YouTube link
    if (text && (text.includes('youtu.be') || text.includes('youtube.com'))) {
        // Send processing message
        bot.sendMessage(chatId, '⏳ Converting to MP3...');

        // Execute yt-dlp command
        exec(`yt-dlp -x --audio-format mp3 "${text}"`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return bot.sendMessage(chatId, '❌ Failed to download');
            }

            // Find the downloaded MP3 file
            fs.readdir('.', (err, files) => {
                const mp3File = files.find(file => file.endsWith('.mp3'));
                
                if (mp3File) {
                    // Send the MP3 file
                    bot.sendAudio(chatId, mp3File)
                        .then(() => {
                            // Optional: remove the file after sending
                            fs.unlinkSync(mp3File);
                        })
                        .catch(err => {
                            console.error('Send error:', err);
                            bot.sendMessage(chatId, '❌ Failed to send audio');
                        });
                }
            });
        });
    }
});

console.log('Bot is running...');
