const Shows = require('../models/Shows')

const getAll = async (req,res) => {
    try {
        const shows = await Shows.getAll()
        res.status(shows ? 200 : 404).json(shows ? shows : {Error: `Shows not found`})
    } catch (err) {
        res.status(500).json({error: err,message: 'Failed to fetch shows'})
    }
}

const getOne = async (req,res) => {
    try {
        const id = parseInt(req.params.id)
        const show = await Shows.getOne(id)
        res.status(show ? 200 : 404).json(show ? show : {Error: `Show with id ${id} not found`})
    } catch (err) {
        res.status(500).json({error: err,message: 'Failed to fetch show'})
    }
}

const update = async (req,res) => {
    try {
        const id = parseInt(req.params.id)
        const data = req.body
        const updatedShow = await Shows.update(id,data)
        res.status(updatedShow ? 200 : 404).json(updatedShow ? updatedShow : 
            {Error: 'Could not update show'})
    } catch (err) {
        res.status(500).json({error: 'Failed to update show'})
    } 
}

const create = async (req,res) => {
    try {
        const data = req.body
        const show = await Shows.create(data)
        res.status(show ? 201 : 500).json(show ? show : {Error: 'Could not create show'})
    } catch (err) {
        res.status(500).json({error: 'Failed to create show'})
    }
}

module.exports = { getAll, getOne, update, create }
