const Discord = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const myconfig = require('./config');
const client = new Discord.Client();
const App = require('./app');

const app = new App(client, myconfig);

app.start();