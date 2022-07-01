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
            return `Last updated  ${seconds} seconds ago`
    }
}
else if(timedifference >= 60001 && timedifference <= 3600000) {
    if (minutes <= 1) {
        return `Last updated ${minutes} minute ago`
        }
    
        else {
            return `Last updated ${minutes} minutes ago`
            }
}

else if(timedifference >= 3600001 && timedifference <= 86400000) {
if (hours  <= 1) {
        return `Last updated more than ${hours} hour ago`
        }
    
        else {
            return `Last updated more than ${hours} hours ago`
            }
}

else if(timedifference >= 86400001 && timedifference <= 604800000) {
    if (days <= 1) {
        return `Last updated more than ${days} day ago`
        }
    
        else {
            return `Last updated more than ${days} days ago`
            }
}

else if(timedifference >= 604800000 && timedifference <= 2419200000) {
    if (weeks  <= 1) {
        return `Last updated more than ${weeks} week ago`
        }
    
        else {
            return `Last updated more than ${weeks} weeks ago`
            }
}

else if(timedifference >= 2419200001 && timedifference <= 29030400000) {
    if (months  <= 1) {
        return `Last updated more than ${months} month ago`
        }
    
        else {
            return `Last updated more than ${months} months ago`
            }
}


else if(timedifference >= 29030400001) {
    if (years = 1) {
        return `Last Updated ${years} year ago`
        }
    
        else {
            return `Last Updated ${years} years ago`
            }
}


}