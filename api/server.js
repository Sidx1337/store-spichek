const express = require('express');
const randomId = require('random-id');
const app = express(),
      bodyParser = require('body-parser');
const connection = require("./database");
      port = 3070;

// place holder for the data
const items = [
  {
    id: '1',
    title: 'вейп 1',
    image: "http://localhost:3070/images/hqd1.jpg",
    description: "очень крутой вейп чтобы курить",
    price: 5000
  },
  {
    id: '2',
    title: 'вейп 2',
    image: "http://localhost:3070/images/hqd2.png",
    description: "очень крутой вейп чтобы курить",
    price: 10000
  },
  {
    id: '3',
    title: 'вейп 3',
    image: "http://localhost:3070/images/hqd2.png",
    description: "очень крутой вейп чтобы курить",
    price: 15000
  },
  {
    id: '4',
    title: 'вейп 4',
    image: "http://localhost:3070/images/hqd2.png",
    description: "очень крутой вейп чтобы курить",
    price: 15000
  },
  {
    id: '5',
    title: 'вейп 5',
    image: "http://localhost:3070/images/hqd2.png",
    description: "очень крутой вейп чтобы курить",
    price: 15000
  },
  {
    id: '6',
    title: 'вейп 6',
    image: "http://localhost:3070/images/hqd2.png",
    description: "очень крутой вейп чтобы курить",
    price: 15000
  },
  {
    id: '7',
    title: 'вейп 7',
    image: "http://localhost:3070/images/hqd2.png",
    description: "очень крутой вейп чтобы курить",
    price: 15000
  },
];

app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/store-frontend/dist'));
app.use(express.static(process.cwd() + '/public'));

app.get('/api/items', (req, res) => {
  console.log('api/items')
  const sql = 'SELECT * FROM PRODUCTS;';
  connection.query(sql, [], (err, items) => {
    console.log(items);
    res.json(items);
  });
});

app.post('/api/item', (req, res) => {
  const item = req.body;
  item.id = randomId(10);
  console.log('Adding item:', item);
  items.push(item);
  res.json('Новый продукт добавлен успешно');
});

app.get('/', (req,res) => {
  res.sendFile(process.cwd() + '/store-frontend/dist/index.html');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
