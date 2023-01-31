import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MobileCard from "../components/MobileCardTemp";
import ProductDetails from "../components/ProductDetails";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default function Search() {
	const [products, setProducts] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get("searchQuery");

	console.log(query);

	useEffect(() => {
		fetch(`/products/search?searchQuery=${query}`)
			.then((res) => res.json())
			.then((jsonRes) => setProducts(jsonRes));
	}, []);
	console.log(products);
	return (
		<div>
			{products.map((product) => (
				<Grid item xs={3} sm={4} md={4}>
					<MobileCard {...product} />
					{/* <div>1</div> */}
				</Grid>
			))}
		</div>
	);
}
