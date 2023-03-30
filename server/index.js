const express = require('express')
const app = express();
const PORT = 4444
const cors = require('cors')
const bodyparser = require('body-parser');

const shopRouter = require('./router/shop')

// app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.use('/' , shopRouter)



app.listen(PORT , () => {
    console.log(`http://localhost:${PORT}`)
})

