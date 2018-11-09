const mysql = require('mysql')
const sqlOption = require('../config')

let pool = mysql.createPool(sqlOption)

let db = {}

db.sqlQuery = (sql, params) => {
    
    return new Promise((resolve, reject) => {

        pool.getConnection(function (err, connection) {

            if (err) return reject(err) // not connected!

            // fields为查询的字段，一般比较少用
            connection.query(sql, params, function (error, results, fields) {

                // 如果不查询了，就释放连接，为了性能着想
                connection.release();

                // Handle error after the release.
                if (error) return reject(error)

                resolve(results)
            })
        })

    })

}

module.exports = db
