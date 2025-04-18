const express = require('express');
const {sequelize,Proizvod, Kategorija, Zaposleni, Usluga, ZakazanTermin} = require('../models');

const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

module.exports = route;

route.get("/", async (req, res) => {
    try{
        const proizvodi = await Proizvod.findAll();
        return res.json(proizvodi);
    }catch(err){
        res.status(500).json({error: "greska",  data: err});
    }
});

route.get("/:id", async (req, res) => {
    try{
        const proizvod = await Proizvod.findByPk(req.params.id);
        return res.json(proizvod);
    }catch(err){
        res.status(500).json({error: "greska",  data: err});
    }
});

route.post("/novi-proizvod" , async (req, res) => {
    try{
        const noviProizvod = await Proizvod.create({
            Naziv: req.body.Naziv,
            Cena: req.body.Cena,
            Opis: req.body.Opis
        });
        return res.json(noviProizvod);
    } catch(err){
        res.status(500).json({ error: "Greska", data: err });
    }
});

route.put("/:id", async (req, res) => {
    try{
        const proizvod = await Proizvod.findByPk(req.params.id);
        proizvod.Naziv = req.body.Naziv;
        // proizvod.Cena = req.body.Cena;
        proizvod.Opis = req.body.Opis;
        await proizvod.save();
        return res.json(proizvod);
    }catch(err){
        res.status(500).json({error: "greska",  data: err});
    }
});