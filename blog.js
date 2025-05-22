console.log("////////////////////////");

//importo e assegno alla costante express il modulo express
import express from "express";
import fs from "fs";

const data = fs.readFileSync("blog-post.json", "utf-8" );
const blogPost = JSON.parse(data)

//creo l'app server
const app = express();
//assegno la porta da cui il server si metterà in ascolto.
const port = 3000;


//servo i file statici presenti in cartella images. Ora sono accessibili da url.
app.use(express.static("images"));


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






