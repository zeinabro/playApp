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
            //console.log(err)
            throw new Error('Failed to fetch shows')
        }
    }

}

module.exports = Shows
