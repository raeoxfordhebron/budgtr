// DEPENDENCIES
const express = require('express')
const app = express()
const PORT = 3000
const morgan = require('morgan')

// DATABASE
const budgets = require('./models/budget.js')
let bankAccount 

// MIDDLEWARE
app.use("/static", express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(morgan("tiny"))

// ROUTES
// Index Route
app.get('/budgets', (req, res) => {
    res.render('index.ejs', {
        budgets,
        bankAccount
    })
})

// New Route
app.get('/budgets/new', (req, res) => {
    res.render("new.ejs")
})

// Create Route
app.post('/budgets', (req, res) =>{
    Number(req.body.amount)
    budgets.push(req.body)
    res.redirect("/budgets")
    
})

// Show Route
app.get('/budgets/:id', (req, res) => {
    res.render('show.ejs', {
        budget: budgets[req.params.id],
        index: req.params.id
    })
})

app.listen(PORT, () => {
    console.log(`listening on server ${PORT}`)
})