import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MobileCard from "../components/MobileCardTemp";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import FilterNav from "../components/FilterNav";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

function FilterResult() {
	const [products, setProducts] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const queryBrand = searchParams.get("brand");
  const queryPrice = searchParams.get("price")
	console.log(queryBrand);

	useEffect(() => {
		fetch(`/products/filter?brand=${queryBrand}&price=${queryPrice}`)
			.then((res) => res.json())
			.then((jsonRes) => setProducts(jsonRes));
	}, []);
	console.log(products);

	return (
		<div>
      <FilterNav/>
			<div>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={1}>
						{products.map((mobile) => {
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
		</div>
	);
}

export default FilterResult;