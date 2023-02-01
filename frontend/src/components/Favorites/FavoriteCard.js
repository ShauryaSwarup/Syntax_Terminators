import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MobileCard(props) {
	const { user } = useAuthContext();

	const {
		_id,
		url,
		img_url,
		title,
		brand,
		model_name,
		price,
		star_rating,
		no_rating,
		colour,
		storage_cap,
		flipkart_url,
		flipkart_price,
		flipkart_star_rating,
		flipkart_no_rating,
	} = props;
	const urlPage = `/product/${_id}`;

	const removeFromFavorites = () => {
		const requestOptions = {
			method: "DELETE",
			body: JSON.stringify(props),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${user.token}`,
			},
		};
		fetch("user/favorites", requestOptions).then((prod) => console.log(prod));
		window.location.href = "/favorites";
	};

	const bestPrice = (price, flipkart_price) => {
		if (flipkart_price) {
			if (price < flipkart_price) return price;
			else return flipkart_price;
		} else return price;
	};

	return (
		<div>
			<div class="flex justify-center">
				<div class="block p-6 rounded-lg shadow-lg bg-white h-96 w-64 ">
					<img className="max-h-60" src={img_url} key={_id} alt="" />
					<h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
						{model_name}
					</h5>
					<p className="text-gray-700 text-base mb-4">
						Best Price: {bestPrice(price, flipkart_price)}
					</p>
					<Link to={urlPage}>
						<button
							type="button"
							class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						>
							Buy
						</button>
					</Link>
					<button
						type="button"
						className=" mt-[2%] inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						onClick={removeFromFavorites}
					>
						Remove from Favorites
					</button>
				</div>
			</div>
		</div>
	);
}
