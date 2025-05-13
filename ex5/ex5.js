/* 🏆 Snack 5
Crea una funzione stampaOgniSecondo con setInterval.
Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

 */

function stampaOgniSecondo(ms) {
    return function () {
        setInterval(()=> {
            console.log("è passato un secondo");
            
        }, ms);
    };
}

const passato1Secondo = stampaOgniSecondo(1000);
passato1Secondo();

/* attenzione, bisogna passare il messaggio non il tempo */