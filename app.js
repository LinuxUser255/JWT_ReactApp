// import require express and here you need dotenv to access the env variables.
require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const mainRouter = require('./routes/main');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middlewares & using express.json because one of the routes is a POST request.body is a JSON object
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1', mainRouter);
app.use(notFoundMiddleware); // Implementing both middleware
app.use(errorHandlerMiddleware);

// port variable is set to process.env.PORT OR default 3000
const port = process.env.PORT || 3000;

// Start the server
const start = async () => {
    try {
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();
