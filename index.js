const Discord = require("discord.js");
const colors = require("./colors.json");
const bot = new Discord.Client();
const talkedRecently = new Set();
const { MessageEmbed } = require('discord.js')
const DESTINATION = '712527883129716757';
const openTickets = new Map();
const ACCEPT = '708923041928839169';
const REJECT = '708923028846805073';


const swearWords = ["Nigga", "nigga", "shit", "Shit", "Fuck", "fuck", "Stupid", "stupid", "Dick", "dick", "Dipship", "dipshit", "Asshole", "asshole", "STFU", "Stfu", "stfu", "Bitch", "bitch", "hoe", "Hoe", "HOE", "Dumb", "DUMB", "Dumass", "DUMASS", "Dumfuck", "DUMFUCK"];

const token = process.env.token;

const PREFIX = '!';

// Bot Activity start

bot.on('ready', () => {
    console.log(' is online!')
    let statuses = [
        `${bot.guilds.cache.size} Servers`,
        "!help",
        `over ${bot.users.cache.size} users!`,
         "helping users",
         "Bot helper"
    ]
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)]
        bot.user.setActivity(status, {type: "WATCHING"});
    }, 5000)
    

})

// Bot Activity end.

// What keeps the messages running satrt

bot.on("message", async message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    if (message.author.bot) return;

// What keeps the messages running end.

// command cooldown

if (talkedRecently.has(message.author.id))
  return;
  
// end of command cool down

// Swear word start

if( swearWords.some(word => message.content.includes(word)) ) {
    if(message.channel.type === 'dm'){
    message.react('😡');
    message.author.send("``Please respect bot and watch your language``")
    .then(sentMessage => sentMessage.delete({ timeout: 50000
    }))
    .catch(error => {
  
  });
    // Or just do message.delete();
  }
  } ;

// Swear word end.

// Live chat start



// Live chat end.

//   Helper Start

if (message.content.toLowerCase() === '!help'){
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
            .setTitle("Hello there Human you have requested for help, how can i help you today?")
            .setThumbnail('https://cdn.discordapp.com/attachments/696241284352049193/698828564191117312/knight.gif')
            .setAuthor(`${message.guild.name} Live Chat Beta`, message.guild.iconURL)
            .setDescription(`
            1. If you need help or have an issue with your purchase please type, 🛍️  _\`Purchase\`_  🛍️.

            2. If you need information, help or have an issue with Impulse mod please type, <:impulse:699823912862744606>  _\`Impulse\`_  <:impulse:699823912862744606>.

            3. If you need information, help or have an issue with GTA V Game key please type, <:GTAV:701312114853150800>  _\`GTA V\`_  <:GTAV:701312114853150800>.

            4. If you need information, help or have an issue with Spotify Premium Key type, <:spotify:707451943311900773>  _\`Spotify\`_  <:spotify:707451943311900773>.

            5. If you need information, help or have an issue with NordVPN please type, <:nordvpn:695856469316337714>  _\`NordVPN\`_  <:nordvpn:695856469316337714>.`)
            .setTimestamp()
            .setFooter(`Live chat bot | At your service ${message.author.username}`, 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
            message.author.send({embed: uEmbed1});
    });
    });
    };
      

// Break

if (message.content.toLowerCase() === 'purchase'){
    if(message.channel.type === 'dm'){
  message.author.send('Bot is typing <a:typing:705296058900545567>')
    .then(sentMessage => sentMessage.delete({ timeout: 3000 })
   .catch(error => {
    // Hnadler
  }))
  message.react('699822533481857035')
  .then(() => {
    message.channel.awaitMessages(response => response.content === '', {
      max: 1,
      time: 3000,
      errors: ['time'],
    })
    .then((collected) => {
        message.channel.send(`The collected message was: ${collected.first().content}`);
      })
      .catch(() => {
        let uEmbed2 = new Discord.MessageEmbed()
          .setTitle('__purchase__')
          .setColor(colors.aqua)
          .setDescription('Please type, _``help with purchase``_  in order to to talk chat with a staff member or admin.')
          .setTimestamp()
          .setFooter(`Live chat bot | At your service`, 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
        message.author.send({embed: uEmbed2 })
        .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
   .catch(error => {
      }));
    });
  });
    }
  };

// Break

if (message.content.toLowerCase() === 'help with purchase') {
  if (message.author.bot) return;
  if (message.channel.type === 'dm') {
    if (!openTickets.has(message.author.id)) {
      const embed = new MessageEmbed()
      .setDescription(`Hello! ${message.author} We have received your message, Staff might take up to 24 hours to respond back please be patient. In the meantime try checking other commands and see if any of them help`)
      .setColor('#3AFF00')
      .setTimestamp()
      message.channel.send(embed)
      .then(sentMessage => sentMessage.delete({ timeout: 86400000 })
      .catch(error => {
      }));
      openTickets.set(message.author.id, message.guild);
      const channel = bot.channels.cache.get(DESTINATION);
      if (channel) {
          const embed = new MessageEmbed()
          .setAuthor(message.author ,message.author.displayAvatarURL())
          .setDescription(`[${message.author.tag}] needs help with their purchase`)
          .setColor('#0070FF')
          .setTimestamp();
          const msg = await channel.send(embed);
          await msg.react(ACCEPT);
          await msg.react(REJECT);  
          try {
              const reactionFilter = (reaction, user) => [ACCEPT, REJECT].includes(reaction.emoji.id) && !user.bot;
              const reactions = await msg.awaitReactions(reactionFilter, { max: 1, time: 86400000, errors: ['time'] });
              const choice = reactions.get(ACCEPT) || reactions.get(REJECT);
              if (choice.emoji.id === ACCEPT) {
                message.author.send('_Staff looking for your query, please stand by_ <a:Loading:705280596217430019>')
                .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                const embed3 = new MessageEmbed()
                  .setDescription(`Staff has accepted your query.`)
                  .setColor('#3AFF00')
                  .setTimestamp()
                  message.author.send(embed3)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                  });
                  });
                  channel.send('_Accepting Users message_ <a:Loading:705280596217430019>')
                .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                  const embed4 = new MessageEmbed()
                  .setDescription(`You have Accepted the message`)
                  .setColor('#3AFF00')
                  .setTimestamp()
                  channel.send(embed4)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                });
                });
                 await handleCollectors(channel, message); 
                 message.author.send('_Staff is Ending chat_ <a:Loading:705280596217430019>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                 const embed = new MessageEmbed()
                  .setDescription(`Staff has ended the chat, if you have any other questions feel free to ask our staff for help.`)
                  .setColor('#3AFF00')
                  .setTimestamp()
                  message.author.send(embed)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                  });
                  });                                                 
                  channel.send('_Ending chat_ <a:Loading:705280596217430019>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                  const embed1 = new MessageEmbed()
                  .setDescription(`_You have ended the chat with_: __${message.author.tag}__`)
                  .setColor('#3AFF00')
                  .setTimestamp()
                  channel.send(embed1)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                });
              });
                 openTickets.delete(message.author.id);
              } else if (choice.emoji.id === REJECT) {
                message.author.send('_Staff looking for your query, please stand by_ <a:Loading:705280596217430019>')
                .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                  const embed = new MessageEmbed()
                  .setDescription(`Your message was rejected by Staff. You may try later`)
                  .setColor('#FF0000')
                  .setTimestamp()
                  message.author.send(embed)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                  });
                  });
                  channel.send('_Rejecting Users Message_ <a:Loading:705280596217430019>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                  const embed1 = new MessageEmbed()
                  .setDescription(`You have rejected the message.`)
                  .setColor('#FF0000')
                  .setTimestamp()
                  channel.send(embed1)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                  });
                  });
                  setTimeout(() => {
                      openTickets.delete(message.author.id);
                  }, 30000);
              }
          } catch (err) {
              console.log(err);
              message.author.send('_Staff is taking longer than usual_ <a:Loading:705280596217430019>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
              const embed = new MessageEmbed()
              .setDescription(`No one was available to accept your query. Please try again`)
              .setColor('#FFB900')
              .setTimestamp()
              message.author.send(embed)
              .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
              .catch(error => {
              }));
              });
              });
              channel.send('_Automatically Rejecting Users Message_ <a:Loading:705280596217430019>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
              const embed1 = new MessageEmbed()
              .setDescription(`the message was automatically rejected because no one reacted to the message`)
              .setColor('#FFB900')
              .setTimestamp()
              channel.send(embed1)
              .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
              .catch(error => {
              }));
              });
              });
              openTickets.delete(message.author.id);
          }
      } else {
          message.channel.send('Somethins went wrong. Please reach out to server Admin directly.');
          openTickets.delete(message.author.id);
      }
  }
}
}

function handleCollectors(channeL, message) {

  const filter = m => m.author.id === message.author.id;
  const dmCollector = message.channel.createMessageCollector(filter);

  const guildCollectorFilter = m => m.channel.id === channeL.id && !m.author.bot;
  const guildChannelCollector = channeL.createMessageCollector(guildCollectorFilter);

  return new Promise((resoLve, reject) => {
      dmCollector.on('collect', m => {
          const files = getAttachmentLinks(m.attachments);
          const embed = new MessageEmbed()
            .setAuthor(`User: ${m.author.tag}, ${m.author.id}`)
            .setDescription(`\`Users Message:\` **${m.content}** `)
            .setColor('#0093FF')
            .setTimestamp()
            .setImage(`${files}`)
            .setFooter('talking with user', message.author.displayAvatarURL());
            channeL.send(embed);
        });
      guildChannelCollector.on('collect', m => {
          if (m.content.toLowerCase() === '--stop') {
              guildChannelCollector.stop();
              dmCollector.stop();
              resoLve();
          } else {
              const files = getAttachmentLinks(m.attachments);
              const embed = new MessageEmbed()
              .setAuthor(`Staff member: ${m.author.tag}`)
              .setDescription(`\`Staff Message:\` **${m.content}** `)
              .setImage(`${files}`)
              .setTimestamp()
              .setFooter('Live chat with agent', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif');
              message.author.send(embed)
              .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
              .catch(error => {
              }));
          }
      })
  });
}

function getAttachmentLinks(attachments) {
  const valid = /^.*(gif|png|jpg|jpeg)$/g
  return attachments.array()
    .filter(attachment => valid.test(attachment.url))
    .map(attachment => attachment.url);
}

// Break

if (message.content.toLowerCase() === 'impulse'){
  if(message.channel.type === 'dm'){
message.author.send('Bot is typing <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('699823912862744606')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed3 = new Discord.MessageEmbed()
      uEmbed3.setTitle('__Impulse__')
      uEmbed3.setColor(colors.orange)
      uEmbed3.addField ('__', '1. Type, _``Impulse issue``_ if the key is not working or if you need help with impulse mod menu.',)
      uEmbed3.addField ('__', '2. Type, _``Impulse redeem``_ if you need help on how to redeem the key.',)
      uEmbed3.addField ('__', '3. Type, _``Impulse inject``_ if you need help on how to inject(Install) impulse to gta.')
      uEmbed3.addField ('__', '4. Type, _``Impulse buying options``_ if you wish to check out our prices or version options')
      uEmbed3.addField ('__', '5. Type, _``Impulse other``_ if you need help with something else.')
      uEmbed3.setTimestamp()
     uEmbed3.setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
      message.author.send({embed: uEmbed3})
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
});
  }
};

// Break

if (message.content.toLowerCase() === 'impulse issue'){
  if(message.channel.type === 'dm'){
message.author.send('Bot is typing <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('❗')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed4 = new Discord.MessageEmbed()
      .setTitle('__Impulse Issue__')
      .setColor(colors.orange)
      .setDescription('Please type, _``help with impulse``_ in order to to chat with a staff member or admin.')
      .setTimestamp()
      .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
      message.author.send({embed: uEmbed4})
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
});
  }
};

// Break

