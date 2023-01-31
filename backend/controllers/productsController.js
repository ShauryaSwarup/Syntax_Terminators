const Product = require("../models/product");

module.exports.show_all_products = (req, res) => {
	Product.find({})
		.then((items) => res.json(items))
		.catch((e) => console.log(e));
};

module.exports.show_product_by_id = (req, res) => {
	const { _id } = req.params;
	console.log(_id)
	Product.findById(_id)
		.then((items) => res.json(items))
		.catch((e) => console.log(e));
};

module.exports.search_page = async (req, res) => {
	const { searchQuery, brand } = req.query;
	// console.log(searchQuery)
	try {
		const title = new RegExp(searchQuery, "i");

		const phones = await Product.find({ title });

		res.json(phones);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

