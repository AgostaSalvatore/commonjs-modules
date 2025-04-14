//inizializzo le variabili e vado a recuperare le funzioni
const person = require('../names/modules/functions');
const hobbiesList = require('../hobbies/modules/functions');

//inizializzo la funzione senza parametri
function people(){
    return {
        fullname: person('Mario', 'Rossi'),
        hobbies: hobbiesList('football', 'gaming', 'reading')
    }
}
console.log(people());
