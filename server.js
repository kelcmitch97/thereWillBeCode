// Main Server file

const mysql = require('mysql2');
const express = require('express')
const path = require('path');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

const routes = require('./controllers');

const PORT = process.env.PORT || 3001;
const app = express();

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Login Session',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', express.static(path.join(__dirname, 'public')))
app.use(routes);

// app.get('/', ({req}, res) => {
//     res.sendFile(path.join(__dirname, '/public/src/template.html'));
// });

app.use((req, res) => {
    res.status(404).end();
});

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});