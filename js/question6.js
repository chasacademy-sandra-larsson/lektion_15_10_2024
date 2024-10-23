/* Du arbetar på Stockholm Maraton och du ska skriva ett program som lägger ihop två tider 
   på formatet "TT:MM:SS" */

const lopp1 = "01:01:15"; // Lopp1
const lopp2 = "01:15:59"; // Lopp2


const arrLopp1 = lopp1.split(":");
const arrLopp2 = lopp2.split(":");

const parsed1 = arrLopp1.map(function(time) {
    return parseInt(time);
})

const parsed2 = arrLopp2.map(function(time) {
   return parseInt(time);
})

// // Om sekunder är större än section
// let totalSeconds = parsed1[2] + parsed2[2];
// let totalMinutes = parsed1[1] + parsed2[1];
// let totalHours = parsed1[0] + parsed2[0];


// if(totalSeconds >= 60) {
//    totalMinutes += 1;
//    totalSeconds = totalSeconds % 60;
// }


// if(totalMinutes >= 60) {
//    totalHours += 1;
//    totalMinutes = totalMinutes % 60;
// }




// henriks lösning
const parsed1Secs = 3600*parsed1[0] + 60*parsed1[1] + parsed1[1];
const parsed2Secs = 3600*parsed2[0] + 60*parsed2[1] + parsed2[1];

let totTimeSec = parsed1Secs + parsed2Secs;

const totalHours = Math.floor(totTimeSec/3600);
totTimeSec -= 3600 * totalHours;
const totalMinutes = Math.floor(totTimeSec/60);
totTimeSec -= 60 * totalMinutes;
const totalSeconds = totTimeSec % 60;

console.log(`Den sammanlagda tiden är ${totalHours}: ${totalMinutes}: ${totalSeconds}`)
