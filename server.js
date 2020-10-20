require('dotenv').config({path: __dirname + '/.env'})
var express = require('express')
var app = express()
var cors = require('cors')
app.use(cors({optionsSuccessStatus: 200}))
app.use(express.static( __dirname + '/public'))

// Direct to homepage
app.get(
    '/',
    (req, res)=>{
        res.sendFile(__dirname+'/views/index.html')
    }
)

// API Route = api/whoami
app.get(
    '/api/whoami',
    (req, res)=>{
        var response = ({"ipaddress": req.ip, "language": req.headers['accept-language'], "software": req.headers['user-agent']})
        res.json(response)
    }
)

var listener = app.listen(process.env.PORT || 3000, ()=>{
    console.log('Request Header Parser is lisenting on port ' + listener.address().port)
})