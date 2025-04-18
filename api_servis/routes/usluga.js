const express = require("express");
const {sequelize, Kategorija, Proizvod, Zaposleni, ZakazanTermin, Usluga} = require('../models');

const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

module.exports = route;

route.get("/", async (req, res) => {
    try{
        const usluge = await Usluga.findAll({
            include: [{
              model: Kategorija,
              as: 'kategorija'
            }]
          })
        return res.json(usluge);
    }catch(err){
        res.status(500).json({error: "greska",  data: err});
    }
});

route.get("/:id", async (req, res) => {
    try{
        const usluga = await Usluga.findByPk(req.params.id);
        return res.json(usluga);
    }catch(err){
        res.status(500).json({error: "greska",  data: err});
    }
});




route.post("/", async (req, res) => {
    try{
        const novi = await Usluga.create(req.body);
        return res.json(novi);

    }catch(err){
        res.status(500).json({error: "greska",  data: err});
    }
});
route.post("/nova-usluga" , async (req, res) => {
    try{
        const usluga = await Usluga.create({
            naziv: req.body.naziv,
            Cena: req.body.cena,
            kategorijaId: req.body.kategorijaId
        });
        return res.json(usluga);
    } catch(err){
        res.status(500).json({ error: "Greska", data: err });
    }
});


route.put("/:id", async (req, res) => {
    try{
        const usluga = await Usluga.findByPk(req.params.id);
        usluga.naziv = req.body.naziv; 
        usluga.cena = req.body.cena;
        usluga.kategorijaId = req.body.kategorijaId;
        usluga.save();
        return res.json(usluga);

    }catch(err){
        res.status(500).json({error: "greska",  data: err});
    }
});

route.delete("/:id", async (req, res) => {
    try{
        const usluga = await Usluga.findByPk(req.params.id);
        usluga.destroy();
        return res.json( usluga.id );
        }catch(err){
        res.status(500).json({error: "greska",  data: err});
    }
});
