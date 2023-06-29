const Shows = require('../models/Shows')

const getAll = async (req,res) => {
    try {
        const shows = await Shows.getAll()
        res.json(shows)
    } catch (err) {
        res.status(500).json({
            error: err,
            message: 'Failed to fetch shows'})
    }
}

const getOne = async(req,res) => {
    try {
        const id = parseInt(req.params.id)
        const show = await Shows.getOne(id)
        res.json(show)
    } catch (err) {
        res.status(500).json({
            error: err,
            message: 'Failed to fetch shows'})
    }
}

module.exports = { getAll, getOne }
