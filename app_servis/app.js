const express = require('express');
const path = require('path');
const BP = require('body-parser');
const Joi = require('joi');
const fs = require('fs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
//8. strana
function getCookies(req) {
    if (req.headers.cookie == null) return {};


    const rawCookies = req.headers.cookie.split('; ');
    const parsedCookies = {};


    rawCookies.forEach( rawCookie => {
        const parsedCookie = rawCookie.split('=');
        parsedCookies[parsedCookie[0]] = parsedCookie[1];
    });


    return parsedCookies;
};

function authToken(req, res, next) {
    console.log("usao u auth u app_servisu");
    const cookies = getCookies(req);
    const token = cookies['token'];
    console.log("token",token);
    if (token == null) {
        console.log("token",token);
        // return res.redirect(301, '/login');
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            console.error("JWT verification error:", err);
            console.log("token",token);
            // return res.redirect(301, '/login');
        }
        req.user = user;
        next();
    });
}



app.use( express.static( path.join(__dirname, 'static') ) );
app.use('/nova-usluga', BP.urlencoded({extended: false}));

/// login i register
app.get('/register', (req, res) => {
    res.sendFile('register.html', { root: './static' });
});

app.get('/login', (req, res) => {
    res.sendFile('login.html', { root: './static' });
});

app.get('/admin', authToken, (req, res) => { 
    res.sendFile(path.join(__dirname, 'static', 'index.html')); // __dirname je globalna promenljiva koja pokazuje na root folder
});


app.get('/admin/:abc', (req, res) => { 
    res.sendFile(path.join(__dirname, 'static', req.params.abc)); // __dirname je globalna promenljiva koja pokazuje na root folder
});


app.post("/nova-usluga", (req, res) => {
    //res.send(req.body);
    //regex manje vise
    const shema = Joi.object().keys({
        naziv: Joi.string().trim().min(5).max(25).required(),
        kategorija: Joi.string().trim().min(1).required(),
        cena: Joi.number().greater(0).required()
    });
    const {error, value} = shema.validate(req.body);
    if(error){
        res.send("Greska: " + error.details[0].message);
        return;
    }

    // Upis u fajl
    fs.appendFile("usluge.txt", JSON.stringify(value) + "\n", (err) => {
        if (err) {
            console.error("Došlo je do greške pri pisanju u fajl:", err);
            return res.status(500).send("Došlo je do greške na serveru");
        }
        res.send("Jelo je uspešno dodato");
    });
});

app.get("/usluge", (req, res) => {
    const jela = [];
    fs.readFile('usluge.txt', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          res.status(500).send({ error: "Greška" });
          return;
        }
        //else…
        const redovi = data.trim().split('\n');
        //i ovde dalje nastavljamo parsovanje redova i punjenje niza
        for(let i=0; i<redovi.length; i++){
            let obj = JSON.parse(redovi[i]);
            jela.push(obj);
        }
        res.json(jela);
      }); 
});




app.listen(8000);




