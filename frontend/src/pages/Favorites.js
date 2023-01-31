import { Container, Grid } from "@mui/material";
import React from "react";
import MobileCard from "../components/MobileCard";
import favoriteItems from "../data/favoriteItems";
import FavoritesSlider from "../components/FavoritesSlider";

function Favorites() {
	return (
		<div className="">
			<div className=" max-w-[100%] min-h-fit">
				<FavoritesSlider />
			</div>
		</div>
	);
}

export default Favorites;
