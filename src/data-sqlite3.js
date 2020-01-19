import {  range, always } from 'ramda'
import sqlite3 from 'sqlite3'
import { db_path } from './settings.json'



const doDbOp = (op) => {
    let db = new sqlite3.verbose().Database(db_path + '/mishnah.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
          console.error(err.message)
        }
        console.log('Connected to the mishnah database.')
      })
      
      db.serialize(() => {
        op(db)
      })
      
      db.close((err) => {
        if (err) {
          console.error(err.message)
        }
        console.log('Close the database connection.')
      })
}

export const learnN = (n, date) => doDbOp(db => {
    const ns = range(0, n)
    const placeHolders = ns.map(_ => '(?)').join(',')
    const sql = `INSERT INTO learned(learned_on) VALUES ${placeHolders}`
    db.run(sql, ns.map(always(date)))
})

export const getLearned = () => doDbOp(db => new Promise((res, rej) => db.all(`SELECT * FROM learned`, (err, rows) => {
    if(err) return rej(err)
    return res(rows)
    
})))