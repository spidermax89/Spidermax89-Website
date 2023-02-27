async function execute(){

    const responce = await fetch('https://api.lanyard.rest/v1/users/863297546813571082')
    const responceJSON = await responce.json()

    document.getElementById('DiscordPfp').setAttribute('src', `https://cdn.discordapp.com/avatars/863297546813571082/${responceJSON.data.discord_user.avatar}`)
    document.getElementById('DiscordTag').innerText = `${responceJSON.data.discord_user.username}#${responceJSON.data.discord_user.discriminator}`
    
    var Activity = responceJSON.data.activities[0]

    if (Activity.state){
        Activity = Activity.state
    } else if (Activity.name){
        Activity = `🎮 Playing ${Activity.name}`
    } else{
        Activity = 'Nothing/Sleeping 💤'
    }

    if (responceJSON.data.activities[0].details != null){
        document.getElementById('DiscordDetails').innerText = responceJSON.data.activities[0].details
    } else{document.getElementById('DiscordDetails').style.display = 'none'}

    if (responceJSON.data.activities[0].id == '37e226101a188e62'){
        document.getElementById('DiscordStatusName').style.marginTop = '0px'
        document.getElementById('DiscordStatusName').style.fontWeight = '200'
        document.getElementById('DiscordListen').style.display = 'block'
    }

    document.getElementById('DiscordStatusName').innerText = Activity

    var apperance = responceJSON.data.discord_status
    if(apperance == 'online'){
        apperance = '#3BA55C'
    } else if (apperance == 'dnd'){
        apperance ='#ED4245'
    } else if (apperance == 'offline'){
        apperance = '#747F8D'
    } else if (apperance == 'idle'){
        apperance = '#FAA61A'
    } else{
        apperance = '#593695'
    }

    document.getElementById('DiscordPfp').style.border = `4px solid ${apperance}`
}

execute()

setInterval(execute, 10000)