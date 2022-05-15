import DiscordJS, { Intents, Message } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()


const client = new DiscordJS.Client({
 intents: [
Intents.FLAGS.GUILDS,
Intents.FLAGS.GUILD_MESSAGES
 ]
})
client.on('ready', () => {
    console.log('The bot is ready!')
    
    //guild
    //global

    const guildId = '769242017677967370'
  const guild = client.guilds.cache.get(guildId)
  let commands


  if (guild){
      commands = guild.commands
  } else {
      commands = client.application?.commands
  }

  commands?.create({
      name: 'ping',
      description: 'Replies with pong.',
  })
})
client.on('messageCreate', (message) => {
    if (message.content === 'ping'){
        message.reply({
            content: 'pong',
        })
    }
})



client.login(process.env.TOKEN)