if (message.content.toLowerCase() === 'help with impulse') {
  if (message.author.bot) return;
  if (message.channel.type === 'dm') {
    if (!openTickets.has(message.author.id)) {
      const embed = new MessageEmbed()
      .setDescription(`Hello! ${message.author} We have received your message, Staff might take up to 24 hours to respond back please be patient. In the meantime try checking other commands and see if any of them help`)
      .setColor('#3AFF00')
      .setTimestamp()
      message.channel.send(embed)
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
      .catch(error => {
      }));
      openTickets.set(message.author.id, message.guild);
      const channel = bot.channels.cache.get(DESTINATION);
      if (channel) {
          const embed = new MessageEmbed()
          .setAuthor(message.author ,message.author.displayAvatarURL())
          .setDescription(`[${message.author.tag}] needs help with impulse`)
          .setColor('#0070FF')
          .setTimestamp();
          const msg = await channel.send(embed);
          await msg.react(ACCEPT);
          await msg.react(REJECT);  
          try {
              const reactionFilter = (reaction, user) => [ACCEPT, REJECT].includes(reaction.emoji.id) && !user.bot;
              const reactions = await msg.awaitReactions(reactionFilter, { max: 1, time: 86400000, errors: ['time'] });
              const choice = reactions.get(ACCEPT) || reactions.get(REJECT);
              if (choice.emoji.id === ACCEPT) {
                message.author.send('_Staff looking for your query, please stand by_ <a:Loading:705280596217430019>')
                .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                const embed3 = new MessageEmbed()
                  .setDescription(`Staff has accepted your query.`)
                  .setColor('#3AFF00')
                  .setTimestamp()
                  message.author.send(embed3)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                  });
                  });
                  channel.send('_Accepting Users message_ <a:Loading:705280596217430019>')
                .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                  const embed4 = new MessageEmbed()
                  .setDescription(`You have Accepted the message`)
                  .setColor('#3AFF00')
                  .setTimestamp()
                  channel.send(embed4)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                });
                });
                 await handleCollectors(channel, message); 
                 message.author.send('_Staff is Ending chat_ <a:Loading:705280596217430019>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                 const embed = new MessageEmbed()
                  .setDescription(`Staff has ended the chat, if you have any other questions feel free to ask our staff for help.`)
                  .setColor('#3AFF00')
                  .setTimestamp()
                  message.author.send(embed)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                  });
                  });
                                
                  channel.send('_Ending chat_ <a:Loading:705280596217430019>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                  const embed1 = new MessageEmbed()
                  .setDescription(`_You have ended the chat with_: __${message.author.tag}__`)
                  .setColor('#3AFF00')
                  .setTimestamp()
                  channel.send(embed1)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                });
              });
                 openTickets.delete(message.author.id);
              } else if (choice.emoji.id === REJECT) {
                message.author.send('_Staff looking for your query, please stand by_ <a:Loading:705280596217430019>')
                .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                  const embed = new MessageEmbed()
                  .setDescription(`Your message was rejected by Staff. You may try later`)
                  .setColor('#FF0000')
                  .setTimestamp()
                  message.author.send(embed)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                  });
                  });
                  channel.send('_Rejecting Users Message_ <a:Loading:705280596217430019>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                  const embed1 = new MessageEmbed()
                  .setDescription(`You have rejected the message.`)
                  .setColor('#FF0000')
                  .setTimestamp()
                  channel.send(embed1)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                  });
                  });
                  setTimeout(() => {
                      openTickets.delete(message.author.id);
                  }, 30000);
              }
          } catch (err) {
              console.log(err);
              message.author.send('_Staff is taking longer than usual_ <a:Loading:705280596217430019>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
              const embed = new MessageEmbed()
              .setDescription(`No one was available to accept your query. Please try again`)
              .setColor('#FFB900')
              .setTimestamp()
              message.author.send(embed)
              .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
              .catch(error => {
              }));
              });
              });
              channel.send('_Automatically Rejecting Users Message_ <a:Loading:705280596217430019>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
              const embed1 = new MessageEmbed()
              .setDescription(`the message was automatically rejected because no one reacted to the message`)
              .setColor('#FFB900')
              .setTimestamp()
              channel.send(embed1)
              .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
              .catch(error => {
              }));
              });
              });
              openTickets.delete(message.author.id);
          }
      } else {
          message.channel.send('Somethins went wrong. Please reach out to server Admin directly.');
          openTickets.delete(message.author.id);
      }
  }
}
}

function handleCollectors(channeL, message) {

  const filter = m => m.author.id === message.author.id;
  const dmCollector = message.channel.createMessageCollector(filter);

  const guildCollectorFilter = m => m.channel.id === channeL.id && !m.author.bot;
  const guildChannelCollector = channeL.createMessageCollector(guildCollectorFilter);

  return new Promise((resoLve, reject) => {
      dmCollector.on('collect', m => {
          const files = getAttachmentLinks(m.attachments);
          const embed = new MessageEmbed()
            .setAuthor(`User: ${m.author.tag}, ${m.author.id}`)
            .setDescription(`\`Users Message:\` **${m.content}** `)
            .setColor('#0093FF')
            .setTimestamp()
            .setImage(`${files}`)
            .setFooter('talking with user', message.author.displayAvatarURL());
            channeL.send(embed);
        });
      guildChannelCollector.on('collect', m => {
          if (m.content.toLowerCase() === '--stop') {
              guildChannelCollector.stop();
              dmCollector.stop();
              resoLve();
          } else {
              const files = getAttachmentLinks(m.attachments);
              const embed = new MessageEmbed()
              .setAuthor(`Staff member: ${m.author.tag}`)
              .setDescription(`\`Staff Message:\` **${m.content}** `)
              .setImage(`${files}`)
              .setTimestamp()
              .setFooter('Live chat with agent', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif');
              message.author.send(embed)
              .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
              .catch(error => {
              }));
          }
      })
  });
}

function getAttachmentLinks(attachments) {
  const valid = /^.*(gif|png|jpg|jpeg)$/g
  return attachments.array()
    .filter(attachment => valid.test(attachment.url))
    .map(attachment => attachment.url);
}

// Break

if (message.content.toLowerCase() === 'impulse redeem'){ 
  if(message.channel.type === 'dm'){
message.author.send('Bot is typing <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('692526188542951515')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed5 = new Discord.MessageEmbed()
    .setTitle('__Impulse Redeem__')  
    .setColor(colors.orange)
    .setDescription('You have either recieved a Impulse Crypto Voucher or Impulse Key by the seller.')
    .addField('_', 'Please type, ``Voucher`` if you got a crypto voucher.')
    .addField('_', 'Please type, ``Key`` if you got a impulse key.')
    .setTimestamp()
    .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
     message.author.send({embed: uEmbed5})
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
});
  }
};

// Break

if (message.content.toLowerCase() === 'voucher'){ 
  if(message.channel.type === 'dm'){
message.author.send('Bot is typing <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('692526188542951515')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed5 = new Discord.MessageEmbed()
    .setTitle('__Impulse Redeem CryptoVoucher__')
    .setColor(colors.orange)
    .addField('__', 'To redeem a code sent by the seller please visit https://impulse.one/purchase.php. Once you are in the website make sure you login or Sign up, after you login look for the :shopping_cart: Purchase category, you will see 3 differnt versions of impulse which are ESSENTIAL, STANDARD and VIP. There is a 4th version but that is ONLY if you are upgrading. Make sure you select the correct version you paid for, once clicked on it will show a screen where you can redeem you Code/Voucher(Keep in mind you will have to wait 24hrs until your code has been verified after redeeming your code).')
    .setImage('https://cdn.discordapp.com/attachments/696241284352049193/698823819359420416/impulse.gif')
    .setTimestamp()
    .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
     message.author.send({embed: uEmbed5})
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
});
  }
};

// Break 

if (message.content.toLowerCase() === 'key'){ 
  if(message.channel.type === 'dm'){
message.author.send('Bot is typing <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('692526188542951515')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed5 = new Discord.MessageEmbed()
    .setTitle('__Impulse Redeem Key__')
    .setColor(colors.orange)
    .addField('__', 'To redeem a code sent by the seller please visit https://impulse.one/purchase.php. Once you are in the website make sure you login or Sign up, after you login look for the :shopping_cart: Purchase category and you will see an option to redeem your key. Insert the key given by the seller and you should be able to download the mod menu afterwards')
    .setImage('https://cdn.discordapp.com/attachments/711424012953190410/712202841766232084/key-impulse.gif')
    .setTimestamp()
    .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
     message.author.send({embed: uEmbed5})
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
});
  }
};

// Break

if (message.content.toLowerCase() === 'impulse inject'){
  if(message.channel.type === 'dm'){
message.author.send('Bot is typing <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('💉')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed6 = new Discord.MessageEmbed()
    .setTitle('__Impulse Inject__')
    .setColor(colors.orange)
    .setDescription('Choose what veresion you have')
    .addField('__', 'For Essential/Standard type, _``Impulse Essential``_')
    .addField('__', 'For Impulse VIP type, _``Impulse Standard/VIP``_')
    .setTimestamp()
    .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
    message.author.send({embed: uEmbed6})
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
});
  }
};

// Break

if (message.content.toLowerCase() === 'impulse essential'){
  if(message.channel.type === 'dm'){
message.author.send('Bot is typing <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('699834973175152691')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed7 = new Discord.MessageEmbed()
    .setTitle('__Inject Impulse Essential__')
    .setColor(colors.orange)
    .setDescription('Video on how to install & inject impulse Essential')
    .setTitle('<a:arrowRIGHT:687933320872460321>CLICK HERE<a:arrowLEFT:699040961501855754>')
    .setURL('https://www.youtube.com/watch?v=ou3YR_lDYO8')
    .setTimestamp()
    .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
    message.author.send({embed: uEmbed7})
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
});
  }
};

// Break

if (message.content.toLowerCase() === 'impulse standard/vip'){
  if(message.channel.type === 'dm'){
message.author.send('Bot is typing <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('699836293403901974')
.then(() => message.react('699834924123029575'))
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed9 = new Discord.MessageEmbed()
  .setTitle('__Impulse Inject Standard/VIP__')
  .setDescription('Video on how to install & inject impulse Standard/VIP')
  .setTitle('<a:arrowRIGHT:687933320872460321>CLICK HERE<a:arrowLEFT:699040961501855754>')
  .setURL('https://www.youtube.com/watch?v=4eltOZlrfvk')
  .setColor(colors.orange)
  .setTimestamp()
  .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
  message.author.send({embed: uEmbed9})
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
});
  }
};

// Break

if(message.content.toLowerCase() === 'impulse buying options') {
  if(message.channel.type === 'dm'){
  message.author.send('Bot is typing <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('👀')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed28 = new Discord.MessageEmbed()
      .setTitle('__Impulse Buying Options__')
      .setColor(colors.orange)
      .addField('__', 'Impulse Essential<a:dabingdollar:694111180368904293>**22**')
      .addField('__', 'Impulse Standard<a:dabingdollar:694111180368904293>**38**')
      .addField('__', 'Impulse VIP<a:dabingdollar:694111180368904293>**70**')
      .addField('__', 'Impulse Essential to Standard Upgrade<a:dabingdollar:694111180368904293>**27**')
      .addField('__', 'Impulse Standard to VIP Upgrade<a:dabingdollar:694111180368904293>**38**')
      .addField('__', 'if you want to see information about what each version includes type, _``Impulse info``_')
      .addField('__', 'If you want to check out what type of payment methods we have available please type, _``Payment method``_')
      .setTimestamp()
      .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
      message.author.send({embed: uEmbed28})
          .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
     .catch(error => {
        }));
      });
    });
  }
};

// Break

