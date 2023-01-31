import React, { useEffect, useState } from "react";
import axios from "axios";

function New() {
	const [products, setProducts] = useState([{
		url: "",
		title: "",
		brand: "",
		model_name: "",
		price: "",
		star_rating: "",
		no_rating: "",
		colour: "",
		storage_cap: "",
	}]);

	useEffect(() => {
		fetch("/products/showdb")
			.then((res) => res.json())
			.then((jsonRes) => setProducts(jsonRes));
	}, []);

	useEffect(() => {
		console.log(products);
	}, [products]);
	return (
		<div>
			{products.map((product) => {
				return <div>{product.title}</div>;
			})}
		</div>
	);
}

export default New;
