const express = require('express')
// const hbs = require('express-handlebars') //import templating engine
// global.db = require('./connections/dbconnection.js')
const { engine } = require('express-handlebars')
const path = require('path')
const controllers = require('./controllers')
const app = express()
app.engine('handlebars', engine({
    extname: '.handlebars',
    defaultLayout: "main"
}));

app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, "public")))
const port = 3000;

app.use(controllers)
app.listen(port, () => {
    console.log("App is running on port 3000")
})