const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig.js');
const apiRoutes = require('./routes/index.js');

const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/', (req, res) => res.send("Api's is working!"));
    app.use('/api', apiRoutes);

    app.listen(PORT, () => {
        console.log(`Server is started on PORT: ${PORT}`);
    })
}

prepareAndStartServer();