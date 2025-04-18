const express = require('express');
const {sequelize, Kategorija, Proizvod, Zaposleni, ZakazanTermin, Usluga, Users} = require('../models');

const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({ extended: true }));

module.exports = route;

route.post("/prijavi-promenu", async (req, res) => {
	try {
        let dateTime = new Date(req.body.vreme);
        const user = await Users.findOne({ where: { username: req.body.username } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
		const noviZakazanTermin = await ZakazanTermin.create({
			uslugaId : req.body.usluga,
			Adresa_radnje : req.body.adresa,
			Status: req.body.status,
			ZakazanoVreme : dateTime,
            zaposleniId : req.body.zaposleni,
			userId : user.id
		});	
		console.log(JSON.stringify(noviZakazanTermin));
		return res.json(noviZakazanTermin);
	} catch (err) {
        console.log('Error handling request:', req.method, req.url);
        console.log('Body:', req.body);
        console.log('Error:', err);
		res.status(500).json({ error: 'Greska', data: err });
	}
});

