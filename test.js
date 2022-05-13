
import { Client, Intents, Permissions } from 'discord.js';

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
const TOKEN = "OTEwNjIyODI3NjU1MzU2NDc4.GNTloM.6QBu9JBGC_8vJsxY-W6wymMMyXDXKpU6fCm-lY"

client.on("ready", client => {
  console.log(client.guilds.cache.get("836004917973614662").channels.cache.get("877669073725562930").messages.fetch("940049646305312819"))
})

client.login(TOKEN)