const Product = require("../models/product");

module.exports.show_all_products = (req, res) => {
	Product.find({})
		.then((items) => res.json(items))
		.catch((e) => console.log(e));
};

module.exports.show_product_by_id = (req, res) => {
	const { _id } = req.params;
	console.log(_id);
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

module.exports.filter_page = async (req, res) => {
	let { brand, price } = req.query;
	console.log(brand.split(","));

	try {
		// 	// const title = new RegExp(searchQuery, "i");
		if (price.length > 0) {
			console.log(price.split("to"));
			const pricemin = price.split("to")[0];
			const pricemax = price.split("to")[1];
			console.log(pricemin, pricemax);

			const phones = await Product.find({
				$and: [
					{ brand: { $in: brand.split(",") } },
					{ price: { $gt: pricemin, $lt: pricemax } },
				],
			});
			res.json(phones);
		} else {
			const phones = await Product.find({
				brand: { $in: brand.split(",") },
			});
			res.json(phones);
		}
		// console.log(phones)
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

module.exports.brand_list = (req, res) => {
	Product.distinct("brand", (err, brands) => {
		if (err) return console.error(err);
		res.send(brands);
	});
};