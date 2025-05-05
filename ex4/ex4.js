/* 🏆 Snack 4
Crea un generatore di funzioni creaTimer
Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!". */

function creaTimer(ms) {
    return function () {
        setTimeout(()=> {
            console.log("Tempo Scaduto!!!");
            
        }, ms);
    };
}

const timer5Secondi = creaTimer(5000);
timer5Secondi();