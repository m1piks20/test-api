const express = require('express');
const app = express();
const port = 4200;

const cors = require('cors');


app.use(cors());

let data = {
  "name": "Pet Shop",
  "location": "Street 1",
  "rating": 4.5,
  "phone": "123456789",
  "email": "ps1@belyashik2k.ru",
  "statistics": [
    {
      "period": "year",
      "total_sales": 500,
      "total_customers": 100,
      "total_pets": 50,
      "total_orders": 500
    }
  ]
};

app.use(cors({
    origin: 'http://localhost:3000' 
}));

app.get('/', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});