if (message.content.toLowerCase() === 'impulse info') {
  if(message.channel.type === 'dm'){
message.author.send('Bot is typing <a:typing:705296058900545567>')
.then(sentMessage => sentMessage.delete({ timeout: 3000 })
.catch(error => {
// Hnadler
}))
message.react('👀')
.then(() => {
message.channel.awaitMessages(response => response.content === '', {
  max: 1,
  time: 3000,
  errors: ['time'],
})
.then((collected) => {
    message.channel.send(`The collected message was: ${collected.first().content}`);
  })
  .catch(() => {
    let uEmbed29 = new Discord.MessageEmbed()
    .setTitle('__Impulse Information__')
    .setColor(colors.orange)
    .setDescription(`

    **__Impulse Essential__** :

    _The Impulse Essential trainer offers a simplified interface, differing from the enhanced interface found in our Standard & VIP packages, but offering a variety of core player features, vehicle mods, teleports, and some basic protections.

    The goal With Essential is to give you an overall fun experience, while providing an affordable platform, to introduce yourself to what Impulse can offer.

    This version includes a different design and feature set, but includes some VIP only features.

    (Although our trainer may have sections compatible with online use, we do not condone this and online usage is at your own risk)

    WE ONLY OFFICIALLY SUPPORT WINDOWS 10 & 7_

    ----------------------------------------------

    **__Impulse Standard__** :

    _Impulse Standard trainer, showcasing our enhanced interface, offers members a wide array of player features, vehicle mods, teleports, world/lobby modifications, recovery options, messaging section, specific rid/scid options and a full spread of enhanced protections to keep you safe.

    Impulse Standard is designed to offer a complete and fun experience, for all users, while offering an incredible variety of useful and unique features.
    
    (Although our trainer may have sections compatible with online use, we do not condone this and online usage is at your own risk)

    WE ONLY OFFICIALLY SUPPORT WINDOWS 10 & 7_

    ----------------------------------------------
    `)
    message.author.send({embed: uEmbed29})
    
    let uEmbed30 = new Discord.MessageEmbed()   
    .setColor(colors.orange)
    .setDescription(`
    
    **__Impulse VIP__** : 

    _Impulse VIP, builds off the strength of the Standard trainer, and further showcases our enhanced interface. Offering members everything you've come to know and love in Standard then dialing it up 10x by adding in every feature we offer in one extreme package.

    VIP offers all essential and standard features plus brings in exclusives such as; a Session Overseer to blacklist users ingame, trigger an action against them, or view online status, as well as ability to join players via RID or SCID.

    A ScripthookV custom add-on loader to load additional mods and content alongside Impulse, custom model swapping, as well as custom YTD headers that you can import to customize your trainer and make it truly yours.

    VIP members also enjoy unlimited HWID resets for the real active ones among us.

    Impulse VIP is designed for those members who demand the best of the best. Those people who want everything that we offer, our most extreme features not found in our other products, and who aren't willing to compromise.

    (Although our trainer may have sections compatible with online use, we do not condone this and online usage is at your own risk)

    WE ONLY OFFICIALLY SUPPORT WINDOWS 10 & 7_

    ----------------------------------------------

    **__Impulse Upgardes__** :

    _Impulse Upgrade is a quick and easy way to upgrade an existing membership to a new membership level.

    The upgrade can be used to upgrade the following memberships:

    Impulse Essential ---> Impulse Standard [€15]

    Impulse Standard ---> Impulse VIP [€25]

    (Although our trainer may have sections compatible with online use, we do not condone this and online usage is at your own risk)

    WE ONLY OFFICIALLY SUPPORT WINDOWS 10 & 7_

    `)
    .addField('__', 'If you want to check out what type of payment methods we have available please type, _``Payment method``_')
    .setTimestamp()
    .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
    message.author.send({embed: uEmbed30})
    .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
.catch(error => {
  }));
});
});
  }
}

// Break

if (message.content.toLowerCase() === 'impulse other'){
  if(message.channel.type === 'dm'){
message.author.send('Bot is typing <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('⚙️')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
    let uEmbed10 = new Discord.MessageEmbed()
  .setTitle('_Impulse Other_')
  .setDescription('If you need help with something else, here are some other options.')
  .setColor(colors.orange)
  .addField('__', '_``impulse Refunds``_')
  .addField('__', '_``Where to buy impulse?``_')
  .addField('__', '_``impulse Prices``_')
  .addField('__', 'Please type any of these options.')
  .setTimestamp()
  .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
  message.author.send({embed: uEmbed10})
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
});
  }
};

// Break

if (message.content.toLowerCase() === 'impulse refunds'){
  if(message.channel.type === 'dm'){
message.author.send('Bot is typing <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('❌')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed11 = new Discord.MessageEmbed()
      .setTitle('_Impulse Refunds_')
.setDescription('Unfortunately we **DO NOT** do refunds due to being a digital product, **Chargebacks will result in a BAN**.')
.setColor(colors.orange)
.setTimestamp()
.setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
message.author.send({embed: uEmbed11})
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
});
  }
};

// Break

if (message.content.toLowerCase() === 'where to buy impulse?'){
  if(message.channel.type === 'dm'){
message.author.send('Bot is typing <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('🤔')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed12 = new Discord.MessageEmbed()
      .setTitle('_Where to Buy Impulse?_')
  .setDescription('Please visit our Shoppy site https://shoppy.gg/@7TH_SIN, if there are no more Impulse mod menus in stock Just conatact us through the site or send a PM(private message) to Admin')
  .setColor(colors.orange)
  .setTimestamp()
  .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
  message.author.send({embed: uEmbed12})
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
});
  }
};

// Break

if (message.content.toLowerCase() === 'impulse prices') {
  if(message.channel.type === 'dm'){
message.author.send('Bot is typing <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('💸')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed13 = new Discord.MessageEmbed()
      .setTitle('_Impulse Prices_')
  .setDescription(`Here are the prices for all three versions of Impulse plus Impulse upgrades
  
                                  **Prices are not Negotiable**`)
  .setColor(colors.orange)
  .addField('__', 'Impulse Essential<a:dabingdollar:694111180368904293>**22**')
  .addField('__', 'Impulse Standard<a:dabingdollar:694111180368904293>**38**')
  .addField('__', 'Impulse VIP<a:dabingdollar:694111180368904293>**70**')
  .addField('__', 'Impulse Essential to Standard Upgrade<a:dabingdollar:694111180368904293>**27**')
  .addField('__', 'Impulse Standard to VIP Upgrade<a:dabingdollar:694111180368904293>**38**')
  .addField('__', 'if you want to see information about what each version includes type, _``Impulse info``_')
  .addField('__', 'If you want to check out what type of payment methods we have available please type, _``Payment method``_')
  .setTimestamp()
  .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
  message.author.send({embed: uEmbed13})
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
});
  }
};

// Break

if (message.content.toLowerCase() === 'payment method') {
  if(message.channel.type === 'dm'){
message.author.send('Bot is typing <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('💳')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed14 = new Discord.MessageEmbed()
      .setTitle('_Payment Method_')
.setDescription('Payment methonds we have available at this point')
.setColor(colors.orange)
.addField('__', '<:anotherpaydigital:694342853278695494> (PayPal)')
.addField('__', '<:paymentcard:691789716781006947> (Venmo)')
.addField('__', '<:Visadebit:695851905104216075> (Visa, USA ONLY)')
.addField('__', '<:coin:691786593673150505> (Bitcoin coming soon)')
.setTimestamp()
.setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
message.author.send({embed: uEmbed14})
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
});
  }
};

// Break

if (message.content.toLowerCase() === 'gta v'){
  if(message.channel.type === 'dm'){
message.author.send('Bot is typing <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('701312114853150800')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed15 = new Discord.MessageEmbed()
      .setTitle('_Gta V_')
  .setColor(colors.black)
  .addField('__', '1. Type, _``Gta issue``_ if the key is not working.')
  .addField('__', '2. Type, _``Gta redeem``_ if you dont know how to redeem the key and need help with it.')
  .addField('__', '3. type, _``Gta buying options``_ if you wish to check out our prices or version options')
  .addField('__', '4. Type, _``Gta other``_ if you need help with something else.')
  .setTimestamp()
  .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
  message.author.send({embed: uEmbed15})
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
});
  }
};

// Break

if (message.content.toLowerCase() === 'gta issue') {
  if(message.channel.type === 'dm'){
message.author.send('Bot is typing <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('❗')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed16 = new Discord.MessageEmbed()
      .setTitle('__Gta Issue__')
  .setDescription('Please type, _``help with Gta v``_ in order to to chat with a staff member or admin.')
  .setColor(colors.black)
  .setTimestamp()
  .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
  message.author.send({embed: uEmbed16})
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
});
  }
};

// Break

if (message.content.toLowerCase() === 'help with gta v') {
  if (message.author.bot) return;
  if (message.channel.type === 'dm') {
    if (!openTickets.has(message.author.id)) {
      const embed = new MessageEmbed()
      .setDescription(`Hello! ${message.author} We have received your message, Staff might take up to 24 hours to respond back please be patient. In the meantime try checking other commands and see if any of them help`)
      .setColor('#3AFF00')
      .setTimestamp()
      message.channel.send(embed)
      .then(sentMessage => sentMessage.delete({ timeout: 86400000 })
      .catch(error => {
      }));
      openTickets.set(message.author.id, message.guild);
      const channel = bot.channels.cache.get(DESTINATION);
      if (channel) {
          const embed = new MessageEmbed()
          .setAuthor(message.author ,message.author.displayAvatarURL())
          .setDescription(`[${message.author.tag}] needs help with Gta V`)
          .setColor('#0070FF')
          .setTimestamp();
          const msg = await channel.send(embed);
          await msg.react(ACCEPT);
          await msg.react(REJECT);  
          try {
              const reactionFilter = (reaction, user) => [ACCEPT, REJECT].includes(reaction.emoji.id) && !user.bot;
              const reactions = await msg.awaitReactions(reactionFilter, { max: 1, time: 86400000, errors: ['time'] });
              const choice = reactions.get(ACCEPT) || reactions.get(REJECT);
              if (choice.emoji.id === ACCEPT) {
                message.author.send('_Staff looking for your query, please stand by_ <a:Loading:705280596217430019>')
                .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                const embed3 = new MessageEmbed()
                  .setDescription(`Staff has accepted your query.`)
                  .setColor('#3AFF00')
                  .setTimestamp()
                  message.author.send(embed3)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                  });
                  });
                  channel.send('_Accepting Users message_ <a:Loading:705280596217430019>')
                .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                  const embed4 = new MessageEmbed()
                  .setDescription(`You have Accepted the message`)
                  .setColor('#3AFF00')
                  .setTimestamp()
                  channel.send(embed4)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                });
                });
                 await handleCollectors(channel, message); 
                 message.author.send('_Staff is Ending chat_ <a:Loading:705280596217430019>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                 const embed = new MessageEmbed()
                  .setDescription(`Staff has ended the chat, if you have any other questions feel free to ask our staff for help.`)
                  .setColor('#3AFF00')
                  .setTimestamp()
                  message.author.send(embed)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                  });
                  });
                                
                  channel.send('_Ending chat_ <a:Loading:705280596217430019>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                  const embed1 = new MessageEmbed()
                  .setDescription(`_You have ended the chat with_: __${message.author.tag}__`)
                  .setColor('#3AFF00')
                  .setTimestamp()
                  channel.send(embed1)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                });
              });
                 openTickets.delete(message.author.id);
              } else if (choice.emoji.id === REJECT) {
                message.author.send('_Staff looking for your query, please stand by_ <a:Loading:705280596217430019>')
                .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                  const embed = new MessageEmbed()
                  .setDescription(`Your message was rejected by Staff. You may try later`)
                  .setColor('#FF0000')
                  .setTimestamp()
                  message.author.send(embed)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                  });
                  });
                  channel.send('_Rejecting Users Message_ <a:Loading:705280596217430019>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                  const embed1 = new MessageEmbed()
                  .setDescription(`You have rejected the message.`)
                  .setColor('#FF0000')
                  .setTimestamp()
                  channel.send(embed1)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                  });
                  });
                  setTimeout(() => {
                      openTickets.delete(message.author.id);
                  }, 30000);
              }
          } catch (err) {
              console.log(err);
              message.author.send('_Staff is taking longer than usual_ <a:Loading:705280596217430019>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
              const embed = new MessageEmbed()
              .setDescription(`No one was available to accept your query. Please try again`)
              .setColor('#FFB900')
              .setTimestamp()
              message.author.send(embed)
              .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
              .catch(error => {
              }));
              });
              });
              channel.send('_Automatically Rejecting Users Message_ <a:Loading:705280596217430019>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
              const embed1 = new MessageEmbed()
              .setDescription(`the message was automatically rejected because no one reacted to the message`)
              .setColor('#FFB900')
              .setTimestamp()
              channel.send(embed1)
              .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
              .catch(error => {
              }));
              });
              });
              openTickets.delete(message.author.id);
          }
      } else {
          message.channel.send('Somethins went wrong. Please reach out to server Admin directly.');
          openTickets.delete(message.author.id);
      }
  }
}
}

