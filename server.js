const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready" , () => {
  console.log("I am online")
})

client.on("message" , message => {
    if(message.content === "!ping"){
      return message.channel.send("pong")
  }
  if(message.content === "!beep")
    return message.channel.send("boop")
  }
          )