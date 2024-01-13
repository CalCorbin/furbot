# Furbot the Discord Bot

## How to Run Locally
1. Pull down repo.
2. Run `npm install` to install dependencies.
3. Get token from Cal or Discord.
4. Add token to `.env` file.
5. Once token is added, run `npm run start` to start the bot.
   - Everytime you make changes to the bot code locally, the bot will restart. This is done via nodedemon.
        - You can read more about nodemon here: https://www.npmjs.com/package/nodemon 
   - To stop the bot, press `Ctrl + C`.

## Linting
1. Run `npm run lint` to lint the code.