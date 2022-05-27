const {Client, MessageEmbed} = require('discord.js');
const client = new Client();
let embed = new MessageEmbed();
//Este es el tóken de mi bot
const TOKEN = 'OTc5NzU5MTQ3OTk2Mjg2OTc2.G7IEaP.FrKtaa_-6KckKuKQGQy5Zi8floSnKU6tA8n-Y0';
//Array donde guardar los turnnos
let turnos = [];

//Función para preparar el mensaje de la lista
const prepareEmbed = turns =>{
    embed = new MessageEmbed();
    embed.setTitle('Turnos:');
    embed.setColor('RANDOM');
    for(let i = 0; i<turnos.length;i++){
        embed.addField(i + 1,turns[i],true)
    }
}

//Mensaje de conexión establecida
client.on('ready', ()=> {
    console.log(`Bot listo como ${client.user.tag}` );
});

client.on('message', message => {

    //Añadir un turno a la lista
    if(message.content === '!add-turn'){
        if(turnos.includes(message.author)){
            message.reply("Ya estás en la lista de turnos \n ¡No seas ansias!")
        }
        else{
            turnos.push(message.author);
            prepareEmbed(turnos);
            message.channel.send(embed);
        }
        
    }

    //Borrar el turno del usuario de la lista
    if(message.content === '!drop-my-turn'){
        if(turnos.includes(message.author)){
            turnos = turnos.filter(turno => turno!=message.author)
            
            if(turnos.length === 0){
                message.reply("La lista de turnos está vacía");
            }
            else{

                prepareEmbed(turnos);
                message.channel.send(embed);
            }
        }
    }

    //Borrar todos los turnos de la lista (Solo los profes pueden hacerlo)
    if(message.content === '!reset-turns'){
        if(message.member.roles.cache.map(rol =>  rol.name ).includes('TeachTeam')){
            turnos = [];
            message.reply("Se ha vaciado la lista de turnos");
        }
        else{
            message.reply("Vuelve a intentarlo cuando seas profe")
        }
    }

    //Borrar el primer turno de la lista (Solo los profes pueden hacerlo)
    if(message.content === '!drop-first-turn'){
        
        if(message.member.roles.cache.map(rol =>  rol.name ).includes('TeachTeam')){
            turnos.shift();
            if(turnos.length === 0){
                message.reply("La lista de turnos está vacía");
            }
            else{
                prepareEmbed(turnos);
                message.channel.send(embed);
            }
        }
        else{
            message.reply("Vuelve a intentarlo cuando seas profe")
        } 
    }
    
    //Mostrar todos los turnos
    if(message.content === '!show-turns'){
        prepareEmbed(turnos);
        message.channel.send(embed);
    }
});

//Utilizo el token de mi bot para conectarlo al servidor de discord
client.login(TOKEN);

