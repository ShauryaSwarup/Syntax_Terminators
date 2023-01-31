import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useAuthContext } from "../hooks/useAuthContext";

import ProductDetails from "../components/ProductDetails";
import {
	ProductDealAmazon,
	ProductDealFlipkart,
} from "../components/ProductDeals";
import ProductInfo from "../components/ProductInfo";

import axios from "axios";

function Product() {
	const [product, setProduct] = useState();
	const [favorite, setFavorite] = useState([]);

	const { user } = useAuthContext();
	const { _id } = useParams();

	useEffect(() => {
		fetch(`/products/showPhone/${_id}`)
			.then((res) => res.json())
			.then((jsonRes) => setProduct(jsonRes));
	}, []);

	const addToFavorites = () => {
		if (!user) {
			console.log("please sign in to add to favorites");
			return;
		}
		setFavorite(favorite.push(product));
		console.log(product);

		fetch("/user/favorites", {
			method: "POST",
			body: JSON.stringify(product),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`,
			},
		}).then((e) => {
			console.log(e);
		});
	};

	return (
		<div className="flex flex-col mx-[10%] my-[5%] space-y-[5%]">
			<div className="flex flex-row space-x-4 justify-evenly">
				<ProductDetail />
				<div className="">
					<div className="flex space-x-4">
						<ProdAmazon />
						<ProdFlipkart />
					</div>
				</div>
				<button onClick={addToFavorites}>Add to favorites</button>
			</div>
			<div>
				<ProductInfoTable />
			</div>
		</div>
	);
}

export const ProductDetail = () => {
	const [product, setProduct] = useState();

	const { _id } = useParams();

	useEffect(() => {
		fetch(`/products/showPhone/${_id}`)
			.then((res) => res.json())
			.then((jsonRes) => setProduct(jsonRes));
	}, []);

	return (
		<div className="max-w-md">
			<ProductDetails {...product} />
		</div>
	);
};

const ProdAmazon = () => {
	const [product, setProduct] = useState();

	const { _id } = useParams();

	useEffect(() => {
		fetch(`/products/showPhone/${_id}`)
			.then((res) => res.json())
			.then((jsonRes) => setProduct(jsonRes));
	}, []);

	return (
		<div className="max-w-md">
			<ProductDealAmazon {...product} />
		</div>
	);
};

const ProdFlipkart = () => {
	const [product, setProduct] = useState();

	const { _id } = useParams();

	useEffect(() => {
		fetch(`/products/showPhone/${_id}`)
			.then((res) => res.json())
			.then((jsonRes) => setProduct(jsonRes));
	}, []);

	return (
		<div className="max-w-md">
			<ProductDealFlipkart {...product} />
		</div>
	);
};

const ProductInfoTable = () => {
	const [product, setProduct] = useState();

	const { _id } = useParams();

	useEffect(() => {
		fetch(`/products/showPhone/${_id}`)
			.then((res) => res.json())
			.then((jsonRes) => setProduct(jsonRes));
	}, []);

	return (
		<div className="">
			<ProductInfo {...product} />
		</div>
	);
};

export default Product;
