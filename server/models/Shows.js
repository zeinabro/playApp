const db = require('../database/db')
require("dotenv").config()

class Shows {
    //constructor

    //create show
    static async create() {
        try {

        } catch (err) {
            throw new Error('Failed to create show')
        }
    }

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
            console.log(err)
            throw new Error('Failed to fetch show')
        }
    }

    //update one
    static async update(id,data) {
        try {
            const {show_name, genre, rating, poster_image_url, running_time } = data
            const values = [show_name, genre, rating, poster_image_url, running_time,id]
            const query = 'UPDATE shows SET show_name=$1,genre=$2,rating=$3,poster_image_url=$4,running_time=$5 WHERE show_id=$6 RETURNING *'
            const { rows } = await db.query(query,values)
            if (rows.length == 0) {
                throw new Error('Show not found')
            }
            return rows[0]
        } catch (err) {
            console.log(err)
            throw new Error('Failed to update show')
        }
    }

    //delete one
    static async delete(id) {

    }

}

module.exports = Shows
