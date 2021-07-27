
let express = require('express');
let fs = require('fs');
var bodyParser = require('body-parser')


const app = express();

// create application/json parser
var jsonParser = bodyParser.json()

app.use(express.static('./dist'));

app.get('/api/good', (req, res) => {
  fs.readFile('./data/catalog.json', 'utf8', (err, data) => {
    res.send(data);
  });
});

app.get('/api/cart', (req, res) => {
  fs.readFile('./data/cart.json', 'utf8', (err, data) => {
    res.send(data);
  });
});

app.post('/api/cart', jsonParser, (req, res) => {
  fs.readFile('./data/cart.json', 'utf8', (err, data) => {
    const cart = JSON.parse(data);

    const item = req.body;

    cart.push(item);

    fs.writeFile('./data/cart.json', JSON.stringify(cart), (err) => {
      console.log('done');
      res.send('ok')
    });

  });
});



app.listen(3000, () => {
  console.log('server is running on port 3000!');
});