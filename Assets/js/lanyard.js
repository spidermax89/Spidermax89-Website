async function execute(){

    const responce = await fetch('https://api.lanyard.rest/v1/users/863297546813571082')
    const responceJSON = await responce.json()

    console.log(responceJSON)

    document.getElementById('DiscordPfp').setAttribute('src', `https://cdn.discordapp.com/avatars/863297546813571082/${responceJSON.data.discord_user.avatar}`)
    document.getElementById('DiscordTag').innerText = `${responceJSON.data.discord_user.username}#${responceJSON.data.discord_user.discriminator}`
    
    var Activity = responceJSON.data.activities[0]
    if (Activity == null) {Activity = 'Nothing/Sleeping 💤'} else{Activity = Activity.state}

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

    console.log(apperance)

}

execute()

setInterval(execute, 10000)