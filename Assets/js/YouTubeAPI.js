async function execute(){

const responce = await fetch('https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=UCVrPcuqv1yK6-ep1-FPUTQA&key=AIzaSyDSik2kwS_9D6bIBYVy2gI4ZI3OuVamcC4')
const responceJSON = await responce.json()

document.getElementById('YViewStat').innerHTML = responceJSON.items[0].statistics.viewCount
document.getElementById('YSubStat').innerHTML = responceJSON.items[0].statistics.subscriberCount
document.getElementById('YVidStat').innerHTML = responceJSON.items[0].statistics.videoCount

}

execute()