const db = require('../database/db')

class Screenings {
    //constructor

    //create screening

    //read all
    static async getAll() {
        try {
            const query = 'SELECT * FROM screenings'
            const { rows } = await db.query(query)
            return rows
        } catch (err) {
            console.log(err)
            throw new Error ('Failed to fetch screenings')
        }
    }
    //read one screening

    //update screening

    //delete screening
}

module.exports = Screenings
