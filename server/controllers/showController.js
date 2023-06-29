const Shows = require('../models/Shows')

const getAll = async (req,res) => {
    try {
        const shows = await Shows.getAll()
        res.status(shows ? 200 : 404).json(shows ? shows : {Error: `Shows not found`})
    } catch (err) {
        res.status(500).json({error: err,message: 'Failed to fetch shows'})
    }
}

const getOne = async(req,res) => {
    try {
        const id = parseInt(req.params.id)
        const show = await Shows.getOne(id)
        res.status(show ? 200 : 404).json(show ? show : {Error: `Show with id ${id} not found`})
    } catch (err) {
        console.log(err)
        res.status(500).json({error: err,message: 'Failed to fetch show'})
    }
}

module.exports = { getAll, getOne }
