# Bot discord Chuck Norris

Student Project to improve our API skills. \
Technologies : NodeJs and Docker

## Start with Bot Chuck Norris

Run `git clone https://github.com/RisKiki/angular-news-api.git` to get the project. 

### With start

Replace MY_TOKEN by your's \
Run `cd angular-news-api && ./start.sh MY_TOKEN` 

if there is an error please \
Run `sudo chmod +x start.sh && ./start.sh MY_TOKEN` 

Now your bot is running, enjoy !

### By your own

Replace MY_TOKEN by your's \
Run `cd angular-news-api && touch .env && echo "DISCORD_TOKEN='MY_TOKEN'" >> .env && docker compose up` 

Now your bot is running, enjoy !

WARNING ! You have to add your bot to a discord server, go [here](https://discordpy.readthedocs.io/en/latest/discord.html) to help you.

## Commands

| Commands | Description |
|----------|-------------|
| %joke | Get a random joke |
| %jokeCount | Get the number of joke we have |
| %jokeCategories | Get all joke's categories |
| %joke [category] | Get a random joke in this category |
| %joke [id] | Get joke identified by it id |
| %ping | Get pong and latency |
| %prefic [prefix] | Change prefix |
| %help | Help |

## Logs
You can find logs in logs files.

## License
[MIT](https://choosealicense.com/licenses/mit/)