const deepai = require('deepai')
module.exports = {
    name: 'dream',
    description: "replies with image ran through deepdream filter",
    execute(message, args){
        var attach_url = message.attachments.array()[0].url
        JSON.stringify(attach_url);   
        (async function() {  
            var resp = await deepai.callStandardApi("deepdream", {
            image: attach_url,
            });
            message.reply(resp.output_url);       
         })()
        .catch(console.log)
        .catch(console.error)
        }
    }   
deepai.setApiKey('0bdcc9d0-3a23-41d9-b012-2d593ec2e04c');