const router = require("express").Router({ mergeParams: true });
const controller = require("./movies.controller")
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors")

const corsGet = cors({ methods: "GET" });

router
  .route("/:movieId/reviews")
  .get(controller.listReviews)
  .all(methodNotAllowed);

router
  .route("/:movieId/theaters")
  .get(controller.readTheaters)
  .all(methodNotAllowed);

router
  .route("/:is_showing=true")
  .get(corsGet, controller.list)
  .options(corsGet)
  .all(methodNotAllowed);

router
  .route("/:movieId")
  .get(controller.read)
  .all(methodNotAllowed);
router
  .route("/")
  .get(controller.list)
  .all(methodNotAllowed);

module.exports = router;