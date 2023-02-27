const router = require('express').Router()
const db = require('../connections/dbconnection.js')
//setup routes
router.get('/', (req, res) => {
    const query = "SELECT * FROM user"
    db.query(query, (err, results) => {
        if (err) throw err
        res.render('home', {
            title: "Home Page",
            allUsers: results,
            isLoggedIn: true
        });
    })

})



router.get('/about-us', (req, res) => {
    res.render('aboutUs')
})



router.post('/create', (req, res) => {
    let fname = req.body.fname;
    let lname = req.body.lname;
    let email = req.body.email;
    let password = req.body.password;
    const query = "INSERT INTO user (first_name,last_name,email,password) VALUES ('" + fname + "','" + lname + "','" + email + "','" + password + "')";
    console.log(query);
    db.query(query, (err, results) => {
        if (err) throw err
        console.log(results);
        return res.status(200).json('user created');
    })


})


module.exports = router;