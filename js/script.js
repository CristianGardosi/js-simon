// ***********************************************************
// SIMON SAYS NUMBERS
// ***********************************************************
// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.


// VAR DI SETUP
// Lista numeri random vuota che riempirò
randomNumbers = [];
// Tempo di attesa prima di chiedere i numeri all'utente
var waitingTime = 2000;

// GENERAZIONE NUMERI RANDOM UNIVOCI, utilizzo while perchè non so quante volte sarà necessario ripetere l'operazione al fine di non avere doppioni
while (randomNumbers.length < 5) {
    // Variabile che conterrà i miei 5 numeri casuali generati
    var generatedNumbers = randomNumber(1, 100);
    // Controllo univocità
    if (! randomNumbers.includes(generatedNumbers)) {
        randomNumbers.push(generatedNumbers);
    }
}
// Do i 5 numeri all'utente tramite un alert
alert(randomNumbers);

// LOGICA DI GIOCO
setTimeout(function () {
    // Variabile in cui colleziono i numeri che mi passa l'utente
    var userNumbers = [];

    while (userNumbers.length < 5) {
        var newUserNumber = parseInt( prompt( 'Inserisci ora il ' +  (userNumbers.length + 1) + '° numero') );

        while (isNaN(newUserNumber) || newUserNumber < 1 || newUserNumber >100) {
            newUserNumber = parseInt( prompt( 'Il valore inserito non è corretto! Riprova inserendo il ' +  (userNumbers.length + 1) + '° numero') );
        }
        // Controllo univocità prima del push
        if (! userNumbers.includes(newUserNumber) ) {
            userNumbers.push(newUserNumber);
        } else {
            alert('Il numero è già stato inserito, riprovare!')
        }
    }

    // RISULTATO GIOCO E LOGICA DI CONTROLLO
    // Var vuota da riempire con i numeri corretti inseriti dall'utente
    var rightNumbers = [];

    for (var i = 0; i < userNumbers.length; i++) {
        // Se la lista dei numeri casuali generata all'inizio include il/i numeri inseriti dall'utente li vado a pushare nella nuova var che ho creato
        if ( randomNumbers.includes(userNumbers[i]) ) {
        rightNumbers.push(userNumbers[i]);
        }
    }

    // Alert risultati
    alert('RISULTATI\n' + 
         'Lista numeri: ' + randomNumbers + 
         '\nLista utente: ' + userNumbers +
         '\nNumeri indovinati: ' + rightNumbers.length + ' nello specifico ' + rightNumbers);
         
}, waitingTime);







//FUNZIONI
// Random numbers in a interval
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
