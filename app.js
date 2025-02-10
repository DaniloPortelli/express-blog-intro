// Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
// Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
// Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
// Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
// Testare su postman



//Richiamo le funzionalità di express
const express = require("express");

//Creo istanza dell'applicazione Express
const app = express()

//Creo porta su cui il server ascolterà le richieste
const port = 3000

//Utilizzo metodo express per poter accedere ad elementi statici
app.use(express.static("public"));

// Definiamo la prima rotta
app.get("/", (req, res) => {
    res.send("Server del mio blog")
})

// Definisco la rotta /bacheca
app.get("/bacheca", (req, res) => {
    
       const posts = [
            {
                titolo: "Ciambellone",
                contenuto: "Un soffice e delizioso ciambellone perfetto per ogni occasione. Facile da preparare e ideale per la colazione.",
                immagine: "imgs/ciambellone.jpeg",
                tags: ["dolce", "colazione", "soffice"]
            },
            {
                titolo: "Cracker alla Barbabietola",
                contenuto: "Cracker croccanti con un tocco di barbabietola. Perfetti come snack o accompagnamento a un antipasto.",
                immagine: "imgs/cracker_barbabietola.jpeg",
                tags: ["snack", "vegano", "barbabietola"]
            },
            {
                titolo: "Pane Fritto Dolce",
                contenuto: "Pane fritto dolce con una spolverata di zucchero a velo. Un classico che non delude mai!",
                immagine: "imgs/pane_fritto_dolce.jpeg",
                tags: ["dolce", "fritto", "tradizione"]
            },
            {
                titolo: "Pasta alla Barbabietola",
                contenuto: "Pasta fresca con un'incredibile salsa alla barbabietola. Un piatto unico e colorato per ogni pranzo.",
                immagine: "imgs/pasta_barbabietola.jpeg",
                tags: ["pasta", "barbabietola", "piatto unico"]
            },
            {
                titolo: "Torta Paesana",
                contenuto: "Una torta rustica che richiama i sapori della tradizione. Facile da preparare e ideale per una merenda in famiglia.",
                immagine: "imgs/torta_paesana.jpeg",
                tags: ["torta", "rustica", "tradizione"]
            }
        ]
        res.json(posts)
})

//Avviamo il server, mettendolo in ascolto sulla porta indicata, per far sì che funzioni dobbiamo avviarlo con npm start o watch
app.listen(port, () => {
    console.log("prova")
})


// const posts = [
//     {
//         titolo: "Ciambellone",
//         contenuto: "Un soffice e delizioso ciambellone perfetto per ogni occasione. Facile da preparare e ideale per la colazione.",
//         immagine: "https://www.example.com/ciambellone.jpg",
//         tags: ["dolce", "colazione", "soffice"]
//     },
//     {
//         titolo: "Cracker alla Barbabietola",
//         contenuto: "Cracker croccanti con un tocco di barbabietola. Perfetti come snack o accompagnamento a un antipasto.",
//         immagine: "https://www.example.com/cracker-barbabietola.jpg",
//         tags: ["snack", "vegano", "barbabietola"]
//     },
//     {
//         titolo: "Pane Fritto Dolce",
//         contenuto: "Pane fritto dolce con una spolverata di zucchero a velo. Un classico che non delude mai!",
//         immagine: "https://www.example.com/pane-fritto-dolce.jpg",
//         tags: ["dolce", "fritto", "tradizione"]
//     },
//     {
//         titolo: "Pasta alla Barbabietola",
//         contenuto: "Pasta fresca con un'incredibile salsa alla barbabietola. Un piatto unico e colorato per ogni pranzo.",
//         immagine: "https://www.example.com/pasta-barbabietola.jpg",
//         tags: ["pasta", "barbabietola", "piatto unico"]
//     },
//     {
//         titolo: "Torta Paesana",
//         contenuto: "Una torta rustica che richiama i sapori della tradizione. Facile da preparare e ideale per una merenda in famiglia.",
//         immagine: "https://www.example.com/torta-paesana.jpg",
//         tags: ["torta", "rustica", "tradizione"]
//     }
// ];
