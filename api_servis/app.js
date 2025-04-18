const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const {sequelize, Kategorija, Proizvod, Zaposleni, Usluga, ZakazanTermin} = require('./models');
const corsOptions = {
	origin: ['http://localhost:8000', 'http://127.0.0.1:8000', 'http://localhost:8080']
};
app.use(cors(corsOptions));
app.use(bodyParser.json());



function authToken(req, res, next) {
	console.log('BACKEND');
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (token == null) return res.status(401).json({ msg: err });
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
	   if (err) return res.status(403).json({ msg: err });
	   req.user = user;
	   next();
	});
  }

app.get('/', (req, res) => {
  res.send('Hello from REST API Service');
});

const uslugaRoutes = require('./routes/usluga');
app.use('/usluga', authToken, uslugaRoutes);
 
const kategorijaRoutes = require('./routes/kategorija');
app.use('/kategorija', authToken, kategorijaRoutes);

const zaposleniRoutes = require('./routes/zaposleni');
app.use('/zaposleni', authToken, zaposleniRoutes);

const proizvodRoutes = require('./routes/proizvod');
app.use('/proizvod', authToken, proizvodRoutes);

const zakazanTerminRoutes = require('./routes/zakazanTermin');
app.use('/zakazanTermin', authToken, zakazanTerminRoutes);




  
app.put("/promeni-cenu/:id", async (req,res)=>{
	try{
   	   	const usluga = await Usluga.findByPk(req.params.id);  //iz url
		// console.log("cena usluga.Cena = " + usluga.Cena);
		// console.log("req.body = " + Number(req.body.cena));
    	 
		usluga.Cena = req.body.cena; //iz body
    	await usluga.save();
    	return res.json(usluga);  //vrati json nove vrednosti jela i završi funkc.
	} catch(err){
    	console.log(err);
    	res.status(500).json({ error: "Greska", data: err });
	}
});




// app.get('/usluga/izmeni/:id', async (req, res)=> {
//     try {
// 		const id = req.params.id;
// 		res.send('Usluga with params' + req.params);
// 		// res.send(`Usluga with id ${id}');
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).send('Error');
// 	}
//     // Fetch the usluga with the given id from your database
//     // Then send it back in the response
//     // This is just a placeholder. Replace it with your actual code.
    
// });

// app.put('/usluge/:id', authToken, async function(req, res) {
// 	const id = req.params.id;
// 	const updatedUsluga = req.body;

// 	try {
// 		const usluga = await Usluga.findByPk(id);
// 		if (usluga) {
// 			await usluga.update(updatedUsluga);
// 			res.json(usluga);
// 		} else {
// 			res.status(404).json({ error: 'Usluga not found' });
// 		}
// 	} catch (err) {
// 		console.error(err);
// 		res.status(500).send('Server error');
// 	}
// });

// app.delete('/usluge/:id', authToken, async function(req, res) {
// 	const id = req.params.id;

// 	try {
// 		const usluga = await Usluga.findByPk(id);
// 		if (usluga) {
// 			console.log(`Found usluga with id ${id}`);
// 			await usluga.destroy();
// 			console.log(`Deleted usluga with id ${id}`);
// 			res.json({ message: `Usluga ${id} deleted` });
// 		} else {
// 			console.log(`No usluga found with id ${id}`);
// 			res.status(404).json({ error: 'Usluga not found' });
// 		}
// 	} catch (err) {
// 		console.error(`Error while trying to delete usluga with id ${id}:`, err);
// 		res.json({ error: 'Server error' });
// 	}
// });

app.listen({ port:9000 }, async () => {
	console.log("Started server on localhost:8000");
	await sequelize.sync();
	console.log("DB synced");
});
