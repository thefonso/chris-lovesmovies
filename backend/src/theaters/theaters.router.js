const router = require("express").Router({ mergeParams: true });
const controller = require("./theaters.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

router
    .route("/")
    .get(controller.list)
    .all(methodNotAllowed);

module.exports = router;