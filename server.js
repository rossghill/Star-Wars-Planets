let express = require('express');
let app = express();
let path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static('public'));

let server = app.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;

    console.log('App listening at http://%s:%s', host, port); 
});