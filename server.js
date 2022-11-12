// DEPENDENCIES
const express = require('express')
const app = express()
const PORT = 3001

// DATABASE
const budgets = require('./models/budget.js')

// MIDDLEWARE
app.use("/static", express.static("public"))

// ROUTES
// Get Route
app.get('/budgets', (req, res) => {
    res.render('index.ejs', {
        budgets
    })
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