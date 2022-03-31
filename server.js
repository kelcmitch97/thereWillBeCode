const express = require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', ({req}, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(controllers);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
})
