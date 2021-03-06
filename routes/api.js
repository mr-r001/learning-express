const router = require("express").Router();
const apiController = require("../controllers/apiController");
const { upload } = require("../middlewares/multer");

// Sign In
router.get("/landing-page", apiController.landingPage);
router.get("/detail-page/:id", apiController.detailItem);
router.post("/booking-page", upload, apiController.bookingPage);

module.exports = router;
