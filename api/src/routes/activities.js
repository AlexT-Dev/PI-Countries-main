/* 
  Author: alejandro Téllez
  Activity: Se define las rutas de actividades para agregar o modificar
  Date: September 7, 2022

*/

const { Router } = require('express');
const { Activities, Country } = require('../db');

const router = Router();  //Para ingresar a las rutas específicas

// Busca todas las actividades

router.get('/', async (req, res) => {
    const allActivities = await Activity.findAll({include: Country});
    const filterA = allActivities.map(e => e.name.toLowerCase());
    const total = filterA.filter((item, index) => {
        return filterA.indexOf(item) === index;    
     })
     res.json(total);
});

//Guarda una actividad

router.post('/', async (req, res, next) => {
   const {
      name,
      difficulty,
      duration,
      season,
      countries,
   } = req.body;

   //Guarda la actividad

   try {

    let activity = await Activity.create({name, difficulty, difficulty, duration, season })
    await activity.setCountries(countries)

    let activityWithCountry = await Activity.findOne({
        where: { name: name },
        attributes : { 
            exclude: ['upadteAt', 'createdAt'],
        },
        include: {
            model: Country, 
            trough: {attributes: []
            }
        } 
        
    })
    res.jason(activityWhithCountry)
   } catch (error) {
    next(error)
   }


});

module.exports = router;
