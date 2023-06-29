const db = require('../database/db');
require("dotenv").config()

class Screen {
    // constructor

    constructor({ screen_id, capacity, theatre_id }) {
        this.id = screen_id;
        this.capacity = capacity;
        this.theatre_id = theatre_id;
    }
    // create screen

    static async create(screenData) {
        try {
            const { capacity, theatre_id } = screenData;
            const response = await db.query('INSERT INTO screens (capacity, theatre_id) VALUES ($1, $2) RETURNING *', [capacity, theatre_id]);
            const screenId = response.rows[0].screen_id;
            const newScreen = await Screen.getOne(screenId);
            return newScreen;

        } catch (err) {
            console.error(err)
            throw new Error('Failed to create screen');
        }
    }
    // read all 

    static async getAll() {
        try {
            const query = 'SELECT * FROM screens';
            const { rows } = await db.query(query);
            return rows;
        } catch (err) {
            throw new Error('Failed to fetch screens')
        }

    }
    // read one

    static async getOne(screenId) {
        try {
            const query = 'SELECT * FROM screens WHERE screen_id = $1';
            const { rows } = await db.query(query, [screenId]);
            return rows[0];
        } catch (err) {
            throw new Error('Failed to fetch screen');
        }
    }


    // update one

    static async update(screenId, screenData) {
        try {
            const { capacity } = screenData;
            const query = 'UPDATE screens SET capacity = $1 WHERE screen_id = $2 RETURNING *';
            const { rows } = await db.query(query, [capacity, screenId]);

            if (rows.length === 0) {
                throw new Error('Screen not found');
            }

            const updatedScreen = rows[0];
            return updatedScreen;
        } catch (err) {
            throw new Error('Failed to update screen');
        }
    }




    // delete one

    static async delete(screenId) {
        try {
            // deleting associated screenings first

            const deleteScreeningsQuery = 'DELETE FROM screenings WHERE screen_id = $1';
            await db.query(deleteScreeningsQuery, [screenId]);

            // deleting screen

            const deleteScreenQuery = 'DELETE FROM screens WHERE screen_id = $1 RETURNING *';
            const { rows } = await db.query(deleteScreenQuery, [screenId]);

            if (rows.length === 0) {
                throw new Error('Screen not found');
            }

            const deletedScreen = rows[0];
            return deletedScreen;
        } catch (err) {
            throw new Error('Failed to delete screen');
        }
    }

}



module.exports = Screen;
