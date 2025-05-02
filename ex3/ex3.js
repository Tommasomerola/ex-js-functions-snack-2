/* 🏆 Snack 3
Crea una funzione eseguiOperazione
Definisci una funzione eseguiOperazione che accetta tre parametri: 
due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri. */

function eseguiOperazione(a, b, operatore) {
    return operatore(a, b);
  }
  

const sottrazione = function (a, b){
    return a - b;
}

console.log (eseguiOperazione (32, 5, sottrazione))

const somma = (a, b) => a+b;

console.log (eseguiOperazione (34, 6, somma))

