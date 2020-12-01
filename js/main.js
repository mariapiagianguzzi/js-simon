/* Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati. */


/* CREO UNA VARIABILE DI NUMERI CASUALI CHE IL PC DEVE GENERARE DEI NUMERI RANDOM */

var numeri = []; 
console.log(numeri);

/* CON MATH RANDOM DENTRO UN CICLO WHILE IL PC GENERA 5 NUMERI CASUALI, USO INCLUDES PERCHé DETERMINA SE UN DETERMINATO ELEMENTO è INCLUSO NELLA ARREY */
i = 0;
while (numeri.length < 5 ) {
  var numeroRandom = Math.floor(Math.random() * 100 ) + 1;

  if (numeri.includes(numeroRandom)) {
  } else {
    numeri.push(numeroRandom);
  }

  i++
} 









