const express = require('express')
const {
	show_all_products,
	show_product_by_id,
	search_page,
	filter_page,
} = require('../controllers/productsController')

const router = express.Router()

router.get('/showdb', show_all_products)

router.get('/showPhone/:_id', show_product_by_id)

router.get('/search', search_page)

router.get('/filter', filter_page)
module.exports = router
