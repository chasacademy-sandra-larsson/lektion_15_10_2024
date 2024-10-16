/* Gissningslek! Skriv in ett tal mellan 1 och 100. Finns en "secret"-tal som man ska komma nära.

=> om det är samma som det hemliga talet => Skriv ut "Grattis!"
=> om talet mindre än 10 ifrån talet => Skriv ut "Close but no cigar!"
=> ananrs => Skriv ut "Not even close" */
debugger;
const secret = 45;
const input = 59;

let diff = secret - input;

if(diff < 0) {
    diff = diff * -1;
}

//console.log(typeof input)

if(secret === input) {
    console.log("Grattis!");
} else if(diff < 10 && diff > 0) {
    console.log("Close, but no cigar!");
} 
else {
    console.log("Not even close!");
}




