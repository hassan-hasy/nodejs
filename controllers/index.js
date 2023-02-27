const router = require("express").Router();

//import all routes files here

const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes)
router.use('/api/user', homeRoutes)

module.exports = router;