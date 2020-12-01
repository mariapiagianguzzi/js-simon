/* Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati. */


/* CREO UNA VARIABILE DI NUMERI CASUALI CHE IL PC DEVE GENERARE DEI NUMERI RANDOM */

var numeri = [67, 43, 3, 78, 12]; 

 /* CON MATH RANDOM IL PC GENERA 5 NUMERI CASUALI */
alert ("I numeri casuali sono..." + numeri);

/* ALL'INTERNO DELLA FUNZIONE CREO LE VARIAVILI DOVE L'UTENTE INSERIRà I NUMERI APPENA VISTI */
var userNumber = setInterval(myFunction, 3000);
var userNumber = prompt("inserisci un numero alla volta");
var userNumber = prompt("inserisci un numero alla volta");
var userNumber = prompt("inserisci un numero alla volta");
var userNumber = prompt("inserisci un numero alla volta");
var userNumber = prompt("inserisci un numero alla volta");

function myFunction() {
    
    
} 




