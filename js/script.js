// ***********************************************************
// SIMON SAYS
// ***********************************************************

// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

$(document).ready( function() {
    // Array che racchiude i 5 numeri casuali generati dal computer, verrà riempito attraverso la generazione degli stessi nel ciclo for
    var numbers = [];
    // Genero i 5 numeri casuali che l'utente deve ricordare; li stampo nell'alert su schermo e li aggiungo nell'array vuoto che ho creato in precendenza
    for (var i = 0; i < 5; i++) {
        var  numeriComputer = randomNumbers(1, 100);
        numbers.push(numeriComputer);

    }
    alert('I numeri casuali da ricordare sono: ' + numbers);
    console.log(numbers);

    // COUNTDOWN
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