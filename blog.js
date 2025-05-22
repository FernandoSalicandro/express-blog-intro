console.log("////////////////////////");

//importo e assegno alla costante express il modulo express
import express from "express";
//creo l'app server
const app = express();
//assegno la porta da cui il server si metterà in ascolto.
const port = 3000;


//servo i file statici presenti in cartella images. Ora sono accessibili da url.
app.use(express.static("images"));

// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)

const blogPost = [
    { 
        titolo: "Il classico ciambellone della nonna",
        contenuto: "Una ricetta semplice e genuina per un dolce soffice perfetto a colazione o merenda.",
        immagine: "http://localhost:3000/ciambellone.jpeg",
        tags: ["dolci", "colazione", "tradizione", "ricetta"]
    },
    {
        titolo: "Cracker alla barbabietola con crema di formaggio",
        contenuto: "Colorati, croccanti e sorprendenti: scopri come preparare questi cracker sfiziosi e salutari.",
        immagine: "http://localhost:3000/cracker_barbabietola.jpeg",
        tags: ["antipasti", "salutare", "vegetariano", "ricetta"]
    },
    {
        titolo: "Pane fritto dolce: un tuffo nei ricordi",
        contenuto: "Una ricetta povera ma ricca di gusto, perfetta per recuperare il pane avanzato con un tocco di zucchero e cannella.",
        immagine: "http://localhost:3000/pane_fritto_dolce.jpeg",
        tags: ["dolci", "tradizione", "riciclo", "merenda"]
    },
    {
        titolo: "Pasta alla barbabietola e pistacchi",
        contenuto: "Un primo piatto dai colori vivaci e dai sapori decisi, perfetto per stupire i tuoi ospiti.",
        immagine: "http://localhost:3000/pasta_barbabietola.jpeg",
        tags: ["primi", "vegetariano", "barbabietola", "creativo"]
    },
    {
        titolo: "Torta paesana: il dolce della tradizione lombarda",
        contenuto: "Pane raffermo, cacao, pinoli e uvetta: ingredienti semplici per un dolce ricco di storia.",
        immagine: "http://localhost:3000/torta_paesana.jpeg",
        tags: ["dolci", "lombardia", "tradizione", "ricetta"]
    }
];


//definisco una rotta per le richieste GET all'url di root "/"
app.get(`/`, (req, res) => {

    //creo un oggetto con i dati da restituire al client che effettua la richiesta
    const resData = { data: " Questo è il mio blog"};
    //stampo per debug
    console.log(resData)
    //invio la risposta come oggetto json
    res.json(resData)
})

app.get(`/bacheca`, (req,res) => {

    const resData = {data : "La mia bacheca", numeroPost : blogPost.length, posts: blogPost}

    res.json(resData)

})



//Configurazione base completata.
//avvio del server con ascolto sulla port specificata e callback function che restituisce il saluto se l'avvio è avvenuto con successo.
app.listen(port, () => {
    console.log("Sono in ascolto")
})






