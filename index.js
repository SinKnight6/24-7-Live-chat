const Discord = require("discord.js");
const colors = require("./colors.json");
const bot = new Discord.Client();
const talkedRecently = new Set();
const { MessageEmbed } = require('discord.js')
const DESTINATION = '712527883129716757';
const openTickets = new Map();
const ACCEPT = '711139565569572885';
const REJECT = '711139517876273224';


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

            2. If you have purchased something from Knight-Shop or Shoppy please type, _\`Purchase\`_ .

            3. If you had an issue with your puchase or need help purchasing please type, _\`Purchase issue\`_.

            4. If you need information, help or have an issue with Impulse mod please type, _\`Impulse\`_ .

            5. If you need information, help or have an issue with GTA V Game key please type, _\`GTA V\`_ .`)
            .setTimestamp()
            .setFooter(`Live chat bot | At your service ${message.author.username}`, 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
            message.author.send({embed: uEmbed1});
    });
    });
    };
      

// Break
/*
if (message.content.toLowerCase() === 'purchase'){
  if(message.channel.type === 'dm'){
message.author.send('Bot is typing <a:typing:705296058900545567>')
  .then(sentMessage => sentMessage.delete({ timeout: 3000 })
 .catch(error => {
  // Hnadler
}))
message.react('🛍️')
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
        .setTitle('__Buy__')
        .setColor(colors.aqua)
        .setDescription('To purchase please PayPal me here https://paypal.me/KnightShop?locale.x=en_US')
        .addField('After Purchasing', 'Make sure to type ``Claim my purchase``')
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
*/

// Break

// New 

if (message.channel.id === '784215389583573003')
  await message.delete();

if (message.content.toLowerCase() === 'purchase a recovery' && message.channel.id === '784215389583573003'){
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
          .setTitle(`Hello! ${message.author} Please fallow the instructions bellow`)
          .setThumbnail('https://cdn.discordapp.com/attachments/696241284352049193/698828564191117312/knight.gif')
          .setAuthor(`${message.guild.name} Live Chat Beta`, message.guild.iconURL)
          .setDescription(`

          2. If you want to purchase a __**Recovery**__ please type, _\`Buy Recovery Now\`_ .

          3. If you want to know how the proccess works please type, _\`how does recovery work\`_.

          4. If you want to see our FAQ please type, _\`Recovery FAQ\`_ .`)
          .setTimestamp()
          .setFooter(`Live chat bot | At your service ${message.author.username}`, 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
          message.author.send({embed: uEmbed1});
  });
  });
  };


// Break

if (message.content.toLowerCase() === 'how does recovery work'){
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
      let embed = new Discord.MessageEmbed()
      .setTitle('**__How does It work?__**')
      .setColor(colors.orange)
      .setDescription (`

      * Decide any of our available package you want.
      * Type and send the bot you currently messaging with right now _\`how does recovery work\`_.
      * Wait for Admin or Staff Member to recive and accept your message.
      * You will be given option to pay with.
      * Select Payment Method & Pay.
      * That’s it, now your order will be completed within 24-48 hours.
      `)
      .setTimestamp()
      .setFooter('Live chat bot | At your service', 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
      message.author.send({embed: embed})
      .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
 .catch(error => {
    }));
  });
});
  }
};

// Break

if (message.content.toLowerCase() === 'buy recovery'){
  if (message.author.bot) return;
  if(message.channel.type === 'dm'){
    if (!openTickets.has(message.author.id)) {
      const embed = new MessageEmbed()
      .setDescription(`Hello! ${message.author} We have received your message, Please be patient while we get someone from our team to get to you`)
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
          .setDescription(`[${message.author}] Is looking to buy a recovery for GTA V`)
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
    .setDescription(`Staff has accepted your query, Please type what recovery you will be buying here are some otions bellow`)
    .addField(`STARTER RECOVERY PACK
•$300 Million GTA Online Money
•1-120 Levels
•All Available Unlocks  (Including Ones Below)
•Unlock All Hairstyles
•Unlock All Tattoos
•Unlock All LSC Mods/Upgrades
•Unlock All Weapon Tints
•Unlock All Trophies/Heists/Heist Rewards`,
`Price: $5.00`)
   .addField(`BRONZE RECOVERY
•$600 Million GTA Online Money
•1-250 Levels
•All Available Unlocks  (Including Ones Below)
•Unlock All Hairstyles
•Unlock All Tattoos
•Unlock All LSC Mods/Upgrades
•Unlock All Weapon Tints
•Unlock All Trophies/Heists/Heist Rewards`,
`Price: $7.50`)
  .addField(`SILVER RECOVERY(50% OFF)
•$1 Billion GTA Online Money
•1-420 Levels
•All Available Unlocks  (Including Ones Below)
•Unlock All Hairstyles
•Unlock All Tattoos
•Unlock All LSC Mods/Upgrades
•Unlock All Weapon Tints
•Unlock All Trophies/Heists/Heist Rewards`,
`Price: $10.00`)
  .addField(`GOLD RECOVERY
•$1.5 Billion GTA Online Money
•1-750 Levels
•All Available Unlocks  (Including Ones Below)
•Unlock All Hairstyles
•Unlock All Tattoos
•Unlock All LSC Mods/Upgrades
•Unlock All Weapon Tints
•Unlock All Trophies/Heists/Heist Rewards`,
`Price: $12.50`)
  .addField(`GTA 5 CASH UP (MONEY ONLY)

*Need more CASH but not levels or RP?
Get your  Cash up now!`, 
`Price Options: 
$5.00 USD  for 400 MILLION MEGA Cash!
$7.50 USD  for  700 MILLION ULTRA Cash!
$10.00 USD  for  1.2   BILLION INSANE Cash!`)
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
          if (m.content.toLowerCase() === 'endchat') {
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


// New

if (message.content.toLowerCase() === 'paypal'){
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
          let uEmbed1 = new Discord.MessageEmbed()
            .setColor(colors.blue)
            .setTitle('PayPal Payment')
            .addField(`Please make suure to send the right amount of money otherwise we will not be able to process with your request`, `https://paypal.me/KnightShopTeam?locale.x=en_US`)
            .setThumbnail('https://cdn.discordapp.com/attachments/704209584071508079/784517982851301416/Paypal_NNN.png')
            .setTimestamp()
            .setFooter(`Live chat bot | At your service ${message.author.username}`, 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
            message.author.send({embed: uEmbed1})
          .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
     .catch(error => {
        }));
      });
    });
      }
    };
