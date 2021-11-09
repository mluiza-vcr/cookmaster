const bodyParser = require('body-parser');

const app = require('./app');

const usersRoute = require('../Routes/usersRoute');

const PORT = 3000;

app.use(bodyParser.json());

app.use('/users', usersRoute);

// app.use('/recipes', recipesRoute);

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
