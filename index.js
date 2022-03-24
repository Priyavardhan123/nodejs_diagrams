const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;                  //Save the port number where your server will be listening

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile('./src/index.html', {root: __dirname});
});

app.listen(port, () => {
    console.log('Now listening on port http://localhost:'+port); 
});