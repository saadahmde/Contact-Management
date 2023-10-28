const express = require('express');


const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all users');
});

router.post('/:id', (req, res) => {
    res.send('Get user by id');
});

router.put('/:id', (req, res) => {
    res.send('Update user by id');
})

router.delete('/:id', (req, res) => {
    res.send('Delete user by id');
})

module.exports = router;