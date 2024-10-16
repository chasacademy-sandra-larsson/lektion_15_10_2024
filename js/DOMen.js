// ALlt i DOM:en ska först laddas
document.addEventListener("DOMContentLoaded", function () {

    // Referens till myParagraph
    const element = document.getElementById("myParagraph");
    

    // Eventlyssnare på formuläret
    const form = document.getElementById("myForm");
    form.addEventListener("submit", getFormValues);


    // Funktion som körs när man submittar formuläret
    function getFormValues(event) {
        event.preventDefault();

        let value1 = form["value1"].value;
        let value2 = form["value1"].value;

        console.log(value1, value2);
        element.textContent = value1;

    }


});