function handleCollectors(channeL, message) {

  const filter = m => m.author.id === message.author.id;
  const dmCollector = message.channel.createMessageCollector(filter);

  const guildCollectorFilter = m => m.channel.id === channeL.id && !m.author.bot;
  const guildChannelCollector = channeL.createMessageCollector(guildCollectorFilter);

  return new Promise((resoLve, reject) => {
      dmCollector.on('collect', m => {
          const files = getAttachmentLinks(m.attachments);
          const embed = new MessageEmbed()
            .setAuthor(`User: ${m.author.tag}, ${m.author.id}`)
            .setDescription(`\`Users Message:\` **${m.content}** `)
            .setColor('#0093FF')
            .setTimestamp()
            .setImage(`${files}`)
            .setFooter('talking with user', message.author.displayAvatarURL());
            channeL.send(embed);
        });
      guildChannelCollector.on('collect', m => {
          if (m.content.toLowerCase() === '--stop') {
              guildChannelCollector.stop();
              dmCollector.stop();
              resoLve();
          } else {
              const files = getAttachmentLinks(m.attachments);
              const embed = new MessageEmbed()
              .setAuthor(`Staff member: ${m.author.tag}`)
              .setDescription(`\`Staff Message:\` **${m.content}** `)
              .setImage(`${files}`)
              .setTimestamp()
              .setFooter('Live chat with agent', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif');
              message.author.send(embed)
              .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
              .catch(error => {
              }));
          }
      })
  });
}

function getAttachmentLinks(attachments) {
  const valid = /^.*(gif|png|jpg|jpeg)$/g
  return attachments.array()
    .filter(attachment => valid.test(attachment.url))
    .map(attachment => attachment.url);
}

// Break

if (message.content.toLowerCase() === 'gta redeem') {
  if(message.channel.type === 'dm'){
message.author.send('Bot is typing <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('692526188542951515')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed17 = new Discord.MessageEmbed()
      .setTitle("__Gta Redeem__")
      .setTitle('Keep in mind that this code is NOT for Steam its ONLY for Rockstar Games Luncher.')
      .setColor(colors.black)
      .setDescription('If you need to know how to redeem or need help redeeming follow steps.')
      .addField('__', 'If you have not downloaded the **Rocstar Game Launcher** head over to **https://socialclub.rockstargames.com/rockstar-games-launcher** to download, Make sure you creat an account or Sign in then click on the top right corner on the account icon, then you will see a redeem option from there just redeem your code.')
      .setImage('https://media.discordapp.net/attachments/688889167291089025/695843127927373946/redeemcode.gif')
      .addField('__', 'if you get a text saying **"Switch your Social Club account"** Please type, _``Troubleshoot``_')
      .setTimestamp()
      .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
      message.author.send({embed: uEmbed17})
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
});
  }
};

// Break

if (message.content.toLowerCase() === 'troubleshoot'){
  if(message.channel.type === 'dm'){
message.author.send('Bot is typing <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('🛠️')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed19 = new Discord.MessageEmbed()
  .setTitle('__TroubleShoot__')
  .setDescription('This is how you fix this problem')
  .setColor(colors.black)
  .setImage('https://cdn.discordapp.com/attachments/696241284352049193/706350563868016700/TROUBLESHOOT.gif')
  .setTimestamp()
  .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
  message.author.send({embed: uEmbed19})
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
});
  }
};

// Break

if (message.content.toLowerCase() === 'gta other'){
  if(message.channel.type === 'dm'){
message.author.send('Bot is typing <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('⚙️')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed20 = new Discord.MessageEmbed()
      .setTitle('__Gta Other__')
      .setDescription('If you need help with something else, here are some other options.')
      .setColor(colors.black)
      .addField('__', '``GTA Refunds``')
      .addField('__', '``Where to buy GTA?``')
      .addField('__', '``GTA Prices``')
      .addField('__', 'Please type any of these options.')
      .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
      message.author.send({embed: uEmbed20})
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
});
  }
};

// Break

if (message.content.toLowerCase() === 'gta refunds'){
  if(message.channel.type === 'dm'){
message.author.send('Bot is typing <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('❌')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed21 = new Discord.MessageEmbed()
  .setDescription('Unfortunately we **DO NOT** do refunds due to being a digital product.')
  .setColor(colors.black)
  .setTimestamp()
  .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
message.author.send({embed: uEmbed21})
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
});
  }
};

// Break

if (message.content.toLowerCase() === 'where to buy gta') {
  if(message.channel.type === 'dm'){
message.author.send('_Bot is typing_ <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('🤔')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed22 = new Discord.MessageEmbed()
    .setTitle('__Where To Buy Gta__')
    .setDescription('Please visit our Shoppy site https://shoppy.gg/@7TH_SIN, if there are no GTA V Game keys in stock Just conatact us through the site or send a PM(private message) to Admin')
    .setColor(colors.black)
    .setTimestamp()
    .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
    message.author.send({embed: uEmbed22})
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
});
  }
};

// Break

if (message.content.toLowerCase() === 'gta buying options'){
  if(message.channel.type === 'dm'){
  message.author.send('Bot is typing <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('694111180368904293')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed23 = new Discord.MessageEmbed()
      .setTitle('__Gta Buying Options__')
  .setDescription('Type any of the options down below')
  .addField('__', 'For **NONE** Modded GTA V Game type, _``Gta V game``_')
  .addField('__', 'For a Modded Account GTA V Game tye, _``Gta V modded``_')
  message.author.send({embed: uEmbed23})
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
});
  }
};

// Break

if (message.content.toLowerCase() === 'gta v game') {
  if(message.channel.type === 'dm'){
message.author.send('_Bot is typing_ <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('701312114853150800')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed24 = new Discord.MessageEmbed()
      .setTitle('__Gta V Game__')
  .setDescription('Here are the prices for all three versions of GTA V Game')
  .setColor(colors.black)
  .addField('__', 'Grand Theft Auto V PC [NOT MODED]<a:dabingdollar:694111180368904293>**15**')
  .addField('__', 'Grand Theft Auto V - Premium Online Edition PC [NOT MODED]<a:dabingdollar:694111180368904293>**17**')
  .addField('__', 'Grand Theft Auto V - Great White Shark Card Bundle PC [NOT MODED]<a:dabingdollar:694111180368904293>**OUT OF STOCK**')
  .addField('__', 'If you want to check out whats is includded in each version please type, _``gta not modded info``_')
  .setTimestamp()
  .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
  message.author.send({embed: uEmbed24})
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
});
  }
};

// Break

if (message.content.toLowerCase() === 'gta not modded info') {
  if(message.channel.type === 'dm'){
  message.author.send('_Bot is typing_ <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('🔒')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed25 = new Discord.MessageEmbed()
  .setDescription('Here are the prices for all three versions of GTA V Game')
  .setColor(colors.black)
  .setTitle(`GTA V Social Club NONE MODDED GAME!
                  PC VERSION ONLY`)
  .setDescription(`

  <a:arrowRIGHT:687933320872460321> Grand Theft Auto V PC [NOT MODED] <a:arrowLEFT:699040961501855754>

  <a:dabingdollar:694111180368904293>**15**

  🎮 - Just GTA 5 Standard Edition base game

  ------------------------<a:colorful_line:704570660474847282>----------------------

  <a:arrowRIGHT:687933320872460321> Grand Theft Auto V - Premium Online Edition PC [NOT MODED] <a:arrowLEFT:699040961501855754>

  <a:dabingdollar:694111180368904293>**17**

  🎮 - **Grand Theft Auto V base game**

  __**Grand Theft Auto V - Criminal Enterprise Starter Pack**__
  
  **The Grand Theft Auto V - Criminal Enterprise Starter Pack includes:**
  
  _GTA $1,000,000 Bonus Cash_
  
  __**Properties:**__
  
  _Maze Bank West Executive Office_
  
  _Paleto Forest Gunrunning Bunker_
  
  _Senora Desert Counterfeit Cash Factory_
  
  _Great Chaparral Biker Clubhouse_
  
  _1561 San Vitas Street Apartment_
  
  _1337 Exceptionalists Way 10 Car Garage_
  
  __**Vehicles:**__
  
  _Dune FAV_
  
  _Maibatsu Frogger_
  
  _Enus Windsor_
  
  _Obey Omnis_
  
  _Coquette Classic_
  
  _Turismo R_
  
  _Pegassi Vortex_
  
  _Huntley S_
  
  _Western Zombie Chopper_
  
  _Banshee_
  
  __**Weapons, Clothing and Tattoos:**__
  
  _Compact Grenade Launcher_
  
  _Marksman Rifle_
  
  _Compact Rifle_
  
  _Stunt Race and Import / Export Outfits, Biker Tattoos_

  ------------------------<a:colorful_line:704570660474847282>----------------------

  <a:arrowRIGHT:687933320872460321> Grand Theft Auto V - Great White Shark Card Bundle PC [NOT MODED] <a:arrowLEFT:699040961501855754>

  <a:dabingdollar:694111180368904293>**OUT OF STOCK**

  🎮 - **Grand Theft Auto V base game**
  
  __**Great White Shark Cash Card**__

  - _The Great White Shark Cash Card to receive $1,250,000 in-game GTA dollars to spend in GTA Online_


  `)
  .addField('__', 'If you want to check out what type of payment methods we have available please type, _``Payment method``_')
  .setTimestamp()
  .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
  message.author.send({embed: uEmbed25})
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
    });
  }
};

// Break

if (message.content.toLowerCase() === 'gta v modded'){
  if(message.channel.type === 'dm'){
  message.author.send('_Bot is typing_ <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('🔓')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed26 = new Discord.MessageEmbed()
      .setTitle('__Gta V Modded__')
  .setDescription('Here are all versions that we sell for GTA V Game')
  .setColor(colors.black)
  .addField('__', 'GTA V Social Club Modded Account! PC VERSION ONLY <a:arrowRIGHT:687933320872460321> Tier 1 <a:arrowLEFT:699040961501855754> <a:dabingdollar:694111180368904293>**25**')
  .addField('__', 'GTA V Social Club Modded Account! PC VERSION ONLY <a:arrowRIGHT:687933320872460321> Tier 2 <a:arrowLEFT:699040961501855754> <a:dabingdollar:694111180368904293>**30**')
  .addField('__', 'GTA V Social Club Modded Account! PC VERSION ONLY <a:arrowRIGHT:687933320872460321> Tier 3 <a:arrowLEFT:699040961501855754> <a:dabingdollar:694111180368904293>**35**')
  .addField('__', 'GTA V Social Club Modded Account! PC VERSION ONLY <a:arrowRIGHT:687933320872460321> Tier 4 <a:arrowLEFT:699040961501855754> <a:dabingdollar:694111180368904293>**40**')
  .addField('__', 'GTA V Social Club Modded Account! PC VERSION ONLY <a:arrowRIGHT:687933320872460321> CUSTOM MADE ACCOUNT <a:arrowLEFT:699040961501855754>')
  .addField('__', 'If you want to check out what comes included on the gta modded accounts please type, _``GTA Modded info``_')
  .setTimestamp()
  .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
  message.author.send({embed: uEmbed26})
  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
  // Hnadler
}));
    });
});
  }
};

