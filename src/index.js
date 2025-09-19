const express = require('express');
const { PORT } = require('./config/serverConfig.js');

const app = express();

app.get("/", (req, res) => {
    res.send("API is working");
})


const prepareAndStartServer = () => {
    app.listen(PORT, () => {
        console.log(`Server is started on PORT: ${PORT}`);
    })
}

prepareAndStartServer();