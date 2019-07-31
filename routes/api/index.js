const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");

// Google routes
router.use("/google", googleRoutes);

// Book routes
router.use("/books", bookRoutes);

// If no API routes are hit, send main page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});


module.exports = router;