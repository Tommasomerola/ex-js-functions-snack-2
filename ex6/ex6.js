/* 🏆 Snack 6
Crea un contatore automatico con setInterval
Definisci una funzione creaContatoreAutomatico che accetta
 un intervallo di tempo e restituisce una funzione che avvia 
 un setInterval, incrementando un contatore e stampandolo.

 */

 function creaContatoreAutomatico (interval) {
    return function () {
        let count = 0;

        setInterval(() => {
            count ++;
            console.log("contatore:", count);
            
        }, interval);
    };
 }

 const startTiimer = creaContatoreAutomatico(1000);
 startTiimer();