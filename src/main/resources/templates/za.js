
var jsonClient = {
    id: 6,
    nom: "ilouse3",
    email: "ilyas@og.ma",
    adresse: "locean4"
}

fetch('http://localhost:8080/clients', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonClient)
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur HTTP, statut : ' + response.status);
        }
        console.log(response.status);
        return response.text();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Erreur lors de la requête :', error);
    });