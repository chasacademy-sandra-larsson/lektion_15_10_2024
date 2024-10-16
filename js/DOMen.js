// ALlt i DOM:en ska först laddas
document.addEventListener("DOMContentLoaded", function () {

    // Referens till myParagraph
    const element = document.getElementById("sum");

    // Referens till knappen
    const btn = document.getElementById("btn");
    btn.addEventListener("click", btnClicked);

    function btnClicked() {
        console.log("Button clicked");
    }
    

    // Eventlyssnare på formuläret
    const form = document.getElementById("myForm");
    form.addEventListener("submit", getFormValues);


    // Funktion som körs när man submittar formuläret
    function getFormValues(event) {
        event.preventDefault();

        let value1 = parseInt(form["value1"].value);
        let value2 = parseInt(form["value2"].value);

        console.log(typeof value1);
        console.log(typeof value2);

        let sum = value1 + value2;

        element.textContent = sum;

    }


});



