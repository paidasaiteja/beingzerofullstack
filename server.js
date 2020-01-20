const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
//server static files 
app.use(express.static(__dirname+'/dist/newproject'));
//send index.html from home(root) route
app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/dist/newproject/index.html')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))