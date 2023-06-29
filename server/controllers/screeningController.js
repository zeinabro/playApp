const Screenings = require('../models/Screenings')

const getAll = async (req,res) => {
    try {
        const screenings = await Screenings.getAll()
        res.status(screenings ? 200 : 404).json(screenings ? screenings : {error: 'Could not find screenings'})
    } catch (err) {
        res.status(500).json({error: 'Failed to fetch screenings'})
    }
}

module.exports = { getAll }
