const express = require("express");
const {sequelize,Usluga, Proizvod, Zaposleni, ZakazanTermin, Kategorija} = require('../models');

const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

module.exports = route;

route.get("/", async (req, res) => {
    try{
        const kategorija = await Kategorija.findAll();
        return res.json(kategorija);
    }catch(err){
        res.status(500).json({error: "greska",  data: err});
    }
});

route.get("/:id", async (req, res) => {
    try{
        const kategorija = await Kategorija.findByPk(req.params.id);
        return res.json(kategorija);
    }catch(err){
        res.status(500).json({error: "greska",  data: err});
    }
});

route.put("/:id", async (req, res) => {
    try{
        const kategorija = await Kategorija.findByPk(req.params.id);
        kategorija.Naziv = req.body.Naziv;
        await kategorija.save();
        return res.json(kategorija);
    }catch(err){
        res.status(500).json({error: "greska",  data: err});
    }
});

route.post("/nov-kategorija" , async (req, res) => {
    try{
        const novaKategorija = await Kategorija.create({
            Naziv: req.body.Naziv
        });
        return res.json(novaKategorija);
    } catch(err){
        res.status(500).json({ error: "Greska", data: err });
    }
});

route.post("/novi-zaposleni" , async (req, res) => {
    try{
        const zaposleni = await Zaposleni.create({
            ime: req.body.ime,
            prezime: req.body.prezime,
            kategorijaId: req.body.kategorijaId
        });
        return res.json(zaposleni);
    } catch(err){
        res.status(500).json({ error: "Greska", data: err });
    }
});
