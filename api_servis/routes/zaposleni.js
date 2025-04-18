const express = require('express');
const {sequelize, Zaposleni, Kategorija, Proizvod, Usluga, ZakazanTermin} = require('../models');

const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

module.exports = route;

route.get("/", async (req, res) => {
    try{
        const zaposleni = await Zaposleni.findAll({
            include: [{
              model: Kategorija,
              as: 'kategorija'
            }]
          })
        return res.json(zaposleni);
    }catch(err){
        res.status(500).json({error: "greska",  data: err});
    }
});

route.post("/novi-zaposleni" , async (req, res) => {
    try{
        const noviZaposleni = await Zaposleni.create({
            naziv: req.body.Naziv,
            kategorijaId: req.body.kategorijaId
        });
        return res.json(noviZaposleni);
    } catch(err){
        res.status(500).json({ error: "Greska", data: err });
    }
});