// Breakk

if (message.content.toLowerCase() === 'gta modded info'){
  if(message.channel.type === 'dm'){
  message.author.send('_Bot is typing_ <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('📄')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      let uEmbed27 = new Discord.MessageEmbed()
  .setTitle(`GTA V Social Club Modded Account!
                  PC VERSION ONLY`)
  .setColor(colors.black)
  .setDescription(`
  <a:arrowRIGHT:687933320872460321> Tier 1 <a:arrowLEFT:699040961501855754>

  <a:dabingdollar:694111180368904293>**25**

  💰  5000 Million

  🌐  120-250 Levels

  ✅  Everything Unlocked/Max Stats

  🎮  GTA V Game Included!

  ------------------------<a:colorful_line:704570660474847282>----------------------

  <a:arrowRIGHT:687933320872460321> Tier 2 <a:arrowLEFT:699040961501855754>

  <a:dabingdollar:694111180368904293>**30**

  💰  1 Billion

  🌐  120-350 Levels

  ✅  Everything Unlocked/Max Stats

  🎮  GTA V Game Included!

  ------------------------<a:colorful_line:704570660474847282>-----------------------

  <a:arrowRIGHT:687933320872460321> Tier 3 <a:arrowLEFT:699040961501855754>

  <a:dabingdollar:694111180368904293>**35**

  💰  1.5 Billion

  🌐  120-550 Levels

  ✅  Everything Unlocked/Max Stats

  🎮  GTA V Game Included!

  -----------------------<a:colorful_line:704570660474847282>------------------------

  <a:arrowRIGHT:687933320872460321> Tier 4 <a:arrowLEFT:699040961501855754>

  <a:dabingdollar:694111180368904293>**40**

  💰  2 Billion

  🌐  120-850 Levels

  ✅  Everything Unlocked/Max Stats

  🎮  GTA V Game Included!

  -----------------------<a:colorful_line:704570660474847282>------------------------

  <a:arrowRIGHT:687933320872460321> LOOKING FOR A CUSTOM MADE ACCOUNT? <a:arrowLEFT:699040961501855754>

  <a:dabingdollar:694111180368904293>**Prices Change Depending on What You Ask For.**

  💰  Custom CASH: 1 Million-2 Billion

  🌐  Custom LVL: 1-2000

  ✅  Custom Unlocks: Stats<CLothes<Hair<Outfits<Tatto's

  ------------------------<a:colorful_line:704570660474847282>-----------------------

  `)
  .addField('__', 'If you want to check out what type of payment methods we have available please type, _``Payment method``_')
  .setTimestamp()
  .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
  message.author.send({embed: uEmbed27})
  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
  // Hnadler
}));
    });
});
  }
};

// Break

if (message.content.toLowerCase() === 'spotify'){
  if(message.channel.type === 'dm'){
  message.author.send('_Bot is typing_ <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('707451943311900773')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
    let uEmbed31 = new Discord.MessageEmbed()
    .setTitle('__Command Disabeled__')
    .setColor(colors.red)
    .setDescription('spotify is under maintenance and was disabled until further notice.')
    .setTimestamp()
    .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
  message.author.send({embed: uEmbed31})
  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
  // Hnadler
}));
    });
});
  }
};

// Break

if (message.content.toLowerCase() === 'nordvpn'){
  if(message.channel.type === 'dm'){
  message.author.send('_Bot is typing_ <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('695856469316337714')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
    let uEmbed33 = new Discord.MessageEmbed()
    .setTitle('__NordVpn__')
    .setColor(colors.blue)
    .addField('__', 'Type, _``Nord issue``_ if you have an issue with your NordVpn purchase.')
    .addField('__', 'Type, _``Nord info``_ if you need information about this product.')
    .addField('__', 'Type, _``Nord price``_ if you wish to check out the price for this product')
    .addField('__', 'type, _``Nord other``_ if you want more options')
    .setTimestamp()
    .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
  message.author.send({embed: uEmbed33})
  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
  // Hnadler
}));
    });
});
  }
};

// Break

if (message.content.toLowerCase() === 'nord issue'){
  if(message.channel.type === 'dm'){
  message.author.send('_Bot is typing_ <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('❗')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
    let uEmbed33 = new Discord.MessageEmbed()
    .setColor(colors.blue)
    .setDescription('Please type, _``help with nordvpn``_ , in order to to talk chat with a staff member or admin.')
    .setTimestamp()
    .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
  message.author.send({embed: uEmbed33})
  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
  // Hnadler
}));
    });
});
  }
};

// Break

if (message.content.toLowerCase() === 'help with nordvpn') {
  if (message.author.bot) return;
  if (message.channel.type === 'dm') {
    if (!openTickets.has(message.author.id)) {
      const embed = new MessageEmbed()
      .setDescription(`Hello! ${message.author} We have received your message, Staff might take up to 24 hours to respond back please be patient. In the meantime try checking other commands and see if any of them help`)
      .setColor('#3AFF00')
      .setTimestamp()
      message.channel.send(embed)
      .then(sentMessage => sentMessage.delete({ timeout: 86400000 })
      .catch(error => {
      }));
      openTickets.set(message.author.id, message.guild);
      const channel = bot.channels.cache.get(DESTINATION);
      if (channel) {
          const embed = new MessageEmbed()
          .setAuthor(message.author ,message.author.displayAvatarURL())
          .setDescription(`[${message.author.tag}] needs help with their nordvpn`)
          .setColor('#0070FF')
          .setTimestamp();
          const msg = await channel.send(embed);
          await msg.react(ACCEPT);
          await msg.react(REJECT);  
          try {
              const reactionFilter = (reaction, user) => [ACCEPT, REJECT].includes(reaction.emoji.id) && !user.bot;
              const reactions = await msg.awaitReactions(reactionFilter, { max: 1, time: 86400000, errors: ['time'] });
              const choice = reactions.get(ACCEPT) || reactions.get(REJECT);
              if (choice.emoji.id === ACCEPT) {
                message.author.send('_Staff looking for your query, please stand by_ <a:Loading:705280596217430019>')
                .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                const embed3 = new MessageEmbed()
                  .setDescription(`Staff has accepted your query.`)
                  .setColor('#3AFF00')
                  .setTimestamp()
                  message.author.send(embed3)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                  });
                  });
                  channel.send('_Accepting Users message_ <a:Loading:705280596217430019>')
                .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                  const embed4 = new MessageEmbed()
                  .setDescription(`You have Accepted the message`)
                  .setColor('#3AFF00')
                  .setTimestamp()
                  channel.send(embed4)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                });
                });
                 await handleCollectors(channel, message); 
                 message.author.send('_Staff is Ending chat_ <a:Loading:705280596217430019>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                 const embed = new MessageEmbed()
                  .setDescription(`Staff has ended the chat, if you have any other questions feel free to ask our staff for help.`)
                  .setColor('#3AFF00')
                  .setTimestamp()
                  message.author.send(embed)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                  });
                  });
                                
                  channel.send('_Ending chat_ <a:Loading:705280596217430019>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                  const embed1 = new MessageEmbed()
                  .setDescription(`_You have ended the chat with_: __${message.author.tag}__`)
                  .setColor('#3AFF00')
                  .setTimestamp()
                  channel.send(embed1)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                });
              });
                 openTickets.delete(message.author.id);
              } else if (choice.emoji.id === REJECT) {
                message.author.send('_Staff looking for your query, please stand by_ <a:Loading:705280596217430019>')
                .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                  const embed = new MessageEmbed()
                  .setDescription(`Your message was rejected by Staff. You may try later`)
                  .setColor('#FF0000')
                  .setTimestamp()
                  message.author.send(embed)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                  });
                  });
                  channel.send('_Rejecting Users Message_ <a:Loading:705280596217430019>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
                  const embed1 = new MessageEmbed()
                  .setDescription(`You have rejected the message.`)
                  .setColor('#FF0000')
                  .setTimestamp()
                  channel.send(embed1)
                  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
                  .catch(error => {
                  }));
                  });
                  });
                  setTimeout(() => {
                      openTickets.delete(message.author.id);
                  }, 30000);
              }
          } catch (err) {
              console.log(err);
              message.author.send('_Staff is taking longer than usual_ <a:Loading:705280596217430019>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
              const embed = new MessageEmbed()
              .setDescription(`No one was available to accept your query. Please try again`)
              .setColor('#FFB900')
              .setTimestamp()
              message.author.send(embed)
              .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
              .catch(error => {
              }));
              });
              });
              channel.send('_Automatically Rejecting Users Message_ <a:Loading:705280596217430019>')
                  .then(sentMessage => sentMessage.delete({ timeout: 5000 })
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
              const embed1 = new MessageEmbed()
              .setDescription(`the message was automatically rejected because no one reacted to the message`)
              .setColor('#FFB900')
              .setTimestamp()
              channel.send(embed1)
              .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
              .catch(error => {
              }));
              });
              });
              openTickets.delete(message.author.id);
          }
      } else {
          message.channel.send('Somethins went wrong. Please reach out to server Admin directly.');
          openTickets.delete(message.author.id);
      }
  }
}
}

function handleCollectors(channeL, message) {

  const filter = m => m.author.id === message.author.id;
  const dmCollector = message.channel.createMessageCollector(filter);

  const guildCollectorFilter = m => m.channel.id === channeL.id && !m.author.bot;
  const guildChannelCollector = channeL.createMessageCollector(guildCollectorFilter);

  return new Promise((resoLve, reject) => {
      dmCollector.on('collect', m => {
          const files = getAttachmentLinks(m.attachments);
          const embed = new MessageEmbed()
            .setAuthor(`User: ${m.author.tag}, ${m.author.id}`)
            .setDescription(`\`Users Message:\` **${m.content}** `)
            .setColor('#0093FF')
            .setTimestamp()
            .setImage(`${files}`)
            .setFooter('talking with user', message.author.displayAvatarURL());
            channeL.send(embed);
        });
      guildChannelCollector.on('collect', m => {
          if (m.content.toLowerCase() === '--stop') {
              guildChannelCollector.stop();
              dmCollector.stop();
              resoLve();
          } else {
              const files = getAttachmentLinks(m.attachments);
              const embed = new MessageEmbed()
              .setAuthor(`Staff member: ${m.author.tag}`)
              .setDescription(`\`Staff Message:\` **${m.content}** `)
              .setImage(`${files}`)
              .setTimestamp()
              .setFooter('Live chat with agent', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif');
              message.author.send(embed)
              .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
              .catch(error => {
              }));
          }
      })
  });
}

function getAttachmentLinks(attachments) {
  const valid = /^.*(gif|png|jpg|jpeg)$/g
  return attachments.array()
    .filter(attachment => valid.test(attachment.url))
    .map(attachment => attachment.url);
}

// Break

if (message.content.toLowerCase() === 'nord info'){
  if(message.channel.type === 'dm'){
  message.author.send('_Bot is typing_ <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('📄')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
    let uEmbed34 = new Discord.MessageEmbed()
    .setTitle('__Nord Info__')
    .setColor(colors.blue)
    .setDescription(`
      NordVPN protects you by securing your internet traffic with cutting-edge technologies.
      It ensures strong and reliable encryption between your device and a remote server.
      NordVPN apps use the OpenVPN and IKEv2/IPSec protocols to guarantee the ultimate protection of your sensitive data.`)
    .addField('__', 'If you wish check out the price for this product type, _``Nord price``_')
    .addField('__', 'If you want to check out what type of payment methods we have available please type, _``Payment method``_')
    .setTimestamp()
    .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
  message.author.send({embed: uEmbed34})
  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
  // Hnadler
}));
    });
});
  }
};

