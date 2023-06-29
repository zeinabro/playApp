const db = require('../database/db')
require("dotenv").config()

class Screenings {
    //constructor

    //create screening
    static async create(data) {
        try {
            const {show_time,show_date,price,remaining_seats,show_id,screen_id } = data
            const values = [show_time,show_date,price,remaining_seats,show_id,screen_id]

            const query = 'INSERT INTO screenings (show_time,show_date,price,remaining_seats,show_id,screen_id) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *'
            const { rows } = await db.query(query,values)
            return rows[0]
        } catch (err) {
            console.log(err)
            throw new Error('Failed to create screening')
        }
    }

    //read all
    static async getAll() {
        try {
            const query = 'SELECT * FROM screenings'
            const { rows } = await db.query(query)
            return rows
        } catch (err) {
            throw new Error ('Failed to fetch screenings')
        }
    }
    //read one screening
    static async getOne(id) {
        try {
            const query = 'SELECT * FROM screenings WHERE screening_id = $1'
            const { rows } = await db.query(query,[id])
            return rows[0]
        } catch (err) {
            console.log(err)
            throw new Error('Failed to fetch screening')
        }
    }
    //update screening
    static async update(id,data) {
        try {
            const { show_time,show_date,price,remaining_seats,show_id,screen_id} = data
            const values = [show_time,show_date,price,remaining_seats,show_id,screen_id,id]

            const query = 'UPDATE screenings SET show_time=$1,show_date=$2,price=$3,remaining_seats=$4,show_id=$5,screen_id=$6 WHERE screening_id=$7 RETURNING *'
            const { rows } = await db.query(query,values)
            if (rows.length == 0) {
                throw new Error('Screening not found')
            }
            return rows[0]
        } catch (err) {
            throw new Error('Failed to update screening')
        }
    }

    //delete screening
    static async destroy(id) {
        try {
            const query = 'DELETE FROM screenings WHERE screening_id = $1 RETURNING *'
            const { rows } = await db.query(query,[id])
            if (rows == 0) {
                throw new Error('Could not find screening')
            }
            return rows[0]
        } catch (err) {
            console.log(err)
            throw new Error('Failed to delete screening')
        }
    }
}

module.exports = Screenings
