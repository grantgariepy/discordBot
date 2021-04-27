module.exports = {
    name:'rules',
    description: 'Embeds',
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#990000')
        .setTitle('Rules')
        //.setURL('https://youtube.com/')
        .setDescription('This is an embed for server rules')
        .addFields(
            {name: 'Rule 1', value: 'Be nice'},
            {name: 'Rule 2', value: 'Be cool'},
            {name: 'Rule 3', value: 'Be happy'}
        )
        .setImage('https://66.media.tumblr.com/5062f59a365707a1781c9ab3d05dc574/tumblr_p5lxzd6DBp1v05rsfo1_500.gif')
        .setFooter('Remember, I will be watching you.');

        message.channel.send(newEmbed);
    }

    
}