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

export default function MobilePage() {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		fetch("/products/showdb")
			.then((res) => res.json())
			.then((jsonRes) => setProduct(jsonRes));
	}, []);

	return (
		<div className="">
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={1} className="flex justify-center">
					{product.map((mobile) => {
						return (
							<Grid className="p-3">
								<MobileCard {...mobile} />
							</Grid>
						);
					})}
				</Grid>
			</Box>
		</div>
	);
}
