// DEPENDENCIES
const express = require('express')
const app = express()
const PORT = 3001

// DATABASE
const budgets = require('./models/budget.js')

// MIDDLEWARE
app.use("/static", express.static("public"))

// ROUTES
app.get('/budgets', (req, res) => {
    res.render('index.ejs', {
        budgets
    })
})

app.listen(PORT, () => {
    console.log(`listening on server ${PORT}`)
})