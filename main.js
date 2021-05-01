//comment describing how to add/remove code to server
//git add .
//git commit -m 'message'
//git push
//sign into server
//navigate to repository dir 'var/ww/nitemare-bot
//sudo git pull


const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('nitemare bot is online');
});

client.on('message', message =>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'rules'){
        client.commands.get('rules').execute(message, args, Discord);
    } else if(command === 'clear'){
        client.commands.get('clear').execute(message, args, Discord);
    } else if(command === 'kick'){
        client.commands.get('kick').execute(message, args, Discord);
    } else if(command === 'ban'){
        client.commands.get('ban').execute(message, args, Discord);
    } else if(command === 'ping'){
        client.commands.get('ping').execute(message, args, Discord);
    } else if(command === 'youtube'){
        client.commands.get('youtube').execute(message, args, Discord);
    }else if(command === 'play'){
        client.commands.get('play').execute(message, args, Discord);
    } else if(command === 'leave'){
        client.commands.get('leave').execute(message, args, Discord);
    }else if(command === 'dream'){
            client.commands.get('dream').execute(message, args, Discord);
        }
    
    // if(command === 'ping'){
    //     client.commands.get('ping').execute(message, args);
    // } else if (command == 'youtube'){
    //     client.commands.get('youtube').execute(message, args);
});








client.login('ODM2NTM3MDE3NTYyNTYyNTkx.YIfbzw.EDDVMEOQsi-ih9uAc5ceMjvXFxs');

