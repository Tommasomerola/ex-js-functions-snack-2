/* 🏆 Snack 7
Crea una funzione che ferma un timer dopo un certo tempo
Scrivi una funzione eseguiEferma che accetta un messaggio, 
un tempo di avvio e un tempo di stop. Il messaggio deve essere 
stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
 */

function eseguiEferma(messaggio, tempoAvvio, tempoStop) {
    const intervalloID = setInterval(()=> {
        console.log(messaggio);
        
    }, tempoAvvio)

    setTimeout(()=> {
        clearInterval(intervalloID);
        console.log("Timer fermato!!!");
        
    }, tempoStop)
}

eseguiEferma("ciao", 1000, 5000)