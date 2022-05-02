require("dotenv").config();
const express = require("express");

const moviesRouter = require("./movies/movies.router");
const theatersRouter = require("./theaters/theaters.router");
const reviewsRouter = require("./reviews/reviews.router");
const cors = require("cors");
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

const app = express();

let corsOptions = {
    origin: 'https://chris-welovemovies-backend.herokuapp.com',
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET, PUT, DELETE"
}

app.use(cors(corsOptions));
app.use(express.json());

app.use("/movies", moviesRouter);
app.use("/theaters", theatersRouter);
app.use("/reviews", reviewsRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;