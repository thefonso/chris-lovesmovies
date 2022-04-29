const router = require("express").Router({ mergeParams: true });
const controller = require("./reviews.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

router
    .route("/:reviewId")
    .put(controller.update)
    .delete(controller.delete)
    .all(methodNotAllowed);

module.exports = router;