// Break

if (message.content.toLowerCase() === 'nord price'){
  if(message.channel.type === 'dm'){
  message.author.send('_Bot is typing_ <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('💸')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
    let uEmbed35 = new Discord.MessageEmbed()
    .setColor(colors.blue)
    .setDescription(`
     _NordVPN_ <a:dabingdollar:694111180368904293>**3**

     `)
    .addField('__', 'If you want to check out what type of payment methods we have available please type, _``Payment method``_')
    .setTimestamp()
    .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
  message.author.send({embed: uEmbed35})
  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
  // Hnadler
}));
    });
});
  }
};

// Break

if (message.content.toLowerCase() === 'nord other'){
  if(message.channel.type === 'dm'){
  message.author.send('_Bot is typing_ <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('⚙️')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
    let uEmbed35 = new Discord.MessageEmbed()
    .setColor(colors.blue)
    .setDescription('Here are some other options.')
    .addField('__', 'Nord Refunds')
    .addField('__', 'Where to buy NordVpn?')
    .addField('__', 'Nord F.A.Q')
    .addField('__', 'Please type any of the above options.')
    .setTimestamp()
    .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
  message.author.send({embed: uEmbed35})
  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
  // Hnadler
}));
    });
});
  }
};

// Break

if (message.content.toLowerCase() === 'nord refunds'){
  if(message.channel.type === 'dm'){
  message.author.send('_Bot is typing_ <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('⚙')
.then(() => {
  message.channel.awaitMessages(response => response.content === '', {
    max: 1,
    time: 3000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
    let uEmbed35 = new Discord.MessageEmbed()
    .setColor(colors.blue)
    
    .setTimestamp()
    .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
  message.author.send({embed: uEmbed35})
  .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
  // Hnadler
}));
    });
});
}
};

