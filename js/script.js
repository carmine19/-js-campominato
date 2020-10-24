/*
Il programma deve generare 16 numeri compresi tra 1 e 100: queste saranno le mine.
    Dopodiché, il programma deve chiedere all'utente un numero alla volta e verificare se il numero indicato dall'utente è una mina oppure no.
    Se l'utente becca una mina, il gioco finisce, mentre, se il numero non corrisponde ad una mina, il gioco prosegue e il programma chiede all'utente un nuovo numero.
    Alla fine della partita, il programma comunica all'utente il suo punteggio, cioè quanti numeri è riuscito ad inserire prima che il gioco finisse*/


// creo un array dove inserire i numeri che dovrò generare
var numeri_mine = [];

var scelte_utente = [];

// genero i 16 numeri da 1 a 100
while (numeri_mine.length < 16) {

    var minaRandom = numeriRandom(1, 100);
    // verifico se la bomba è già presente nell'array con la funzione include
    // se è presente la scarto in modo da ottenere numeri diversi
    if (numeri_mine.includes(minaRandom) == false) {
        numeri_mine.push(minaRandom);
    }
}

console.log(numeri_mine)


// creo una variabile sentinella in modo da poter uscire dal ciclo
var bomba_trovata = false;


// chiedo al utente alemno una volta un numero per vedese se è presente nelle mine
do {

    var mina_utente = 3;
    scelte_utente.push(mina_utente);

    // se è presente gli dico che ha perso
    if (numeri_mine.includes(mina_utente)) {
        console.log('hai perso')
    } else {
        console.log('continua a giocare')
    }

} while (bomba_trovata === false && scelte_utente < 84)


// se l'utente raggiunge le posizioni massime gli comunico che ha vinto
if (scelte_utente.length === 84) {
    alert('hai vinto totalizzando ' + scelte_utente.length + ' punti!');
}


/* BLOCCO FUNZIONI */
// creo una funzione per generare i numeri random da 1 a 100
function numeriRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}