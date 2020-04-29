const router = require("express").Router();
const aircraftRoutes = require("./aircraft");

// Book routes
router.use("/aircraft", aircraftRoutes);

module.exports = router;
