# Furbot the Discord Bot

![Furby_picture.jpg](assets%2FFurby_picture.jpg)
## How to Run Locally
1. Pull down repo.
2. Run `npm install` to install dependencies.
3. Get token from Cal or Discord.
4. Add token to `.env` file.
5. Once token is added, run `npm run start` to start the bot.
   - Everytime you make changes to the bot code locally, the bot will restart. This is done via nodedemon.
        - You can read more about nodemon here: https://www.npmjs.com/package/nodemon 
   - To stop the bot, press `Ctrl + C`.

## Updating Slash Commands
1. Add new slash commands to `commands/utility`.
2. Run `npm run deploycommands` to deploy the commands to Discord.
   - You can read more about slash commands here: https://discordjs.guide/creating-your-bot/command-deployment.html#guild-commands

## Linting
1. Run `npm run lint` to lint the code.

## Useful Links
1. Discord.js docs: https://discord.js.org/#/docs/main/stable/general/welcome
2. Discord Developer Portal: https://discord.com/developers/applications
3. Discord.js Guide: https://discordjs.guide/