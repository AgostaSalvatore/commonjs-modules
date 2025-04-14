//definisco la funzione con i parametri firstName e lastName
function person(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

//esporto la funzione
module.exports = person;