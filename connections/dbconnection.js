const mysql = require('mysql')

//create connection
let con = mysql.createConnection(
    {
        hostname: "127.0.0.1",
        user: "root",
        password: "",
        database: "study_db"
    }
)
con.connect(function (err) {
    if (err) throw err
    console.log("Connected to database")
})

module.exports = con;