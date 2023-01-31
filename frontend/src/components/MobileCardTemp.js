import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";

export default function MobileCard(props) {

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
	} = props;
	const urlPage = `/product/${_id}`;
	return (
		<div >
			<div class="flex justify-center">
				<div class="block p-6 rounded-lg shadow-lg bg-white h-96 w-64 ">
					<img className="max-h-60" src={img_url} key={_id} alt="" />
					<h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
						{model_name}
					</h5>
					<p class="text-gray-700 text-base mb-4">{price}</p>
					<Link to={urlPage}>
						<button
							type="button"
							class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						>
							Buy
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

// url: {
	// 		type: String,
	// 		required: true,
	// 	},
	// 	img_url: {
		// 		type: String,
		// 	},
		// 	title: {
			// 		type: String,
			// 		required: true,
			// 	},
			// 	brand: { type: String },
			// 	model_name: { type: String },
			// 	price: { type: String },
			// 	star_rating: { type: String },
			// 	colour: { type: String },
			// 	storage_cap: { type: Array },
			// 	flipkart_url: { type: String },
			// 	flipkart_price: { type: String },
			// 	flipkart_star_rating: { type: String },
			// 	flipkart_no_rating: { type: String },
			
			// <Card sx={{ maxWidth: 200 }}>
			// 	<CardMedia sx={{ height: 140 }} image={img_url} title={title} />
			// 	<CardContent>
			// 		<Typography gutterBottom variant="h5" component="div">
			// 			{model_name}
			// 		</Typography>
			// 		<Typography gutterBottom variant="h5" component="div">
			// 			{brand}
			// 		</Typography>
			// 		<Typography variant="body2" color="text.secondary">
			// 			{price}
			// 		</Typography>
			// 	</CardContent>
			// 	<CardActions>
			// 		<Link to={urlPage}>
			// 			<Button variant="contained" size="small">
			// 				Buy
			// 			</Button>
			// 		</Link>
			// 		{/* <Button size="small">Learn More</Button> */}
			// 	</CardActions>
			// </Card>