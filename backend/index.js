const express = require("express");
const mongoose = require("mongoose");

//import routes
const userRoutes = require("./routes/users");
const favoriteRoutes = require("./routes/favorites");
const productRoutes = require("./routes/products");

const Product = require("./models/product");

//middleware
const app = express();
app.use(express.json());
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

//routes
app.get("/products/filter", async (req, res) => {
	const { brand, price } = req.query;
	console.log(brand.split(","));
	console.log(price.split("to"));
	const pricemin = price.split("to")[0]
	const pricemax = price.split("to")[1];
	console.log(pricemin,pricemax)

	try {
		// 	// const title = new RegExp(searchQuery, "i");

		const phones = await Product.find({
			$and: [
				{ brand: { $in: brand.split(",") } },
				{ price: { $gt: pricemin, $lt: pricemax } },
			],
		});
		// console.log(phones)
		res.json(phones);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});

app.use("/comparazon/user", userRoutes);
app.use("/products", productRoutes);
app.use("/user", favoriteRoutes);

mongoose
	.connect(
		"mongodb+srv://Comparazon:sharayu2000@cluster0.vkvevwe.mongodb.net/shaurya-test",
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then(() => {
		console.log("CONNECTION FOR MONGODB OPEN!!!");
	})
	.catch((err) => {
		console.log("OH NO ERROR FOR MONGODB!!!!");
		console.log(err);
	});

app.listen(4000, () => {
	console.log("Listening to port 4000");
});
