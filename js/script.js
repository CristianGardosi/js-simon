// ***********************************************************
// SIMON SAYS
// ***********************************************************

// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

$(document).ready( function() {

    var numbers = [];


    for (var i = 0; i < 5; i++) {

        var  numeriComputer = randomNumbers(1, 100);
        numbers.push(numeriComputer);
    }
    console.log(numbers)

    alert('I numeri casuali da ricordare sono: ' + numeriComputer);

    // Countdown
    var display = $('.countdown');
    var seconds = 30;

    var countdown30Sec = setInterval( function() {
        if (seconds === 0) {
            display.text('Tempo scaduto! Ricordi i cinque numeri?')
        } else {
            display.text(seconds);
            seconds--;
        }
    }, 1000);





});

// FUNZIONI UTILITIES
function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1 ) ) + min;
}