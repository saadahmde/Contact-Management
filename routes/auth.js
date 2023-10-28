const express = require('express');

const router = express.Router();



router.get('/', (req, res) => {
    res.send('Get LoggedIn data');
});

router.post('/', (req, res) => {
    res.send('Login User');
})

module.exports = router;