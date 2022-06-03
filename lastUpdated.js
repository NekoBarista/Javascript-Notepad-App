function lastUpdated (note) {
    console.log(note)
    let updatedDate = Date.parse(note.Updated)*1000
    let currentDate = new Date()*1000
    let timedifference = (currentDate/1000) - (updatedDate/1000)
    console.log(updatedDate)
    console.log(timedifference)
    console.log(currentDate)
    if(timedifference >= 0 && timedifference <= 29000) {
        return `Last Updated a few seconds ago`
}
else if(timedifference >= 30000 && timedifference <= 40000) {
    return `Last Updated around 30 seconds ago`
}

else if(timedifference >= 50000 && timedifference <= 60000) {
    return `Last Updated less than one minute ago`
}

else if(timedifference >= 1000 && timedifference <= 400000) {
    return `Last Updated around five minutes ago`
}

else if(timedifference >= 4000 && timedifference <= 700000) {
    return `Last Updated around 10 minutes ago`
}

else if(timedifference >= 600000 && timedifference <= 600000) {
    return `Last Updated more than 10 minutes ago`
}

else if(timedifference >= 600000 && timedifference <= 1900000) {
    return `Last Updated around 30 minutes ago`
}

else if(timedifference >= 1900000 && timedifference <= 370000000) {
    return `Last Updated less than one hour ago`
}

else if(timedifference >= 370000000 && timedifference <= 720000000) {
    return `Last Updated more than one hour ago`
}

else if(timedifference >= 720000000 && timedifference <= 216000000) {
    return `Last Updated several hours ago`
}

else if(timedifference >= 216000000 && timedifference <= 86400000) {
    return `Last Updated within the last day`
}

else if(timedifference >= 86400000 && timedifference <= 360000000) {
    return `Last Updated more than one day ago`
}

else if(timedifference >= 259200000 && timedifference <= 518400000) {
    return `Last Updated several days ago`
}

else if(timedifference >= 518400000 && timedifference <= 604800000) {
    return `Last Updated within the last week`
}

else if(timedifference >= 604800000 && timedifference <= 907200000) {
    return `Last Updated more than one week ago`
}

else if(timedifference >= 907200000 && timedifference <= 1814400000) {
    return `Last Updated several weeks ago`
}

else if(timedifference >= 1814400000 && timedifference <= 2419200000) {
    return `Last Updated within the last month`
}

else if(timedifference >= 2419200000 && timedifference <= 2937600000) {
    return `Last Updated more than one month ago`
}

else if(timedifference >= 2,937,600,000 && timedifference <= 7257600000) {
    return `Last Updated several months ago`
}

else if(timedifference >= 7257600000 && timedifference <= 31536000000) {
    return `Last Updated within the last year`
}

else if(timedifference >= 31536000001) {
    return `Last Updated more than one year ago`
}


}