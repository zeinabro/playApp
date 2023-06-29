const db = require('../database/db')
require("dotenv").config()

class Shows {
    //constructor

    //create show

    //read all
    static async getAll() {
        try {
            const query = 'SELECT * FROM shows'
            const { rows } = await db.query(query)
            return rows
        } catch (err) {
            throw new Error('Failed to fetch shows')
        }
    }

    //read one
    static async getOne(id) {
        try {
            const query = 'SELECT * FROM shows WHERE show_id = $1'
            const { rows } = await db.query(query,[id])
            return rows[0]
        } catch (err) {
            throw new Error('Failed to fetch show')
        }
    }

}

module.exports = Shows
