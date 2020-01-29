const express = require('express')
const router = express.Router()

router.get('/product', (req, res) => {
    res.json({
        name: 'Macbook Pro 15 Inch',
        price: '112'
    })
})
router.get('/product/:id', (req, res) => {
    res.json({
        id: req.params.id,
        name: 'Macbook Pro 15 Inch',
        price: 100.00
    })
})
router.post('/product', (req, res) => {})
router.put('/product/:id', (req, res) => {})
router.delete('/product/:id', (req, res) => {})

module.exports = router