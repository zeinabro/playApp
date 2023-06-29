const Screenings = require('../models/Screenings')

const getAll = async (req,res) => {
    try {
        const screenings = await Screenings.getAll()
        res.status(screenings ? 200 : 404).json(screenings ? screenings : {error: 'Could not find screenings'})
    } catch (err) {
        res.status(500).json({error: 'Failed to fetch screenings'})
    }
}

const getOne = async (req,res) => {
    try {
        const id = parseInt(req.params.id)
        const screen = await Screenings.getOne(id)
        res.status(screen ? 200 : 404).json(screen ? screen : {Error: `screen with id ${id} not found`})
    } catch (err) {
        res.status(500).json({error: err,message: 'Failed to fetch screen'})
    }
}

const update = async (req,res) => {
    try {
        const id = parseInt(req.params.id)
        const data = req.body
        const updatedScreen = await Screenings.update(id,data)
        res.status(updatedScreen ? 200 : 404).json(updatedScreen ? updatedScreen : 
            {Error: 'Could not update screen'})
    } catch (err) {
        res.status(500).json({error: 'Failed to update screen'})
    } 
}

const create = async (req,res) => {
    try {
        const data = req.body
        const screen = await Screenings.create(data)
        res.status(screen ? 201 : 500).json(screen ? screen : {Error: 'Could not create screen'})
    } catch (err) {
        res.status(500).json({error: 'Failed to create screen'})
    }
}

const destroy = async (req,res) => {
    try {
        const id = parseInt(req.params.id)
        const screenToDelete = await Screenings.destroy(id)
        res.status(screenToDelete ? 204 : 404).json(screenToDelete ? `screen with id ${id} deleted` : `Could not delete screen`)
    } catch (err) {
        res.status(500).json({error: 'Failed to delete screen'})
    }
}

module.exports = { getAll, getOne, update, create, destroy }

