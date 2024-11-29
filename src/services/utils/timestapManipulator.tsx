function dateStringSeparator (timestamp: string) {
    /*timestamp = Wed Oct 23 2024 08:00:00 GMT+0200 (heure d’été d’Europe centrale)*/
    let date = timestamp.split(' ');

    let dayTitle = "Jour";
    switch (date[0]) {
        case "Mon": dayTitle = "Lundi"; break;
        case "Tue": dayTitle = "Mardi"; break;
        case "Wed": dayTitle = "Mercredi"; break;
        case "Thu": dayTitle = "Jeudi"; break;
        case "Fri": dayTitle = "Vendredi"; break;
        case "Sat": dayTitle = "Samedi"; break;
        case "Sun": dayTitle = "Dimanche"; break;
    }

    let day = date[2];

    let month = "Mois";
    switch (date[1]) {
        case "Jan": month = "Janvier"; break;
        case "Feb": month = "Février"; break;
        case "Mar": month = "Mars"; break;
        case "Apr": month = "Avril"; break;
        case "May": month = "Mai"; break;
        case "Jun": month = "Juin"; break;
        case "Jul": month = "Juillet"; break;
        case "Aug": month = "Août"; break;
        case "Sep": month = "Septembre"; break;
        case "Oct": month = "Octobre"; break;
        case "Nov": month = "Novembre"; break;
        case "Dec": month = "Décembre"; break;
    }

    let year = date[3];
    let time = date[4].substring(0, 5).replace(':', 'h');

    return [dayTitle, day, month, year, time];
}

export function getDatePretty(timestamp: string) {
    let date = dateStringSeparator(timestamp);
    return `${date[0]} ${date[1]} ${date[2]} ${date[3]} à ${date[4]}`;
}

export function getIntervalPretty(timestamp1: string, timestamp2: string) {
    let date1 = dateStringSeparator(timestamp1);
    let date2 = dateStringSeparator(timestamp2);
    if (date1[1] == date2[1] && date1[2] == date2[2] && date1[3] == date2[3]) {
        return `Le ${date1[1]} ${date1[2]} ${date1[3]} de ${date1[4]} à ${date2[4]}`;
    }
    return `Du ${date1[1]} ${date1[2]} ${date1[3]} à ${date1[4]} au ${date2[1]} ${date2[2]} ${date2[3]} à ${date2[4]}`;
}