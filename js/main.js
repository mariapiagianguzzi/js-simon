/* Un alert espone 5 numeri casuali diversi.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati. */

/* CREO TRE VARIABILI VUOTE DI NUMERI CASUALI CHE IL PC DEVE GENERARE E L'UTENTE DEVE INSERIRE*/

var numeriPc = []; 
var userNumbers = [];
var numeriIndovinati = [];

/* CON MATH RANDOM DENTRO UN CICLO WHILE IL PC GENERA 5 NUMERI CASUALI, USO INCLUDES PERCHé DETERMINA SE UN DETERMINATO ELEMENTO è INCLUSO NELLA ARREY */
while (numeriPc.length < 5) {
  var numeroRandom = Math.floor(Math.random() * 100) + 1;
  if (!numeriPc.includes(numeroRandom)) {
    /* SE IL NUMERO RANDOM NON è INCLUSO NEL NUMERO PC ALLORA PUSH */
    numeriPc.push(numeroRandom);
  }
}
//console.log(numeriPc);

/* UN ALERT DICE ALL'ULTENTE DI RICORDARE I NUMERI CHE HA GENERATO IL PC */
alert("Ricorda questi numeri: " + numeriPc + " Tra 30 secondi scrivi i numeri");

/* CON IL METODO SETTIMEOUT CHIEDO ALL'UTENTE DI INSERIRE IN NUMERI  */

//Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
setTimeout(function () {
  for (var i = 0; i < 5; i++) {
    var numeroUtente = Number(prompt("Inserisci un numero"));
    userNumbers.push(numeroUtente);
  }

  //console.log(userNumbers);

  //Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
  for (let j = 0; j < 5; j++) {
    if (userNumbers.includes(numeriPc[j])) {
      numeriIndovinati.push(numeriPc[j]);
    }
  }
  //console.log(numeriIndovinati);
  alert("Hai ricordato " + numeriIndovinati.length + " numeri");
  alert("Ti sei ricordato i seguenti numeri: " + numeriIndovinati);
}, 30000);

