const Shows = require('../models/Shows')

const getAll = async (req,res) => {
    try {
        const shows = await Shows.getAll()
        res.json(shows)
    } catch (err) {
        res.status(500).json({
            error: err,
            message: 'Failed to fetch shows'})
        //console.log(err)
    }
}

module.exports = { getAll }
