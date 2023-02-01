import React from "react";
import comparazonLogo from "../../images/final-logo.png";

function NavbarOnlyLogo() {
	return (
		<div>
			<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
				<div className="container flex justify-center">
					<a href="/" className="flex space-between ">
						<img
							src={comparazonLogo}
							width={200}
							height={120}
							alt="comparazon"
							className="pt-2"
						/>
					</a>
				</div>
			</nav>
		</div>
	);
}

export default NavbarOnlyLogo;
