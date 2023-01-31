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

	const { img, id, price, title } = props;
	const url = `/product/${id}`;
	return (
		<Card sx={{ maxWidth: 200 }}>
			<CardMedia sx={{ height: 140 }} image={img} title={title} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{price}
				</Typography>
			</CardContent>
			<CardActions>
				<Link to={url}>
					<Button variant="contained" size="small">
						Buy
					</Button>
				</Link>
				{/* <Button size="small">Learn More</Button> */}
			</CardActions>
		</Card>
	);
}