// New 

// Break 

if (message.content.toLowerCase() === 'credit or debit'){
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
          let uEmbed1 = new Discord.MessageEmbed()
            .setColor(colors.blue)
            .setTitle(`Please go to the page to choose which Recovery Pack you want and you can pay afterwards by pressing on the "BUY NOW" Blue button `)
            .setThumbnail('https://cdn.discordapp.com/attachments/696241284352049193/698828564191117312/knight.gif')
            .setAuthor(`${message.guild.name} Live Chat Beta`, message.guild.iconURL)
            .setDescription(`https://knight-shop.webnode.com/`)
            .setTimestamp()
            .setFooter(`Live chat bot | At your service ${message.author.username}`, 'https://cdn.discordapp.com/attachments/696241284352049193/698835003718762576/livechat.gif')
            message.author.send({embed: uEmbed1})
          .then(sentMessage => sentMessage.delete({ timeout: 7200000 })
     .catch(error => {
        }));
      });
    });
      }
    };


// Break

if (message.content.toLowerCase() === 'purchase') {
  if (message.author.bot) return;
  if (message.channel.type === 'dm') {
    if (!openTickets.has(message.author.id)) {
      const embed = new MessageEmbed()
      .setDescription(`Hello! ${message.author} We have received your message, Please wiat for <@594785101926105089> to reply back please be patient.`)
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
          .setDescription(`[${message.author}] Has bought something, please let <@594785101926105089> ANSWER IT**. `)
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
                  .setDescription(`Staff has accepted your query, Please type what product you have purchased (Be specific if you need to) and a Screenshot/file of the invoice.`)
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
          if (m.content.toLowerCase() === 'endchat') {
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

/*
if (message.content.toLowerCase() === 'purchase issue'){
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
*/
// Break

if (message.content.toLowerCase() === 'purchase issue') {
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
                  .setDescription(`Staff has accepted your query. Please type what problem you are having with your purchase.`)
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
    .addField('__', 'For Essential type, _``Inject Impulse Essential``_')
    .addField('__', 'For Impulse Standard and VIP type, _``Inject Impulse Standard/VIP``_')
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

if (message.content.toLowerCase() === 'inject impulse essential'){
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

if (message.content.toLowerCase() === 'new method'){
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
    .setTitle('__New Inject Method__')
    .setColor(colors.orange)
    .setDescription('Hope it helps!')
    .setImage('https://cdn.discordapp.com/attachments/711424012953190410/714759069088350248/new-method.gif')
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

if (message.content.toLowerCase() === 'inject impulse standard/vip'){
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
  .addField('_', 'If this method doesnt work for you or if you are using _**Epic Games**_ please type, ``New method``')
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
  .setDescription('Please visit our website https://knight-shop0.webnode.com/ or https://shoppy.gg/@7TH_SIN.')
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
  .addField('__', 'Impulse Essential<a:dabingdollar:694111180368904293>**17**')
  .addField('__', 'Impulse Standard<a:dabingdollar:694111180368904293>**36**')
  .addField('__', 'Impulse VIP<a:dabingdollar:694111180368904293>**63**')
  .addField('__', 'Impulse Essential to Standard Upgrade<a:dabingdollar:694111180368904293>**22**')
  .addField('__', 'Impulse Standard to VIP Upgrade<a:dabingdollar:694111180368904293>**35**')
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
.addField('__', '<:coin:691786593673150505> (Bitcoin)')
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
          .setAuthor(message.author.tag ,message.author.displayAvatarURL())
          .setDescription(`${message.author}: needs help with Gta V`)
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
            .setDescription(`\`User Message:\` **${m.content}**`)
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
      .addField('__', 'if you get a text saying **"Switch your Social Club account"** Please type, _``GTA Troubleshoot``_')
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

if (message.content.toLowerCase() === 'gta troubleshoot'){
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
    .setDescription('Nord VPN is under maintenance and was disabled until further notice.')
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
/*
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
*/
// Break

  if (message.content.toLowerCase() === 'essential features') {
  let pages = [`
  **__Player__**
[_Globals_]

* Off the radar
* Cops turn blind eye   
* Bullshark testosterone
* Loop bullshark testosterone 
* No orbital cannon cooldown    

[_Model_]

* Random model outfit 
* Rainbow Hair 

-Defaults-

* Default online male model 
* Default online female model
* Custome model 

-Model- 

* 684 outfits available

[_Wardrobe_] 1/38

* Random outfit
* Add Rockstar logo
* Hair color

-Props-

* Face 
* Face variation
* Glasses
* Glasses variation
* Ear pieces
* Ear Variation
* Clear face
* Clear glasses
* Clear ear pieces

-Components-

* Face
* Face variation
* Masks
* Masks variation
* Hair
* Hair variation 
* Torso
* Torso variation
* Legs
* Legs variation
* Parachute / Misc
* Parachute / Misc variation
* Shoes
* Shoes variation 
* Extra 1 
* Extra variation 
* Tops 1
* Tops 1 variation
* Body Armor 
* Body Armor variation
* Crew Emblem
* Crew Emblem variation 
* Tops 2 
* Tops 2 variation

[_Animation_] 1/6

* Stop all animations
* Controllable
* Contort
* Animations
* Walkstyles
* Scenarios

[_Vison_] 1/26

* Deafult
* Damage 
* Vagos
* Cops
* White screen
* Water lab
* MP spectator cam 
* Cops
* Spectator 1
* Sunglasses
* Dying
* Orange
* Vagos
* Blurry
* Stoned
* Prologue shootout
* Secret camera
* UFO 
* UFO deathray
* Wobbly 
* Killstreak
* Hint cam
* Black and white
* Sniper
* Crane cam 
* Bikers

-General-

* God mode   
* Invisibility   
* Wanted Level  
* No ragdoll   
* Alpha   
* Clean ped  
* Remove all attachments`,
`
-Movement-

* Super run  
* Super jump  
* No clip  
* Slow motion   
* Fly mode   

-Misc-

* Peds ignore Player  
* Forcefield   
* Suicide
* Clone
* Karma   
* Badsport yourself  


**__Weapon__** 2/11
[_Weapons_] 1/5

* Camo (current weapon)
* Rainbow Camo (current weapon)
* Upgrade (current weapon)
* Get all weapons 
* Clear all weapons

[_Shoot entities_] 1/3

* Entity type
* Enable entity shooting 
* Vehicle

[_Modify ammo_] 1/12

* Impact
* Particle FX 
* Modifier

-Shoot Options-

* Explosive whale gun
* Missile gun 
* Paint vehicle gun
* Explosive bullets
* Fire Bullets 
* Delete gun
* Drive it gun 
* Force gun
______________________

* One shot one kill 
* Infinity ammo
* No reload 
* Dead eye 
* Gravity gun 
* Rapid fire`,
`
**__Vehicle__** 1/28
[_Los snatos customs_] 1/18

* Fully tune
* Loop fully tune
* Downgrade
* Randomize vehicle look
* Loop Randomize vehicle look
* Apply all vehicle extras 
* Remove all vehicles extras

-Los Santos Custome-

[_Lights_] 1/8

* Xenon lights
* Xenon color
* Rainbow xenon lights

-Nenon-

* Rainbow neon lights
* Left 
* Right 
* Front 
* Back

[_Plates_] 1/2

* License plate
* Set license plate text

[_Respray_] 1/5

- Primary- 
 
* Classic
* Metallic
* Matte
* Metal
* Utility
* Worn
* Chrome

- Secondary- 1/7

* Classic
* Metallic
* Matte
* Metal
* Utility
* Worn
* Chrome

- Pearlescent- 1/7

* Classic
* Metallic
* Matte
* Metal
* Utility
* Worn
* Chrome

- Wheel- 1/7

* Classic 
* Metallic 
* Matte 
* Metal 
* Utility 
* Worn 
* Chrome

_______________

* Eveff scale

[_Wheels_] 1/7

* Tire smoke
* Red 
* Green
* Blue
* Bulletfroof wheels 
* Wheel type 
* Wheels`,
`
[_Performace_] 1/7

* Fully tune performance 
* Turbo
* Engine 
* Brakes 
* Transmission 
* Suspension 
* Armor 
______________

*Window tint

[_Cargobob mods_] 1/2

* Spawn magnet
* Remove magnet

[_Attach ramps_] 1/9

* Type 
* Invisible to others 
* Local Opacity 
* Front
* Rear
* Right
* Left 
* Attach
* Delete

[_Vehicle acrobatics_] 1/5

* Front flip
* Back flip 
* Kick flip 
* Heel flip
* Bunny hop

[_Vehicle particles_] 1/8

* Type 
* Size 
* Front left wheel 
* Front right wheel 
* Reare left wheel 
* Rare right wheel 
* Exhuast
* Enable vehicle particles 

-General-

* Godmode 
* Vehicle 
* Horn boost 
* Seatbelt
* Keep engine on
* Invisibility
* Fix
* Delete vehicle 
* Vehicle weapons 

-Visual-

* Alpha 
* Burn vehicle shell
* Rainbow paint 
* Onscreen speedometer

-Misc- 

* Clone vehicle 
* Wash 
* Bypass max speed
* Drive on water
* Instant enter vehicle 
* Lock doors
* Unlock doors`,
`
**__Spawn__** 1/4
[_Vehicle_] 1/28

-Sawn settings- 1/6

* Spawn with blip
* Spawn inside vehicle
* Spawn invincible
* Spawn fully tuned 
* Delete old vehicle
* Spawn planes and helicopters in air 

______________

* Custome Input

-Vehicles- 

* DLC vehicles only  
* Super (47 Super)
* Sport (72 Sport)
* Sport classic (44 Sport classic)
* Open wheel (2 Open wheel)
* Off road (56 Off Road)
* Sedan (32 Sedan)
* SUV (31 SUV)
* Coupe (14 Coupe
* Muscle (67 Muscle)
* Compact (14 Compact
* Van (32 Van)
* Commercial (20 Commercial)
* Industrial (11 Indusrial) 
* Military (14 Military)
* Service (12 Service) 
* Emergency (19 Emergency)
* Motorcycle (53 Motorcycle)
* Cycle (7 Cycle)
* Planes (36 Planes)
* Helicopters (24 Helicopters)
* Boats (19 Boats)
* Trains (8 Trains) 
* Trailer (25 Trailer) 
* Utility (19 Utility)

[_Ped_] 1/685

* Input ped name

-Peds-

* 683 Peds Available

[_Object_] 1/9467

* Input object name

-Objects- 

* 9465 Objects Availabl

[_Spooner_] 1/2

* Delete last creation
* Spawn objects with collision`,
`
**__Teleport__** 1/22

* Teleport to waypoint

-Locatons-

[_Online_] 1/23

* Casino
* Morse Mutual Insurance
* Mask Shop
* Tattoo Shop
* Ammunation
* Clothes Store 
* LS Customs
* Benny's vehicles 
* Ammunition Gun Range 
* Ammunition Office 
* LS Airport Customs 
* La Mesa Customs 
* Senora Desert Customs 
* Beek Customs 
* Eclipse Towers 
* Eclipse Towers Roof 
* Impound Lot 
* Eclipse Tower Inside 
* Online Hidden Race Area 
* Airport Tower 
* Maze Bank CEO Office Entrance 
* Helipad 
* King Of Thw Hill

[_Landmarks_] 1/17

* Airport 
* Prison 
* Prison Gym 
* Prison Tower 
* Lighthouse 
* Cannibal Camp 
* Mount Josiah 
* Maze Bank Helipad 
* Fort Zancudo 
* Calafia Bridge 
* Pier 
* Mount Chiliad 
* Mount Chiliad (Jump)
* Elysian Island Base
* Ontop of Vinewood Logo 
* Trevor's Air Field 
* Mount Gordo 

[_Inside_] 1/10

* Strip Club DJ Booth
* Humane Labs Tunnel 
* Police Station
* FIB Top Floor 
* IAA Office 
* Torture Room 
* Ammunation Gun Rnage 
* Ammunation Office 
* Blaine County Saving Bank 
* Fort Zancudo ATC Top Floor

[_Story mode locations_] 1/10 

* Franklin's New House 
* Franklin's Old House 
* Michael's House 
* Lester's House 
* Wayne's Cousin's House 
* Trevor's House 
* Trevor's Office 
* Floyd's Apartment 
* Lester's House 

[_Glithed locations_] 1/10

* Race Underground Bunker 
* FIB Roof Glitch 
* Police Station Glitch 
* Behind Bar In Strip Club 
* Building Glitch 
* Inside Store 
* City Wall Clitch 
* Beach House 
* Under The Bridge Glitch`,
`
[_IPL Locations_] 1/12

* Unload all IPL's 
* Porn Yacht 
* Desert UFO 
* Carrier 
* Cargoship
* North Yankton
* Plane Crash 
* Train Crash 
* Morgue 
* Destroyed Hospital 
* Fort Zancudo UNFO 
* Heist Yacht 

-Blips-

* Teleport to objective 
* Teleport to apartment 
* Teleport to yacht 
* Teleport to office 

-Vehicle-

* Nearest car (become driver)
* Nearest car (any free seat)
* Teleport to last driven vehicle
* Teleport last driven vehicle to me 
* Teleport into personal vehicle 

-Directional-

* Teleport forward 
* Teleport up


**__World__** 1/31

[_Weather_] 1/17

* Clouds
* Lightning storm
* Rain intensity

-Weather types-

* Clear
* Clearing
* Neutral
* Extra Sunny
* Rain
* Smog
* Snow
* Xmas
* Halloween 
* Snowlight 
* Blizzard
* Thunder
* Overcast

[_Waypoint_] 1/3

* Send police
* Auto drive to waypoint
* Stop auto drive

-Time- 

* Add hour
* Remove hour 
* Set hour 
* Set minutes
* Freeze time 
* Sync with system time

-Density- 

* Ped density 
* Traffic desity 

-Clean Area- 

* Clear radius
* Clear area of everything 
* Clear area of police 
* Clear area of objects 
* Clear area of vehicles 
* Clear area of peds 

-Kill Nearby-

* Kill nearby peds 
* Kill nearby enemies

-Delete Nearby-

* Delete nearby peds 
* Delete nearby enemies 
* Delete nearby vehicles

-Misc-

* Timescale
* Gravity 
* Blackout 
* Ground snow 
`,
`
**__Network__** 1/7

[_All players_] 1/6

-Excludes- 

* Exclude friends
* Exclude host
* Exclude self

-Teleport-

* Teleport players vehicle to me

-Peaceful-

* Drop delay (ms)
* Money drop
* Give all weapons 
* Spawn clone bodyguard
* Clear area
* Rain weapons 

-Griefing-

* Send attackers
* Kick from vehicle 
* Ragdoll player
* Give wanted level 
* Kill
* host kick
* Explode
* Set on fire
* Clone 
* Hostile clone 
* Airstrike
* Glitch ped
* Trap in cage 
* Crash session with models
* Crash session without entities

-Remote-

* Non host kick
* Kick to single player
* infinite loading screen 
* Ban From CEO
* Give never wanted 
* Give off the radar
* Give cops turn blind eye

-Extra sensory perception-

* ESP name 
* ESP line
* ESP head marker
* ESP foot marker
* ESP info `,
`
[_Lobby modifications_] 1/18

* Lock lobby to friends
* Notify on non-friend player kicks
* Star empty public session 

- Weather & Time - 

* Lobby weater
* Set lobby time to noon
* Set lobby time to midnight 
* Set lobby time to morning 
* Set lobby time to evening 
* Set lobby time to hour 
* Icrease lobby hour 
* Lower lobby hour

- Loops - 

* Lock lobby time to day
* Lock lobby time to midnight
* Spam day & midnight
* Slow transition day to midnight 
* Fast transition day to midnight 
* Fast day to midnight 

[_Player history_] 1/--

* Store count
* Store list

- Players -

(All pakyers that are in lobby will be listed here)


[_Info spoofing_] 1/15

-Change name-

* Preset names (All Preset names will be listed here)
* Custom name input
* Reset changed name
* Name setting
* Set: (Name that is being used at the time)

-R*ID spoofer-

* Spoof R*ID: 0000000 (Random Numbers)
* Enable R*ID spoof
* Set random R*ID
* Preset Spoofed R*ID

-Streamer mode-

* Stream mode
* Change lobby r* ids
* Change own name
* Prefix name: Player
______________

* Ped location ghost mode

-My Player Data-

* Rank input
* Set rank
* Wallet input
* Kills input
* Set kills
* Deaths input
* Set deaths
* K/D input
* Set K/D
______________

* Join by R*ID
* Move to 

-Players- 

(All Players that are in the lobby will show here)`,
`
**__Recovery__** 1/13
[_Money_] 1/16

* Current bank: $0 (Ammount of money on your bank will appear here)
* Current wallet: $1 (Ammount of money on your waller will appear here)

-Add-

* Give money 
* Loop delay
* Loop give money 

-Remove-

* Remove Money
* Loop remove money 
* Remove all of wallet

-ATM-

* Deposit all of wallet to bank
* Withdraw all of bank to wallet
* Amount`,
`
[_Unlocks_] 1/20

* Unlock tattoos 
* Unlock clothing
* Unlock exclusive t-shirts
* Unlock hairstyles

-Vehicles-

* Unlock vehicle mods
* Unlock heists

-Inventory-

* Max snacks 
* Max armor
* Max fireworks

-Misc-

* Unlock weapon skins 
* Unlock camos and parachutes
* Unlock achievements and stats
* Unlock office money clutter
* Unlock biker stuff clutter
* Unlock high club popularity
* Unlock all casino t-shirts
* Unlock all bunker research

[_Stat editor_] 1/29

* Max all stats
* Max stamina 
* Max strength
* Max lung capacity
* Max driving
* Max flying
* Max shooting 
* Max stealth
* Stamina
* Strength 
* Lung capacity
* Driving
* Flying 
* Shoothing 
* Stealth

-Playtime-

* Days 
* Hours
* Minutes 
* Seconds

-Misc Stats-

* Race wins 
* Race losses 
* Team deathmatch wins
* Team deathmatch losses
* Deathmatch wins
* Deathmatch losses

-Casino Heist Sats- 

* Set casino heist target to dimonds

[_KD editor_] 1/7

* Set kills
* Set deaths
* Set online kills 
* Set online deaths
* Set shots
* Set headshots
* Set hits

- Level -

* Set custom level
* RP increase (wanted level)

- Misc - 

* Bypass tutorial
* Redesign character
* Change character gender
* Clear mental state 
* Modded rolls + more ammo`,
`
**__Protection__** 1/36

* Impulse user block
* Detach attached objects
* Delete objects
* Delete vehicles
* Delete peds
* Safe space 

-Notifications-

* Notify attacks

-Script Events-

* Block all
* Kick
* Send to mission
* Face camera forward
* Ban from CEO
* Kick from CEO 
* Remote teleport
* Infinity load screen
* Gentle kick from vehicle
* Invite notifications
* Notifications

-Net Event-

* Vote kicks
* Give control
* Wanted level
* Freeze
* Remove weapons
* Give weapons
* Particle Effects 
* Explosions
* Sounds
* Reports
* Weather 
* Time

-Redirect Events-

* Redirect malicious script events
* Redirect malicious network events


**__Miscellaneous__** 1/15
[_Disables_] 1/8

* Disable idle kick 
* Disable cinamatic button
* Disable stunt jump cutscenes
* Disable phone
* Disable notifications
* Disable game recordings
* Disable HUD
* Disable cutscenes

-Camera-

* Freecam
* GTA 1 camera
* Camera zoom

-Other-

* Remove chat censor
* FPS display
* Remove transaction loading
* Reset graphics in your area
* Mobile radio
* Skip radio track
* See through walls
* Potato pc mode
* Enable snow trails & footstep`,
`
**__Settings__** 1/8
[_Colors_] 1/26

* Save option to save value

-Title text-

* Red title text
* Green title text
* Blue title text
* Alpha title text

-Submenu header-

* Red submenu header
* Green submenu header
* Blue submenu header
* Alpha submenu header

-Background-

* Red background
* Green background
* Blue background
* Alpha background

-Scroller-

* Red scroller
* Green scroller
* Blue scroller
* Alpha scroller

-Options-

* Red options 
* Green options
* Blue options 
* Alpha options

[_Language_] 1/3

* Generate empty language file
* Reset language
* Load languages

______________

* Font 
* Auto disable spectate on death
* Add comma separator for money

- Menu Positioning -

* Horizontal Axis
* Vertical Axis
`];
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

        const backwards = msg.createReactionCollector(backwardsFilter, { time: 3600000 });
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 3600000 });

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

if (message.content.toLowerCase() === 'standard features') {
  let pages = [`
  **Player**
  
__Movement__ :

	Super Jump
        Ultra Jump
        Movement speed multiplier
        Swim Speed multiplier
        Flymode
        Walk on air
        Vegetable mode
        Slow motion

__No Clip__ :

        Noclip
        Noclip speed
        Walking noclip
        Walking noclip speed
 
__Super Run__ :

        Super run
        Super run key

__Water__ :

        Walk on water
        Walk through water  
        
__Owned forcefield__ :

       Toggle On/Off
        
__Global__ :

       Off the radar
       Cops turn blind eye
       Bullshark testosterone
       Loop bullshark testosterone

__Model__ :

       Model width
       Model height
       Model thickness
       Random model outfit
       Rainbow hair

__Defaults__ :

       Default online male model
       Default online female model
       Michael
       Franklin
       Trevor
       Custom model
  `, 
`
__Models__ :

       Search
       (Every model is below this point)
         
__Wardrobe__ :

       Load outfits
       Save outfit
       Random outfit
       Police Uniform
       Add Rockstar logo
       Hair Color

__Props__ :
                                  
	      Face
        Face Variation
        Glasses
        Glasses Variation
        Ear pieces
        Ears variation
        Clear face
        Clear glasses
        Clear ear pieces

__Components__ :

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

__Animation__ :

	     Stop all animations
       Controllable
       Contort
       Animations
       Walkstyles
       Scenarios

__Vision__ :

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
`,
`
__Particles__ :

        Particle man
        Dragon Breath

__General__ :

       God mode
       Regenerate health
       Invisibility
       Opacity
       Never wanted
       No ragdoll

__Modify Ped__ :

        Clone
        Midget mode
        Reduced Collision
        Clean ped
        Peds ignore player
        Suicide
        Remove all attachments
                              
__Misc__ :

        Forcefield
        Badsport yourself
        Karma
`,
`
**Weapon**

__Weapons__ :

        Get all weapons
        Get all weapons every session
        Clear all weapons

__Upgrades__ :

        Upgrades(current weapon)
        Upgrades(all weapons)

__Color Edits__ :
      
	      Camo(current weapon)
        Camo(all weapons)
        Rainbow camo(current weapon)

__Visuals__ :

        Weapon width
        Weapon height
        Overall weapon scale
        Weapon invisibility
        Cross hair
        Aiming laser
        Cartoon effects
        Aimed information

__Ammo modifiers__ :

	      Impact ammo
        Particle ammo
        Modify ammo

__Shoot Options__ :

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

__Shoot entities__ :

        Entity Type
        Enable entity shooting
        Enable gravity vehicle shooting
        Gravity vehicle distance
        Vehicle

__General__ :

        No reload
        Infinite ammo
        Rapid fire
        One shot one kill

__Entity movement__ :

        Gravity gun
        Pickup gun
        Pickup range
        Distance from gun
                         
__Misc__ :

        Dead eye
        Weapons in interiors and passive mode

__Vehicle__ :

        Save json vehicle
`,
`
__Los Santos Customs__ :

       Loop fully tune
       Loop randamize vehicle look
       Apply all vehicle extras
       Remove all vehicle extras

__Cargobob__ :

       Spawn cargobob
       Spawn magent
       Remove magnet

__Attach ramps__ :

       Type
       Front
       Rear
       Right
       Left
       Attach
       Delete
__Vehicle weapons__ :

       Bullet type
       Bullet speed
       Guided
       Take responsibility
       Vehicle weapons key
       Enabled

__Vehicle movement__ :

       Vehicle jump
       Basic fly vehicle
       Basic fly speed
       Precise fly vehicle

__Vehicle speed__ :

       Speed vehicle
        Speed (Number)

__Boosting__ :

       Horn boost
       Horn boost speed
       Infinite boost
__Force__ :

       Brake force
       Downforce
       Lower ride height

__Autodrive__ :

       Auto drive
       Autodrive speed

__Drifting__ :

       Drift
       Drift amount
       Drift key

__Limits__ :

       Bypass max speed
       Limit vehicle speed

__Misc__ :

       Bike crate rider
       Wheelie
       Drive on walls
       Drive on water

__Vehicle acrobatics__ :

       Front flip
       Back flip
       Kick flip
       Heel flip
       Bunny hop
       Slingshot

__Vehicle Particles__ :

       Particle type
       Particle size
       Front left wheel
       Front right wheel
       Rear left wheel
       Rear right wheel
       Exhaust
       Enable vehicle particles
`,
`
__Vehicle doors__ :

       Open door
       Close door
       Delete door
       Lock doors
       Unlock doors

__Vehicle multipliers__ :

       RPM
       Light
       Torque
       Acceleration
       Brake
       Suspension

__General__ :

       Vehicle Godmode
       Auto repair
       Vehicle Invisibility
       Keep engine on
       Seatbelt
       Fix vehicle
       Delete vehicle

__Modify Vehicle__ :

       Auto flip
       Vehicle no collisions
       Phase through vehicles
       Ground to earth

__Misc__ :

       Clone vehicle

__Visuals__ :

       FIB numberplate
       Onscreen speedometer
       Numberplate speedometer
       Rainbow paint
       Wheel smoke cycle
       Wash
       Dirty
       Burn Vehicle shell
       Opacity

__General__ :

       Vehicle Godmode
       Auto repair
       Vehicle Invisibility
       Keep engine on
       Seatbelt
       Fix vehicle
       Delete vehicle

__Modify Vehicle__ :

       Auto flip
       Vehicle no collisions
       Phase through vehicles
       Ground to earth

__Misc__ :

       Clone vehicle

__Visuals__ :

       FIB numberplate
       Onscreen speedometer
       Numberplate speedometer
       Rainbow paint
       Wheel smoke cycle
       Wash
       Dirty
       Burn Vehicle shell
       Opacity
`,
`
**Spawn**

_Vehicle_

__Spawner settings__ :

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

__Color__ :

        Do not spawn with custom colors
        Default primary vehicle color
        Default secondary vehicle color

__Manage spawned vehicles__ :

       (vehicles listed here)

__Input Vehicle name__ :

        (Name goes here to spawn)

__Vehicles__ :

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

__Bikes__ :

       Motorcycle
       Cycle

__Flying__ :

       Planes
       Helicopters

__Misc__ :

       Trains
       Trailer
       Utility
`,
`
**Ped**

__Spawner settings__ :

        Spawn invincible
        Spawn with blip
        Spawn with particles
        Spawn with information

__Manage spawned peds__ :

       (Spawned peds here)

__Input ped name__ :

       (name of ped to be spawned)

__Peds__ :

       (All peds in GTA listed here)

**Object** :

__Spawner Settings__ :

       Spawn object with blip
       Spawn with particles
       Spawn with information

__Manage spawned objects__ :

       (Spawned objects go here)

__Input object name__ :

       (Name of object to be spawned)

__Objects__ :

       (All object in GTA listed here)

**Saved vehicle loading**

__Load XML vehicles__ :

       Delete last creation
        Spawn objects with collision

__Load json vehicles__ :

        (json vehicles listed here)

__Load INI vehicles__ :

        Delete last creation

__Map mods__ :

        Unload map mods
        (map mods listed here)
                       
__Spawn Editor__ :

        Save current creation
        Clear spawned objects
        Spawner mode

__Teleport__ :

        Teleport to waypoint
        Waypoint hotkey

__Custom saved locations__ :

       Save current location
`,
`
__Load custom locations__ :

       (Saved locations are here)

__Locations__ :

        Teleport transition

__Online__ :

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

__Landmarks__ :

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

__Inside__ :

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

__Story mode locations__ :

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
`,
`
__Inside__ :

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

__Story mode locations__ :

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

__Glitched locations__ :

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

__IPL Locations__ :

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

__Blips__ :

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

__Vehicle__ :

        Nearest car(become driver)
        Nearest car(any free seat)
        Teleport to last driven vehicle
        Teleport to personal vehicle

__Directional__ :

        Teleport forward
        Teleport up
`,
`
**World**

__VFX engine__ :

        Reset VFX settings
        Load VFX settings
        Save VFX settings

__Traffic light VFX__ :

        Reset traffic lights VFX
        Load traffic lights VFX settings
        Save traffic lights VFX settings    
        Traffic light red (Can change color here)
        Traffic light orange (Can change color here)
        Traffic light red (Can change color here)
        Traffic pedestrian red
        Traffic pedestrian green

__Vehicle VFX__:

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

__Neon__ :


        Neon intensity
        Neon radius
        Neon extended sides
        Neon extended front
        Neon falloff exponenet
        Neon clipping pane height

__Train VFX__ :

        Reset trains VFX
        Load trains VFX Settings
        Save trains VFX settings
        Trains color intensity
        Trains color

__Tone mapping VFX__ :

        Reset tone mapping VFX
        Load tone mapping VFX settings
        Save tone mapping VFX Settings

__Equation__:

       Day
       Night

__Day__ :

       Day filmic A
       Day filmic B
       Day filmic C
       Day filmic D
       Day filmic E
       Day filmic F
       Day filmic W
       Day exposure

__Night__ :

       Night filmic A
       Night filmic B
       Night filmic C
       Night filmic D
       Night filmic E
       Night filmic F
       Night filmic W
       Night exposure
`,
`
__Corona VFX__ :

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

__Distant lights VFX__ :

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

__Rain puddles VFX__ :

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
            
__Sky VFX__ :

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
`,
`
__Traffic Manager__ :

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

__Pedestrian manager__ :

       Use ped pools(bigger range)
       Ped ESP
       Kill peds
       Clone peds
       Delete peds
       Shrink peds
       Enlarge peds
       Enlarge peds
       Launch peds

__Tasks__ :

       Clear ped tasks
       Peds jump
       Peds cower
       Peds hands up
       Peds wander
       Peds come to me

__Weather__ :

       Clouds (Type)
       Lightning storm
       Meteor shower
       Rain intensity

__Weather types__ :

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

__Waypoint__ :

       Explode
       Money drop
       Send police
       Auto drive to waypoint
       Stop auto drive

__Time__ :

       Add hour
       Remove hour
       Freeze time
       Sync with system time

__Water__ :

       Turn off ocean
       Clear water
       Wave intensity

__Water tune__ :

       Ripple scale
       Ocean Foam scale
       Specular Falloff

__Density__:

       Ped density
       Traffic density

       _Clear Area_

       Clear radius
       Clear area of everything
       Clear area of police
       Clear area of objects
       Clear area of vehicles
       Clear area of peds

__Misc__ :

       Kick all nearby from vehicles
       Teleport all nearby vehicles to sea
       Timescale
       Road slipperiness
       Gravity
       Blackout
       Ground snow
       Wind speed
`,
`

`];
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

        const backwards = msg.createReactionCollector(backwardsFilter, { time: 5400000 });
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 5400000 });

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
    
};
  
// Break

if (message.content.toLowerCase() === 'impulse troubleshoot'){
  message.delete()
  message.channel.send(`Looking for troubleshooting solutions <a:Loading:705280596217430019>
${message.author} Please stand by`)
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
        let pages = [`**__If you find yourself with an Infinite Loading Screen while trying to load into online, try the following steps__** :

\`Step 1: Load into story mode and inject the menu.
Step 2: Join a solo online session
Step 3: Use the session starter to find a public lobby
Step 4: Script host kick anyone in that lobby whilst in the clouds\``,
`
**__If you want to change session__**

\`use Impulse's Session Starter!\``,
`
**__failed to find OEURI__** :

\`Issue on steam version only that can be ignored(its RID related and can intefer with rid spoofing)\``,
`
**__If you can't receive CEO Invites__**

\`disable your "Kick" Protection under Protection --> Script Events --> Kicks\``,
`
**__Gifting Vehicles__** :

\`Target must have a full garage, spawn the car with "Gift Vehicle" enabled, then let the player swap one car of the full garage with the gifted car. Beware that those cars cannot be sold.\``,
`
**__Crash Troubleshooting__** :

\`1. Check if you have the newest Impulse Version. If you aren't sure, redownload the files on www.impulse.one/

2. Check your Graphics Card Driver as those are a common reason for crashing.

3. Try deleting your Impulse Folder (Documents/Impulse). An alternative is just to rename your existing Impulse Folder.

4. Make sure that you have a clean GTA Install, delete every file that isnt from GTA V.

5. Close Overlays for example Discord, see if that changes anything.

6. Make sure you have your Window Settings on "Borderless" or "Windowed"

7. Make sure you inject in Singleplayer when using Xenos!\``,
`
**__For auth errors, saying something along the lines of 'failed to connect to auth server', please try the following solutions__** ;

\`- Check you are downloading/using newest versions 1.0.5 (Essential) or 1.1.5 (Standard/VIP) You may need to clear the cache/history in 
 browser, to remove old version, as they can remain in your system memory.

- If you use a VPN, try to change servers and login again.

- Restart your router, PC, and/or release your current IP using CMD. (https://www.tp-link.com/us/support/faq/840/)\``,
`
**__Manual Troubleshooting__** :

\`1. Make sure that you use the latest version of Impulse! Redownload files if necessary on https://impulse.one/download.php
2. Try both ways of injecting (Auto-Injector & Xenos)
3. If you have trouble gameplay-wise, try to disable some Script Protections that suit your problem!
For example: I can't receive any Invites to other players' CEO --> Disable the "Invites" Protection under Protection --> Script Protection\``,
`
\`Steam verify integrity of game files tutorial 
https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335\`
`];
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

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 5400000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 5400000 });

      backwards.on('collect', r => {
        if (page === 1) return;
        page--;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Page ${page} of ${pages.length}`);
        msg.edit(embed)
        r.users.remove(r.users.cache.filter(u => u === message.author).first());
      })

      forwards.on('collect', r => {
        if (page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Page ${page} of ${pages.length}`);
        msg.edit(embed)
        r.users.remove(r.users.cache.filter(u => u === message.author).first());
      
    })});
  });
    });
  });
}

// helper end

})


bot.login(token);
