import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";

import { Link } from "react-router-dom";

import { useAuthContext } from "../hooks/useAuthContext";

import mobileList from "../data/mobileList";

import MobileCard from "../components/MobileCard";

function PricingContent() {
	const { user } = useAuthContext();
	const name = user.email.split("@")[0];
	return (
		<React.Fragment>
			<GlobalStyles
				styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
			/>
			<CssBaseline />

			{/* Hero unit */}
			<Container
				disableGutters
				maxWidth="sm"
				component="main"
				sx={{ pt: 8, pb: 6 }}
			>
				<Typography variant="h4" color="text.primary" gutterBottom>
					Welcome, {name}
				</Typography>
				{/* <Typography
					variant="h5"
					align="center"
					color="text.secondary"
					component="p"
					>
					
				</Typography> */}
			</Container>
			<Container maxWidth="sm" component="main" sx={{ pb: 6 }}>
				<Link to="/favorites">
					<Typography variant="h5" color="text.primary" gutterBottom>
						Your Favorites
					</Typography>
				</Link>
			</Container>
			<Container
				maxWidth="md"
				component="footer"
				sx={{
					borderTop: (theme) => `1px solid ${theme.palette.divider}`,
					py: [3, 6],
				}}
			></Container>
		</React.Fragment>
	);
}

export default function Profile() {
	return <PricingContent />;
}
