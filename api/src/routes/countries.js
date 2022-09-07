const { Router} = require('express');
const { Country, Activity} = require('../db');
const router = Router();

//toma todo los REGISTROS por Nombre
router.get('/', async (req, res) =>{
    const { name } = req.query
    const allCountries = await Country.findAll({
        include: Activity
    })
    
    if (name) {
        const byName = await allCountries.filter(i => i.name.toLowerCase() === name.toLowerCase().startWith(name.toLowerCase()))
        byName.length ?
        res.json(byName):
        res.status(404).send({'message': "Element not found"})
    } else {
        res.json(allCountries)
    }

});

//Busca por id

router.get('/:id', async (req,res) => {
    const { id } = req.params;
    let allCountries

    try {
        if (id.length > 1) {
            countries = await Country.findByPk(id, { include: Activity })

            countries = {
                id: countries.id,
                name: countries.name,
                image: countries.image,
                continent: countries.continent,
                capital: countries.capital,
                subregion: countries.subregion,
                area: countries.area,
                population: countries.population,
                activities: countries.activities.map((e) => {
                    return {
                        id: e.id,
                        name: e.name,
                        difficulty: e.difficulty,
                        duration: e.duration,
                        season: e.season
                    }
                })
            }
        }
        res.json(countries)


    } catch (error) {

    }
})
