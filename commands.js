const Discord = require("discord.js");

var commands = new Map ([
    ['account', 60],
    ['recovery',60]
]);

var commandCooldown = new Map([
    ['account', new Map()],
    ['recovery', new Map()]
]);

var handler = async function(message,command) {

    let delay = () => {
        setTimeout(() => {
            commandCooldown.get(command).delete(message.author.id);
            message.channel.send(`${message.author} cooldown has expired for ${command} commad.`)
        }, commands.get(command) * 1000);
    }

    if(commandCooldown.get(command).has(message.author.id)){
        let init = commandCooldown.get(command).get(message.author.id);
        let curr = new Date();
        let diff = Math.round((curr-init)/1000);
        let time = commands.get(command);
        message.channel.send(`${time-diff} seconds left for ${command} command.`)

    }
    else {
        if(command === 'account') {
            //Handle command
            message.author.send('Bot is typing <a:typing:705296058900545567>')
      .then(sentMessage => sentMessage.delete({ timeout: 8000 })
     .catch(error => {
      // Hnadler
    }))
    .then(() => {
      message.channel.awaitMessages(response => response.content === '', {
        max: 1,
        time: 100,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.send(`The collected message was: ${collected.first().content}`);
        })
        .catch(() => {
          let uEmbed1 = new Discord.MessageEmbed()
            .setColor(colors.blue)
            .setTitle(`Hello there! Please type one of the Options bellow`)
            .setThumbnail('https://cdn.discordapp.com/attachments/696241284352049193/698828564191117312/knight.gif')
            .setAuthor(`${message.guild.name} Live Chat Beta`, message.guild.iconURL)
            .setDescription(`
  
2. If you want to purchase a __Modded Account__ please type, _\`Buy Modded Account Now\`_ .

3. If you want to know how the proccess works please type, _\`Modded Account Process\`_.

  `)
            .setTimestamp()
            .setFooter(`Live chat bot | At your service ${message.author.username}`, 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
            message.author.send({embed: uEmbed1})
            .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
});
        
            commandCooldown.get(command).set(message.author.id, new Date());
            delay();
        } 
        
        else if(command === 'recovery') {
            message.author.send('Bot is typing <a:typing:705296058900545567>')
    .then(sentMessage => sentMessage.delete({ timeout: 8000 })
   .catch(error => {
    // Hnadler
  }))
  .then(() => {
    message.channel.awaitMessages(response => response.content === '', {
      max: 1,
      time: 100,
      errors: ['time'],
    })
    .then((collected) => {
        message.channel.send(`The collected message was: ${collected.first().content}`);
      })
      .catch(() => {
        let uEmbed1 = new Discord.MessageEmbed()
          .setColor(colors.blue)
          .setTitle(`Hello there! Please fallow the instructions bellow`)
          .setThumbnail('https://cdn.discordapp.com/attachments/696241284352049193/698828564191117312/knight.gif')
          .setAuthor(`${message.guild.name} Live Chat Beta`, message.guild.iconURL)
          .setDescription(`

2. If you want to purchase a __Recovery__ please type, _\`Buy Recovery Now\`_ .

3. If you want to know how the proccess works please type, _\`Recovery Process\`_.

`)
          .setTimestamp()
          .setFooter(`Live chat bot | At your service ${message.author.username}`, 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
          message.author.send({embed: uEmbed1});
  });
  });
  
            
        } 
        else if(command === '...') {

        }
        else if(command === '...') {

        }
    }
}
module.exports = { commands, commandCooldown, handler };