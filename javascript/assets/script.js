/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

console.log("------------- Esercizio 1 ------------");

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

console.log("------------- Esercizio 2 ------------");

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log(pets.sort());

console.log("------------- Esercizio 3 ------------");

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log(pets.reverse());

console.log("------------- Esercizio 4 ------------");

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let primoElemento = pets.splice(0, 1)[0];
pets.push(primoElemento);
console.log(pets);

console.log("------------- Esercizio 5 ------------");

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

console.log(cars);

for (i = 0; i < cars.length; i++) {
  cars[i].licenseplate = "AF302GN" + i;
}

console.log(cars);

console.log("------------- Esercizio 6 ------------");

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

let newObj = {
  brand: "Toyota",
  model: "GT86",
  color: "white",
  trims: ["sport", "tt", "limited"],
  licenseplate: "dd000xx",
};

cars.push(newObj);

console.log(cars);

console.log("------------- Esercizio 7 ------------");

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}

console.log(justTrims);

console.log("------------- Esercizio 8 ------------");

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

console.log("------------- Esercizio 9 ------------");

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let o = 0;

while (o < numericArray.length) {
  console.log(numericArray[o]);
  if (numericArray[o] === 32) {
    break;
  }
  o++;
}

console.log("------------- Esercizio 10 ------------");

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

let newCharacters = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      newCharacters.push(1);
      break;
    case "b":
      newCharacters.push(2);
      break;
    case "c":
      newCharacters.push(3);
      break;
    case "d":
      newCharacters.push(4);
      break;
    case "e":
      newCharacters.push(5);
      break;
    case "f":
      newCharacters.push(6);
    case "g":
      newCharacters.push(7);
    case "h":
      newCharacters.push(8);
      break;
    case "i":
      newCharacters.push(9);
      break;
    case "l":
      newCharacters.push(10);
      break;
    case "m":
      newCharacters.push(11);
      break;
    case "n":
      newCharacters.push(12);
      break;
    case "o":
      newCharacters.push(13);
      break;
    case "p":
      newCharacters.push(14);
      break;
    case "q":
      newCharacters.push(15);
      break;
    case "r":
      newCharacters.push(16);
      break;
    case "s":
      newCharacters.push(17);
      break;
    case "t":
      newCharacters.push(18);
      break;
    case "u":
      newCharacters.push(19);
      break;
    case "v":
      newCharacters.push(20);
      break;
    case "z":
      newCharacters.push(21);
      break;
  }

  console.log(newCharacters);
}
