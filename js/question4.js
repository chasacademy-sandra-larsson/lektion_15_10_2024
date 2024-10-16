/* En enkel valutaomvandlare /

/* Nuvarande rates som vi egentligen skulle läsa från en databas */
/* 100 SEK is 11.00 USD */
/* 100 SEK is 9.40 Euro */
/* 1 SEK is 0.094 EUR */
 

/* Skriv en funktion currencyConverter(amount, currency) */

function convertCurrency(amount, currency) {
    const sekToUSD = 0.11;
    const sekToEUR = 0.094;
    let result;

    if(currency === "EUR") {
        result = amount * sekToEUR;
        console.log(amount + " SEK är " + result + "EUR") ; // Klassisk strängkonkatering + 
        console.log(`${amount} SEK är ${result} EUR`) ; // Template literals ``- backtick
    } else if(currency === "USD") {
        result = amount * sekToUSD;
        console.log(amount + " SEK är " + result + "USD") ;
    } else {
        console.log("Currency not supported");
    }

}

convertCurrency(200000, "EUR");
convertCurrency(200000, "USD");