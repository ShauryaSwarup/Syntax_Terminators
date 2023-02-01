import * as React from "react";

import comparazonLogo from "../../images/final-logo.png";

export default function Footer() {
	return (
		<div clas>
			<footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
				<div class="sm:flex sm:items-center sm:justify-between">
					<a href="/" className="flex items-center">
						<img
							src={comparazonLogo}
							width={150}
							height={90}
							alt="comparazon"
							className="pt-2"
						/>
					</a>
					<ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
						<li>
							<a href="#" class="mr-4 hover:underline md:mr-6 ">
								About
							</a>
						</li>
						<li>
							<a href="#" class="mr-4 hover:underline md:mr-6">
								Privacy Policy
							</a>
						</li>
						<li>
							<a href="#" class="mr-4 hover:underline md:mr-6 ">
								Licensing
							</a>
						</li>
						<li>
							<a href="#" class="hover:underline">
								Contact
							</a>
						</li>
					</ul>
				</div>
				<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
					
					<a href="https://flowbite.com/" class="hover:underline">
						Comparazon™
					</a>
					. All Rights Reserved.
				</span>
			</footer>
		</div>
	);
}