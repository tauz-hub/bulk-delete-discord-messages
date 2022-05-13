
import { Client, Intents, Permissions } from 'discord.js';
import fs from 'fs'
import 'dotenv/config';
const TOKEN = process.env.TOKEN

const intents = new Intents();

intents.add(
  Intents.FLAGS.GUILD_PRESENCES,
  Intents.FLAGS.GUILD_MEMBERS,
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.GUILD_BANS,
  Intents.FLAGS.DIRECT_MESSAGES,
  Intents.FLAGS.GUILD_MESSAGE_REACTIONS
);
const client = new Client({
  intents,
  partials: ['CHANNEL'],
});

const usuario = "454059471765766156"

client.on("ready", async (client) => {

  client.guilds.cache.get("836004917973614662").channels.cache.map(async channel => {
    if (channel.id == "877669073725562930") {
      if (channel.type == "GUILD_TEXT") {

        let countFinishedMessages
        let messageAnt;
        console.log("entrada")
        do {

          const codition = messageAnt ? { limit: 100, before: messageAnt } : { limit: 100 }
          const messages = (await channel.messages.fetch(codition)).map(message => message)

          let countFor = 1;
          countFinishedMessages = messages.length

          messages.forEach(async message => {

            if (message.author.id == usuario) {
              const messageLine = "mensagem enviada por  | " + message.author.tag + " | no chat | " + message.channel.name + " | enviada na data : " + new Date(message.createdTimestamp) + " | " + message.content + "\n"


              fs.readFile("MensagemApagadasDoUsuario.json", function (err, content) {
                fs.appendFile("MensagemApagadasDoUsuario.json", messageLine, function (err) {

                })
              })
              if (countFor < 100) {
                try {
                  await message.delete()
                } catch (error) {
                  console.error(error)

                }


              }
            }
            if (countFor == 100) {
              messageAnt = message.id
            }
            countFor++
          })


        } while (countFinishedMessages > 99)
        console.log("finished")
      }
    }
  })

})

client.login(TOKEN)