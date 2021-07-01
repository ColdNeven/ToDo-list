const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const todoRourtes = require('./routes/todos')
const path = require('path')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine) // new engine as HBS
app.set('view engine', 'hbs') //register it
app.set('views', 'views') //all files here

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(todoRourtes)

async function start() {
    try {
        await mongoose.connect('mongodb+srv://neven:1loveyou@cluster0.q9znv.mongodb.net/todos', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => {
            console.log('server has been started...')
        })
    } catch (e) {
        console.log(e)
    }
}

start()