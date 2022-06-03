function lastUpdated (note) {
    let updatedDate = note.Updated*1000
    let currentDate = new Date()*1000
    let timedifference = (currentDate/1000) - (updatedDate/1000)
    let seconds = Math.round(timedifference/1000)
    let minutes = Math.round(seconds/60)
    let hours = Math.round(minutes/60)
    let days = Math.round(hours/24)
    let weeks = Math.round(days/7)
    let months = Math.round(weeks/4)
    let years = Math.round(months/12)

    if(timedifference >= 0 && timedifference <= 29000) {
        if(timedifference >= 0 && timedifference <= 60000) {
            let seconds = Math.round(timedifference/1000)
            return `Last Updated  ${seconds} seconds ago`
    }
}
else if(timedifference >= 60001 && timedifference <= 3600000) {
    return `Last Updated ${minutes} minutes ago`
}

else if(timedifference >= 3600001 && timedifference <= 86400000) {
    return `Last Updated ${hours} hours ago`
}

else if(timedifference >= 86400001 && timedifference <= 604800000) {
    return `Last Updated ${days} ago`
}

else if(timedifference >= 604800000 && timedifference <= 2419200000) {
    return `Last Updated ${weeks} weeks ago`
}

else if(timedifference >= 2419200001 && timedifference <= 29030400000) {
    return `Last Updated ${months} months ago`
}


else if(timedifference >= 29030400001) {
    return `Last Updated ${years} years ago`
}


}