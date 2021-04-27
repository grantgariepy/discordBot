module.exports = {
    name: 'youtube',
    description: "sends youtube link",
    execute(message, args){

        let role = message.guild.roles.cache.find(r =>r.name === "Mod");

        // if(message.member.permissions.has("BAN_MEMBERS")){
        //     message.channel.send('You have the permission to ban members');
        // } else {
        //     message.channel.send("You don't have the permission to ban members!");
        // }

        if(message.member.roles.cache.some(r =>r.name === "Mod")){
          message.channel.send('https://youtube.com');  

        } else {
            message.channel.send("You don't have the correct permissions for this command, let me fix that :)"); 
            message.member.roles.add(role).catch(console.error);
        }
    }
}