import { React, useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MobileCard from "./MobileCardTemp";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

function FormRow() {
	return (
		<React.Fragment>
			<Grid item xs={4}>
				<Item>Item</Item>
			</Grid>
			<Grid item xs={4}>
				<Item>Item</Item>
			</Grid>
			<Grid item xs={4}>
				<Item>Item</Item>
			</Grid>
		</React.Fragment>
	);
}

export default function MobilePage() {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		fetch("/products/showdb")
			.then((res) => res.json())
			.then((jsonRes) => setProduct(jsonRes));
	}, []);

	return (
		<div>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={1}>
					{product.map((mobile) => {
						return (
							<Grid>
								<Item>
									<MobileCard {...mobile} />
								</Item>
							</Grid>
						);
					})}
				</Grid>
			</Box>
		</div>
	);
}