// Break

  if (message.content.toLowerCase() === '!pages') {
  let pages = [`Player:
  Movement:
            Super Jump
            Ultra Jump
            Movement speed multiplier
            Swim Speed multiplier
            Flymode
            Walk on air
            Vegetable mode
            Slow motion
                       No Clip:
                               Noclip
                               Noclip speed
                               Walking noclip
                               Walking noclip speed

                        Super Run:
                                  Super run
                                  Super run key
                        Water:
                              Walk on water
                              Walk through water  
   Owned forcefield:
                    Toggle On/Off
   Global:
          Off the radar
          Cops turn blind eye
          Bullshark testosterone
          Loop bullshark testosterone
   Model:
         Model width
         Model height
         Model thickness
         Random model outfit
         Rainbow hair
                     Defaults:
                              Default online male model
                              Default online female model
                              Michael
                              Franklin
                              Trevor
                              Custom model
                     Models:
                            Search
                            (Every model is below this point)
    Wardrobe:
             Load outfits
             Save outfit
             Random outfit
             Police Uniform
             Add Rockstar logo
             Hair Color
                       Props:
                             Face
                             Face Variation
                             Glasses
                             Glasses Variation
                             Ear pieces
                             Ears variation
                             Clear face
                             Clear glasses
                             Clear ear pieces
                                             Components:
                                                        Face
                                                        Face variation
                                                        Masks
                                                        Masks variation
                                                        Hair
                                                        Hair variation
                                                        Torso
                                                        Torso variation
                                                        Legs
                                                        Legs variation
                                                        Parachute/Misc
                                                        Parachute/Misc variation
                                                        Shoes
                                                        Shoes variation
                                                        Extra 1
                                                        Extra 1 variation
                                                        Tops 1
                                                        Tops 1 variation
                                                        Body Armor
                                                        Body Armor variation
                                                        Crew Emblem
                                                        Crew Emblem variation
                                                        Tops 2
                                                        Tops 2 variation
     Animation:
               Stop all animations
               Controllable
               Contort
               Animations
               Walkstyles
               Scenarios
      Vision:
             Default
             Damage
             Vagos
             Cops
             White screen
             Water lab
             MP spectator cam
             Cops
             Spectator 1
             Sunglasses
             Dying
             Orange
             Vagos
             Blurry
             Stoned
             Prologue Shootout
             Secret Camera
             UFO
             UFO Deathray
             Wobbly
             Killstreak
             Hint cam
             Black and White
             Sniper
             Crane cam
             Bikers
      Particles:
                Particle man
                Dragon Breath
      General:
              God mode
              Regenerate health
              Invisibility
              Opacity
              Never wanted
              No ragdoll
      Modify Ped:
                 Clone
                 Midget mode
                 Reduced Collision
                 Clean ped
                 Peds ignore player
                 Suicide
                 Remove all attachments                              
      Misc:
           Forcefield
           Badsport yourself
           Karma
Weapon:
  Weapons:
          Get all weapons
          Get all weapons every session
          Clear all weapons
                           Upgrades:
                                    Upgrades(current weapon)
                                    Upgrades(all weapons)
                           Color Edits:
                                       Camo(current weapon)
                                       Camo(all weapons)
                                       Rainbow camo(current weapon)
   Visuals:
           Weapon width
           Weapon height
           Overall weapon scale
           Weapon invisibility
           Cross hair
           Aiming laser
           Cartoon effects
           Aimed information
   Ammo modifiers:
                  Impact ammo
                  Particle ammo
                  Modify ammo
                             Shoot Options:
                                           Explosive whale gun
                                           Missile gun
                                           Paint vehicle gun
                                           Explosive bullets
                                           Fire bullets
                                           Delete gun
                                           Drive it gun
                                           Shrink ray
                                           Ped defibrillator
                                           Force gun
                                           Model change gun
    Shoot entities:
                   Entity Type
                   Enable entity shooting
                   Enable gravity vehicle shooting
                   Gravity vehicle distance
                   Vehicle
    General:
            No reload
            Infinite ammo
            Rapid fire
            One shot one kill
    Entity movement:
                    Gravity gun
                    Pickup gun
                    Pickup range
                    Distance from gun
                    
     Misc:
          Dead eye
          Weapons in interiors and passive mode
Vehicle:
   Save json vehicle
   Los Santos Customs:
                      Loop fully tune
                      Loop randamize vehicle look
                      Apply all vehicle extras
                      Remove all vehicle extras
    Cargobob:
            Spawn cargobob
            Spawn magent
            Remove magnet
     Attach ramps:
                  Type
                  Front
                  Rear
                  Right
                  Left
                  Attach
                  Delete
    Vehicle weapons:
                    Bullet type
                    Bullet speed
                    Guided
                    Take responsibility
                    Vehicle weapons key
                    Enabled
     Vehicle movement:
                      Vehicle jump
                      Basic fly vehicle
                      Basic fly speed
                      Precise fly vehicle
                                          Vehicle speed:
                                                        Speed vehicle
                                                        Speed (Number)
                                           Boosting:
                                                    Horn boost
                                                    Horn boost speed
                                                    Infinite boost
                                            Force:
                                                  Brake force
                                                  Downforce
                                                  Lower ride height
                                             Autodrive:
                                                       Auto drive
                                                       Autodrive speed
                                             Drifting:
                                                      Drift
                                                      Drift amount
                                                      Drift key
                                              Limits:
                                                     Bypass max speed
                                                     Limit vehicle speed
                                               Misc:
                                                    Bike crate rider
                                                    Wheelie
                                                    Drive on walls
                                                    Drive on water
         Vehicle acrobatics:
                            Front flip
                            Back flip
                            Kick flip
                            Heel flip
                            Bunny hop
                            Slingshot
          Vehicle Particles:
                            Particle type
                            Particle size
                            Front left wheel
                            Front right wheel
                            Rear left wheel
                            Rear right wheel
                            Exhaust
                            Enable vehicle particles
           Vehicle doors:
                         Open door
                         Close door
                         Delete door
                         Lock doors
                         Unlock doors
            Vehicle multipliers:
                                RPM
                                Light
                                Torque
                                Acceleration
                                Brake
                                Suspension
             General:
                     Vehicle Godmode
                     Auto repair
                     Vehicle Invisibility
                     Keep engine on
                     Seatbelt
                     Fix vehicle
                     Delete vehicle
              Modify Vehicle:
                             Auto flip
                             Vehicle no collisions
                             Phase through vehicles
                             Ground to earth
               Misc:
                    Clone vehicle
               Visuals:
                       FIB numberplate
                       Onscreen speedometer
                       Numberplate speedometer
                       Rainbow paint
                       Wheel smoke cycle
                       Wash
                       Dirty
                       Burn Vehicle shell
                       Opacity
Spawn:
 Vehicle:
         Spawner settings:
                          Spawn with blip
                          Spawn with particles
                          Spawn with information
                          Spawn inside vehicle
                          Spawn invincible
                          Spawn fully tuned
                          Delete old vehicle
                          Spawn planes and helicopters in the air
                          Spawn speed
                          Spawn height
                                      Color:
                                            Do not spawn with custom colors
                                            Default primary vehicle color
                                            Default secondary vehicle color
            Manage spawned vehicles:
                                    (vehicles listed here)
            Input Vehicle name:
                               (Name goes here to spawn)
            Vehicles:
                     DLC vehicles only(DLCs listed)
                     Super
                     Sport
                     Sports classic
                     Off road
                     Sedan
                     SUV
                     Coupe
                     Muscle
                     Compact
                     Van
                     Commercial
                     Industrial
                     Military
                     Service
                     Emergency
                              Bikes:
                                    Motorcycle
                                    Cycle
                               Flying:
                                      Planes
                                      Helicopters
                                Misc:
                                     Trains
                                     Trailer
                                     Utility
                Ped:
                    Spawner settings:
                                     Spawn invincible
                                     Spawn with blip
                                     Spawn with particles
                                     Spawn with information
                     Manage spawned peds:
                                         (Spawned peds here)
                     Input ped name:
                                    (name of ped to be spawned)
                     Peds:
                          (All peds in GTA listed here)
                 Object:
                        Spawner Settings:
                                         Spawn object with blip
                                         Spawn with particles
                                         Spawn with information
                         Manage spawned objects:
                                                (Spawned objects go here)
                         Input object name:
                                           (Name of object to be spawned)
                         Objects:
                                 (All object in GTA listed here)
                  Saved vehicle loading:
                                        Load XML vehicles:
                                                          Delete last creation
                                                          Spawn objects with collision
                                         Load json vehicles:
                                                            (json vehicles listed here)
                                         Load INI vehicles:
                                                            Delete last creation
                   Map mods:
                            Unload map mods
                            (map mods listed here)
                  
                   Spawn Editor:
                                Save current creation
                                Clear spawned objects
                                Spawner mode
Teleport:
    Teleport to waypoint
    Waypoint hotkey
                   Custom saved locations:
                                          Save current location
                                          Load custom locations:
                                                                (Saved locations are here)
                    Locations:
                              Teleport transition
                              Online:
                                     Casino
                                     Mors Mutual Insurance
                                     Mask Shop
                                     Tattoo shop
                                     Ammunation
                                     Clothes Store
                                     LS Customs
                                     Benny's vehicles
                                     Ammunation Gun Range
                                     Ammunation office
                                     LS Airport Customs
                                     La Mesa Customs
                                     Senora Desert customs
                                     Beek Customs
                                     Eclipse Towers
                                     Eclipse Towers Roof
                                     Impound Lot
                                     Eclipse Towers Inside
                                     Online hidden race area
                                     Airport Tower
                                     Maze Bank CEO Office Entrance
                                     Helipad
                                     King Of The Hill
                                 Landmarks:
                                           Aiport
                                           Prison
                                           Prison Gym
                                           Prison Tower
                                           Lighthouse
                                           Cannibal Camp
                                           Mount Josiah
                                           Maze Bank Helipad
                                           Fort Zancudo
                                           Calafia Bridge
                                           Pier
                                           Mount Chilliad
                                           Mount Chilliad (Jump)
                                           Elysian Island base
                                           Ontop of Vinewood Logo
                                           Trevor's Air Field
                                           Mount Gordo
                                   Inside:
                                          Strip Club DJ Booth
                                          Humane Labs Tunnel
                                          Police Station
                                          FIB Top Floor
                                          IAA Office
                                          Torture Room
                                          Ammuniation Gun Range
                                          Ammunation Office
                                          Blaine County Savings Bank
                                          Fort Zancudo ATC Top Floor
                                     Story mode locations:
                                                          Franklin's New House
                                                          Franklin's Old House
                                                          Michael's House
                                                          Lester's House
                                                          Wayne's Cousin's House
                                                          Trevor's House
                                                          Trevor's Meth Lab
                                                          Trevor's Office
                                                          Floyd's Apartment
                                                          Lester's House
                                     Glitched locations:
                                                        Race Underground Bunker
                                                        FIB Roof Glitch
                                                        Police Station Glitch
                                                        Behind Bar In Strip Club
                                                        Building Glitch
                                                        Inside Store
                                                        City Wall Glitch
                                                        Inside Casino
                                                        Beach House
                                                        Under The Bridge Glitch
                                     IPL Locations:
                                                   Unload all IPL's
                                                   Porn Yacht
                                                   Desert UFO
                                                   Carrier
                                                   Cargo Ship
                                                   North Yankton
                                                   Plane Crash
                                                   Train Crash
                                                   Morgue
                                                   Destroyed Hospital
                                                   Fort Zancudo UFO
                                                   Heist Yacht
                          Blips:
                                Teleport to objective
                                Teleport to apartment
                                Teleport to yacht
                                Teleport to office
                                Teleport to clubhouse
                                Teleport to weed farm
                                Teleport to counterfeit cash
                                Teleport to meth lab
                                Teleport to cocaine factory
                                Teleport to own package
                                Teleport to enemy package
                                Teleport to own crate
                                Teleport to enemy crate
                          Vehicle:
                                  Nearest car(become driver)
                                  Nearest car(any free seat)
                                  Teleport to last driven vehicle
                                  Teleport to personal vehicle
                          Directional:
                                      Teleport forward
                                      Teleport up
World:
 VFX engine:
            Reset VFX settings
            Load VFX settings
            Save VFX settings
  Traffic light VFX:
                    Reset traffic lights VFX
                    Load traffic lights VFX settings
                    Save traffic lights VFX settings    
                    Traffic light red (Can change color here)
                    Traffic light orange (Can change color here)
                    Traffic light red (Can change color here)
                    Traffic pedestrian red
                    Traffic pedestrian green
   Vehicle VFX:
               Reset VFX
               Load VFX Settings
               Save VFX Settings
               Fade distance
               Headlight angle
               Headlight split
               Headlight distance
               Headlight intensity
               Player headlight distance
               Player headlight intensity
                                         Neon:
                                              Neon intensity
                                              Neon radius
                                              Neon extended sides
                                              Neon extended front
                                              Neon falloff exponenet
                                              Neon clipping pane height
     Train VFX:
               Reset trains VFX
               Load trains VFX Settings
               Save trains VFX settings
               Trains color intensity
               Trains color
     Tone mapping VFX:
                      Reset tone mapping VFX
                      Load tone mapping VFX settings
                      Save tone mapping VFX Settings
                                                     Equation:
                                                              Day:
                                                              Night:
                                                     Day:
                                                         Day filmic A
                                                         Day filmic B
                                                         Day filmic C
                                                         Day filmic D
                                                         Day filmic E
                                                         Day filmic F
                                                         Day filmic W
                                                         Day exposure
                                                      Night:
                                                            Night filmic A
                                                            Night filmic B
                                                            Night filmic C
                                                            Night filmic D
                                                            Night filmic E
                                                            Night filmic F
                                                            Night filmic W
                                                            Night exposure
        Corona VFX:
                   Reset coronas VFX
                   Load coronas VFX settings
                   Save coronas VFX settings
                   Coronas global intensity
                   Coronas water intensity
                   Coronas global size
                   Coronas global size
                   Coronas global screen space expansion
                   Coronas water screen space expansion
                   Coronas rotation speed
                   Coronas size scale paraboloid
                   Coronas Z bias multiplier
                   Coronas color
          Distant lights VFX:
                             Reset distant lights VFX
                             Load distant lights VFX settings
                             Save distant lights VFX settings
                             Distant lights start hour
                             Distant lights end hour
                             Distant lights street light start hour
                             Distant lights street light end hour
                             Distant lights flicker
                             Distant lights twinkle speed
                             Distant lights twinkle amount
                             Distant lights size
                             Distant lights min size
                             Distant lights reflection size
                             Distant lights size upscale
                             Distant lights size upscale reflections
                             Distant lights speed 1
                             Distant lights speed 2
                             Distant lights speed 3
                             Distant lights vehicle light z offset
                             Distant lights street light intensity
                             Distant lights vehicle light intensity
                             Vehicle color 1
                             Vehicle color 2
            Rain puddles VFX:
                             Reset rain puddles VFX
                             Load rain puddles VFX Settings
                             Save rain puddles VFX Settings
                             Puddles depth
                             Puddles range
                             Puddles scale
                             Puddles drop factor
                             Puddles min duration
                             Puddles max duration
                             Puddles min size
                             Puddles max size
                             Puddles ripple strength
                             Puddles ripple speed              
             Sky VFX:
                     Reset Sky FVX
                     Load Sky VFX Settings
                     Save Sky VFX Settings
                     Small cloud speed
                     Large cloud speed
                     Overall cloud speed
                     Cloud edge detail scale
                     Cloud overlay detail scale
                     Cloud hat speed
                     Cloud edge speed
    Traffic Manager:
                    Use vehicle pools(bigger range)
                    Vehicle ESP
                    Vehicle chaos
                    Explode vehicles
                    Kill driver
                    Launch vehicles
                    Boost Vehicles
                    Kickflip vehicles
                    Delete vehicles
                    Fix vehicles
                    Scorch vehicles
                    Drive vehicles to me
                    No gravity
                    Normal gravity
     Pedestrian manager:
                        Use ped pools(bigger range)
                        Ped ESP
                        Kill peds
                        Clone peds
                        Delete peds
                        Shrink peds
                        Enlarge peds
                        Enlarge peds
                        Launch peds
                                   Tasks:
                                         Clear ped tasks
                                         Peds jump
                                         Peds cower
                                         Peds hands up
                                         Peds wander
                                         Peds come to me
      Weather:
              Clouds (Type)
              Lightning storm
              Meteor shower
              Rain intensity
                             Weather types:
                                           Clear
                                           Clearing
                                           Neutral
                                           Extra Sunny
                                           Rain
                                           Smog
                                           Snow
                                           Xmas
                                           Halloween
                                           Snowlight
                                           Blizzard
                                           Thunder
                                           Overcast
      Waypoint:
               Explode
               Money drop
               Send police
               Auto drive to waypoint
               Stop auto drive
      Time:
           Add hour
           Remove hour
           Freeze time
           Sync with system time
      Water:
            Turn off ocean
            Clear water
            Wave intensity
      Water tune:
                 Ripple scale
                 Ocean Foam scale
                 Specular Falloff
      Density:
              Ped density
              Traffic density
      Clear Area
                Clear radius
                Clear area of everything
                Clear area of police
                Clear area of objects
                Clear area of vehicles
                Clear area of peds
      Misc:
           Kick all nearby from vehicles
           Teleport all nearby vehicles to sea
           Timescale
           Road slipperiness
           Gravity
           Blackout
           Ground snow
           Wind speed
Session:
   Players:
           Sort player list(sort)    
           Show marker on selected players
                                          Players:
                                                  Player options:
                                                                 Spectate player
                                                                 Spectate distance
                                                                 Quick actions:
                                                                               Teleport to player
                                                                               Teleport in players vehicle
                                                                               Non host kick & Kick to singleplayer
                                                                               Host kick
                                                                               Give all weapons
                                                                               Kick from Vehicle
                                                                               Repair vehicle
                                                                               Fully tune vehicle
                                                                               Launch vehicle
                                                                               Standard money drop
                                                                               Freeze in place
                                                                               Give never wanted
                                                                               Give off the radar
                                                                               Crash Player  
                                                                   Teleport:
                                                                            Teleport to player
                                                                            Teleport in players vehicle
                                                                            Teleport players vehicle to me
                                                                            Teleport within range (1-100)
                                                                                                         Apartments:
                                                                                                                    (All apartments listed)
                                                                    Peaceful:
                                                                             Attachment:
                                                                                        You to them:
                                                                                                    Attach
                                                                                                    Detach
                                                                                        You to their vehicle:
                                                                                                             Attach
                                                                                                             Detach
                                                                                        Your vehicle to their vehicle:
                                                                                                                       Relative postion (Front, Back, etc)
                                                                                                                       Attach
                                                                                                                       Detach
                                                                                        Their vehicle to your vehicle:
                                                                                                                      Relative postion (Front, Back, etc)
                                                                                                                       Attach
                                                                                                                       Detach
                                                                              General:
                                                                                      Give all weapons
                                                                                      Spawn clone bodyguard
                                                                                      Clear area
                                                                                      Rain weapons
                                                                                      Remove attachments
                                                                                      Particles
                                                                               Edit Bullets:
                                                                                            Give player impact bullets (Money bags, Explosions, etc)
                                                                               Godmode options:
                                                                                               Demi godmode
                                                                                               Bullet godmode
                                                                                Outfit copying:
                                                                                               Copy outfit
                                                                                               Copy outfit & character model
                                                                     Griefing:
                                                                              Attachments:
                                                                                          Presets (Includes sub category)
                                                                                          Flags (Includes sub category)
                                                                                          Vehicles (Includes sub category)
                                                                                          Peds (Includes sub category)
                                                                                          Objects (Includes sub category)
                                                                               Sounds:
                                                                                      Stop sounds
                                                                                      Sound rape
                                                                                      (28 Various sounds also listed)
                                                                               Troll:
                                                                                     Clone
                                                                                     Freeze in place
                                                                                     Give wanted level
                                                                                     Electrocute player
                                                                                     Lag area
                                                                                     Lag player
                                                                                     Make traffic hostile
                                                                                     Make pedestrians hostile
                                                                                     Fake money
                                                                               Affect Ped Vision and Movement:
                                                                                                              Trap in cage
                                                                                                              Trap in cable cars
                                                                                                              Glitch ped
                                                                                                              Shake camera
                                                                                                              Smoke player
                                                                                                              Spray with water
                                                                                                              Spray with fire
                                                                               Deadly Force:
                                                                                            Host kick
                                                                                            Crash player
                                                                                            Kill
                                                                                            Blame kill everyone
                                                                                            Silent kill
                                                                                            Clone spam
                                                                                            Set on fire
                                                                                            Ram with vehicle
                                                                                            Explode
                                                                                            Explode loop
                                                                                            Rain rockets
                                                                                            Forcefield
                                                                               Attackers:
                                                                                         Send attackers
                                                                                         Hostile clone
                                                                                         Attack with SWAT
                                                                                         Attack with jet
                                                                                         Attack with vehicle
                                                                               Misc:
                                                                                    Airstrike
                                                                                    Ragdoll player
                                                                                    Attach campfire
                                                                                    Karma
                                                                     Vehicle:
                                                                             Godmode vehicle
                                                                             Kick from vehicle
                                                                                              Movement Modifications:
                                                                                                                     Horn boost:
                                                                                                                     Launch vehicle
                                                                                                                     Slingshot vehicle
                                                                                                                     Boost vehicle
                                                                                                                     Stop vehicle
                                                                                                                     Freeze vehicle
                                                                                                                     Rotate vehicle
                                                                                               Trolling:
                                                                                                        Kill engine
                                                                                                        Revive engine
                                                                                                        Kick from vehicle loop
                                                                                                        Delete vehicle loop
                                                                                                        Burst tires
                                                                                                        Lock doors
                                                                                                        Unlock doors
                                                                                                Vehicle Modifications:
                                                                                                                      Repair Vehicle
                                                                                                                      Fully Tune vehicle
                                                                                                Vehicle Acrobatics:
                                                                                                                   Front flip
                                                                                                                   Back flip
                                                                                                                   Kick flip
                                                                                                                   Heel flip
                                                                                                                   Bunny hop
                                                                                                                   Slingshot
                                                                          Spawn:
                                                                                (DLC vehicles Listed)
                                                                                (Other vehicles by category listed)
                                                                          Remote:
                                                                                 Non host kick
                                                                                 Kick to single player
                                                                                 CEO Kick
                                                                                 CEO Ban
                                                                                         Troll:
                                                                                               Infinite loading screen
                                                                                               Sound spam
                                                                                               Transaction error
                                                                                               Face players camera forward
                                                                                               Force players camera forward
                                                                                               Gentle kick from vehicle
                                                                                               Fore into mission (Missions listed)
                                                                                          Notifications:
                                                                                                        Display spectating message
                                                                                                        Display insurance message
                                                                                                        Invite notifs
                                                                                                        Send message notifs
                                                                                                        Send notif banner
                                                                                                        Send money notif amount
                                                                                                        Send money notifs
                                                                                           Give Globals:
                                                                                                        Give never wanted
                                                                                                        Give off the radar
                                                                                                        Give cops turn blind eye
                                                                                           Drops:
                                                                                                 Standard drop delay (ms)
                                                                                                 Standard money drop
                                                                                                 Standard circle drop
                                                                                                                     Editable Drops:
                                                                                                                                    Drop type
                                                                                                                                    Drop model
                                                                                                                                    Drop amount
                                                                                                                                    Drop height
                                                                                                                                    Drop radius
                                                                                                                                    Drop delay(ms)
                                                                                                                                    Enable drop
                                                                                          Extra sensor perception:
                                                                                                                  ESP Color
                                                                                                                  ESP name
                                                                                                                  ESP box
                                                                                                                  ESP line
                                                                                                                  ESP head marker
                                                                                                                  ESP foot marker
                                                                                                                  ESP info
                                                                                                                  ESP skel
                                                                                                                  ESP sky line
                                                                                           Open player log window
                                                                                           Open player info window
                                                                                           Show profile
      All players:
                  Excludes:
                           Exclude friends
                           Exclude modders
                           Exclude team
                           Exclude host
                           Exclude self
                           Exclude Impulse users
                  Teleport:
                           Teleport all players vehicle to me
                           Teleport nearest vehicle to all players
                                                                  Apartments:
                                                                             (All apartments are listed)
                  Peaceful:
                           Give all weapons
                           Spawn clone bodyguard
                           Clear area
                           Give players impact bullets
                           Remove all players attachments
                                                         Money:
                                                               Nearby drop delay(ms)
                                                               Nearby money drop
                                                               Nearby circle money drop
                                                               Money rain on self
                                                         Money Location:
                                                                        Location drop delay(ms)
                                                                        Drop at (1-3 locations)
                                                                        Preset Locations
                                                                        Set to my location
                                                                        Show marker/s
                                                                        Money drop at set location/s
                  Griefing:
                           Clone
                           Freeze in place
                           Give wanted level
                           Electrocute session
                           Make traffic hostile
                           Make pedestrians hostile
                           Fake money
                                     Affect Ped Vision and Movement:
                                                                    Trap in cage
                                                                    Trap in cable cars
                                                                    Glitch ped
                                                                    Shake camera
                                                                    Smoke session
                                                                    Spray with water
                                                                    Spray with fire
                                     Deadly Force:
                                                  Host kick
                                                  Kill
                                                  Silent Kill
                                                  Set on fire
                                                  Ram with vehicle
                                                  Explode
                                                  Explode loop
                                                  Rain rockets
                                                  Forcefield
                                      Attackers:
                                                Send attackers
                                                Hostile clone
                                                Attack with SWAT
                                                Attack with jet
                                      Misc:
                                           Airstrike
                                           Ragdoll session
                                           Attach campfire
                                           Karma
                     Talking:
                             Show list
                             Explode
                             Add wanted level
                     Remote:
                            Non host kick
                            Kick to single player
                            CEO Kick
                            CEO ban
                                   Troll:
                                         Infinite loading screen
                                         Sound spam
                                         Lock lobbies view to face forward
                                         Gentle kick from vehicle
                                         Force into mission (Missions listed)
                                    Notifications:
                                                  Display spectating message
                                                  Display insurance message
                                                  Invite notifs
                                                  Send message notifs
                                                  Send notif banner
                                                  Send money notif amount
                                                  Send money notifs
                                    Give Globals:
                                                 Give never wanted
                                                 Give cops turn blind eye
                                                 Give off the radar
                      Vehicle:
                              Godmode vehicle
                              Kick from vehicle
                                               Movement Modifications:
                                                                      Horn boost:
                                                                      Launch vehicle
                                                                      Launch vehicle
                                                                      Boost vehicle
                                                                      Stop vehicle
                                                                      Freeze vehicle
                                                                      Rotate vehicle
                                               Trolling:
                                                        Kill engine
                                                        Revive engine
                                                        Kick from vehicle loop
                                                        Delete vehicle loop
                                                        Burst tires
                                                        Lock doors
                                                        Unlock doors
                                                Vehicle Modifications:
                                                                      Repair Vehicle
                                                                      Fully Tune vehicle
                                                Spawn vehicle:
                                                      (All vehicles by category listed)                                                                                                                        
                                                Extra sensor perception:
                                                                        ESP Color
                                                                        ESP name
                                                                        ESP box
                                                                        ESP line
                                                                        ESP head marker
                                                                        ESP foot marker
                                                                        ESP info
                                                                        ESP skel
                                                                        ESP sky line
                                                 Crash Session with entities
         Session overseer:
                          Enable overseer
                          Rockstar staff
                          Show if R* ID is Online
          Info Spoofer:
                       Info Spoofer Profiles
                       Rank input
                       Set rank
                       Wallet input
                       Kills input
                       Set kills
                       Deaths input
                       Set deaths
                       K/D input
                       Set K/D
                       Enter profile name:
                       Save profile!
                                    Random choice spoofs:
                                                         Random rank spooft spam
                                                         Random wallet spoof spam
                                                         Random K/D ratio spoof spam
           Data management:
                           Dump players data
                           Log player data constantly
                           Dump chat messages
                           Log chat messages constantly
           Name:
                Auto change name on next load
                Save name:
                Preset names
                Reset changed name
                Custom name input
                Name color
                Name setting
                Set:
           Notify on cash drops in session
           Notify on player joins in session
           Show session info
           Show talking players
           Reveal players
           Show as Impulse
Protection:
      Attachment:
                 Delete nearby peds and vehicles
                 Detach attached objects
                 Delete attached objects
      Network events:
                     Clear tasks
                     Take weapons
                     Give weapons
                     Particle effects
                     Wanted level
                     Weather
                     Time
                     Explosions
                     Control
                     Sound
                     Vote kick notification
       Script events:
                     Script events
                     Smart script event protection
                     Block all script events
       Spoofing:
                R*ID Spoof:
                           Selected id for spoof:
                           Enable R* ID Spoof
                           Set random R* ID
                           Reset Spoofed R* ID
                R* ID Preset Profile Sets:
                                          MrBossFTW
                                          NoughtPointFourLIVE
                                          Kwebbelkop
                R* ID Custome Profile Sets:
                                           Name for spoof:
                                           ID for spoof
                                           Enter profile name
                                           Save profile
        Misc:
             Safe space
             Clone
             Vehicle network mitigate
             Blame
             Aiming protection
        Impulse user block
Recovery:
    Money:
          Current Bank balance:
          Current wallet balance:
                                 Add:
                                     Give money
                                     Loop give money
                                 Remove:
                                        Remove Money
                                        Loop remove money
                                        Remove all of wallet
                                 ATM:
                                     Deposit all of wallet to bank
                                     Withdraw all of bank to wallet
                                     Amount
                                     Deposit
                                     Withdraw
     Unlocks:
             Unlock tattoos
             Unlock clothing
             Unlock exclusive t-shirts
             Unlock hairstyles
                              Vehicles:
                                       Unlock vehicle mods
                                       Unlock heists                    
                              Inventory:
                                        Max snacks
                                        Max armor
                                        Max fireworks
                              Misc:
                                   Unlock weapon skins
                                   Unlock camos and parachutes
                                   Unlock achievements and stats
                                   Unlock office money clutter
                                   Unlock biker stuff clutter
                                   Unlock high club popularity
                                   Unlock all casino t-shirts
      Stat editor:
                  Max all stats
                  Max stamina
                  Max strength
                  Max lung capacity
                  Max driving
                  Max flying
                  Max shooting
                  Max stealth
       Playtime:
                Days
                Hours
                Minutes
                Seconds
       Misc stats:
                  Race wins
                  Race losses
                  Team deathmatch wins
                  Team deathmatch losses
                  Deathmatch wins
                  Deathmatch losses
       KD editor:
                 Set kills
                 Set deaths
                 Set online kills
                 Set online deaths
                 Set shots
                 Set headshots
                 Set hits
       Level:
             Set custom level
             Set custom crew level
             RP increaser(wanted level)
       Misc:
            Bypass tutorial
            Redesign character
            Change character gender
            Clear mental state
            Modded rolls + more ammo (Shooting ability)  
Miscellaneous:
         Report stats:
                      (Report stats displayed here)
         Mobile TV:
                   Toggle TV
                   Change channel
                   (X,Y,W,H) Postion
                   Roation
         Disables:
                  Disable idle kick
                  Disable stunt jump cutscenes
                  Disable phone
                  Disable notifications
                  Disable game recordings
                  Disable HUD
         External links:
                        Open Impulse site
                        Open Impulse youtube
                        Open Impulse header creation tutorial
                        Open Impulse header scripthook tutorial
                        Open Impulse r* id spoofer tutorial
         Hud editor:
                    Edit your HUDs color (Various color options)
         Train options:
                       Drive nearest train
                       Spawn train
                       Quit train ride
                       Delete spawned train
                       Keyboard controls
                       Chrome train
                       Derail train
                       Speed up train
                       Slow down train
         Camera:
                Freecam
                Freecam speed
                Freecam teleport
                Freecam controller toggle
                GTA 1 camera
                Camera zoom
         HUD/Display Options:
                             FPS display
                             Coords display
                             Remove transaction loading
                             Decreased graphics mode
                             Reset graphics in your area
          Other:
                Dev mode
                Mobile radio
                Skip radio track
                See through walls
                Enable snow trails & footsteps
                Bail to singleplayer
Settings:
    Language:
             Generate empty language file
             Reset language
             Load languages(Import to select one)
     Menu theme:
                (various options to customize menu)`, `Second page`, `Third page`, `So on`];
  let page = 1;
  const embed = new Discord.MessageEmbed()
    .setColor(colors.orange)
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.channel.send(embed).then(msg => {
      msg.react('⬅️').then( r => {
        msg.react('➡️')

        const backwardsFilter = (reaction, user) => reaction.emoji.name === ('⬅️') && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === ('➡️') && user.id === message.author.id;

        const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 });
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });

        backwards.on('collect', r => {
          if (page === 1) return;
          page--;
          embed.setDescription(pages[page-1]);
          embed.setFooter(`Page ${page} of ${pages.length}`);
          msg.edit(embed)
        })

        forwards.on('collect', r => {
          if (page === pages.length) return;
          page++;
          embed.setDescription(pages[page-1]);
          embed.setFooter(`Page ${page} of ${pages.length}`);
          msg.edit(embed)
        })

      })
    })
}


// Break

// helper end

})


bot.login(token);
