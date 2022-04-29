require("dotenv").config();
const express = require("express");

const moviesRouter = require("./movies/movies.router");
const theatersRouter = require("./theaters/theaters.router");
const reviewsRouter = require("./reviews/reviews.router");
const cors = require("cors");
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

const app = express();

app.use(
    cors({
        origin: "*"
    })
);
app.use(express.json());

app.use("/movies", moviesRouter);
app.use("/theaters", theatersRouter);
app.use("/reviews", reviewsRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;