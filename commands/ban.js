module.exports = {
    name: 'ban',
    description: "this bans a user",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send("User has been banned");
        }else{
            message.channel.send("Could not ban user");
        }
    }
}