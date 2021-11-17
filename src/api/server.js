const bodyParser = require('body-parser');

const app = require('./app');

const usersRoute = require('../Routes/usersRoute');

const loginRoute = require('../Routes/loginRoute');

const recipesRoute = require('../Routes/recipesRoute');

const PORT = 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', usersRoute);

app.use('/login', loginRoute);

app.use('/recipes', recipesRoute);

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
