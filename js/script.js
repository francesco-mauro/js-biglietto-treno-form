// alert("Ciao")


// 1. Chiede all'utente il numero di chilometri che vuole percorrere e la sua età

const chilometri = prompt("Quanti chilometri vuoi percorrere?"); //String
const eta = prompt("Quanti anni hai?"); //String
console.log(chilometri, typeof chilometri);
console.log(eta, typeof eta);

// 2. Converte le in numeri i valori "string" inseriti dall'utente

const chilometriNumber = parseInt(chilometri); //Number
const etaNumber = parseInt(eta); //Number
console.log(chilometriNumber, typeof chilometriNumber);
console.log(etaNumber, typeof etaNumber);

if (isNaN(chilometriNumber) === false && isNaN(etaNumber) === false && chilometriNumber > 0 && etaNumber > 0) {
    //possiamo porcedere al calcolo

    // 3. Calcola il prezzo base del biglietto

    // Costo al km
    const kmCost = 0.21; //Number
    console.log(kmCost, typeof kmCost);


    let standardPrice = chilometriNumber * kmCost; //Number
    console.log(standardPrice, typeof standardPrice);


    // 4. Applica gli sconti

    let finalPrice = ""; //Number
    if (etaNumber < 18) {
        // Sconto del 20%
        finalPrice = standardPrice - (standardPrice * 0.2);
    } else if (etaNumber > 65) {
        // Sconto del 40%
        finalPrice = standardPrice - (standardPrice * 0.4);
    } else {
        // No scont
        finalPrice = standardPrice;
    }

    console.log(finalPrice, typeof finalPrice);


    // 5. Formatta il prezzo finale in modo "umano"
    let fixedPrice = finalPrice.toFixed(2);

    // 6. Mostra il prezzo finale all'utente
    alert("Il prezzo del tuo biglietto è: €" + fixedPrice);
    document.getElementById("result").innerHTML = "€ " + fixedPrice;

} else {
    // Se almeno uno dei valori inseriti non è valido, mostra un messaggio di errore
    alert("Hai inserito dei valori non validi. Si prega di inserire solo numeri per entrambi i campi.");


}
