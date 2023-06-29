const Screen = require('../models/Screen');

const getAll = async (req, res) => {
    try {
        const screens = await Screen.getAll();
        res.status(screens.length > 0 ? 200 : 404).json(screens.length > 0 ? screens : { Error: 'Screens not found' });
    } catch (err) {
        res.status(500).json({ error: err.message, message: 'Failed to fetch screens' });
    }
};

const getOne = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const screen = await Screen.getOne(id);
        res.status(screen ? 200 : 404).json(screen ? screen : { Error: `Screen with id ${id} not found` });
    } catch (err) {
        res.status(500).json({ error: err.message, message: 'Failed to fetch screen' });
    }
};

const create = async (req, res) => {
    try {
        const screenData = req.body;
        const newScreen = await Screen.create(screenData);
        res.status(201).json(newScreen);
    } catch (err) {
        res.status(500).json({ error: err.message, message: 'Failed to create screen' });
    }
};

const update = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;
        const updatedScreen = await Screen.update(id, data);
        res.status(updatedScreen ? 200 : 404).json(updatedScreen ? updatedScreen : { Error: 'Could not update screen' });
    } catch (err) {
        res.status(500).json({ error: err.message, message: 'Failed to update screen' });
    }
};

const deleteOne = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const deletedScreen = await Screen.delete(id);
        res.status(204).json(deletedScreen);
    } catch (err) {
        res.status(500).json({ error: err.message, message: 'Failed to delete screen' });
    }
};

module.exports = { getAll, getOne, create, update, deleteOne };
