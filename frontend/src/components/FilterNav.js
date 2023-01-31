import { React, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function FilterNav() {
	const [brand, setBrand] = useState([]);
	console.log(brand);

	const handleCheckboxChangeBrand = (event) => {
		const itemValue = event.target.value;
		if (event.target.checked) {
			setBrand([...brand, itemValue]);
		} else {
			setBrand(brand.filter((i) => i !== itemValue));
		}
	};

	const [price, setPrice] = useState([]);
	console.log(price);

	const handleCheckboxChangePrice = (event) => {
		const itemValue = event.target.value;
		if (event.target.checked) {
			setPrice([...price, itemValue]);
		} else {
			setPrice(price.filter((i) => i !== itemValue));
		}
	};

	const queryBrand = brand
		.map((item) => `${encodeURIComponent(item)}`)
		.join(",");

	const queryPrice = price
		.map((item) => `${encodeURIComponent(item)}`)
		.join(",");

	const url = `/filter?brand=${queryBrand}&price=${queryPrice}`;
	const applyFilters = (e) => {
		e.preventDefault();
		window.location.href = url;
		console.log(url);
	};
	return (
		<div>
			<nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
				<div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
					<button
						data-collapse-toggle="mega-menu-full"
						type="button"
						class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="mega-menu-full"
						aria-expanded="false"
					>
						<span class="sr-only">Open main menu</span>
						<svg
							class="w-6 h-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							></path>
						</svg>
					</button>
					<div
						id="mega-menu-full"
						class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
					>
						<ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li>
								<button
									id="mega-menu-full-dropdown-button"
									data-collapse-toggle="mega-menu-full-dropdown"
									class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
								>
									Filters{" "}
									<svg
										class="w-5 h-5 ml-1"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clip-rule="evenodd"
										></path>
									</svg>
								</button>
							</li>
						</ul>
					</div>
				</div>
				<form onSubmit={applyFilters}>
					<div
						id="mega-menu-full-dropdown"
						class="mt-1 mb-[5%] border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
					>
						<div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
							<ul>
								<li>
									<h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
										Brand
									</h3>
									<ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
										<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
											<div class="flex items-center pl-3">
												<input
													id="Redmi"
													type="checkbox"
													value="Redmi"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
													// onChange={(event) => addFilter(event)}
													onChange={handleCheckboxChangeBrand}
												/>
												<label
													for="Redmi"
													class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
												>
													Redmi
												</label>
											</div>
										</li>
										<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
											<div class="flex items-center pl-3">
												<input
													id="Vivo"
													type="checkbox"
													value="Vivo"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
													// onChange={(event) => addFilter(event)}
													onChange={handleCheckboxChangeBrand}
												/>
												<label
													for="Vivo"
													class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
												>
													Vivo
												</label>
											</div>
										</li>
										<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
											<div class="flex items-center pl-3">
												<input
													id="Apple"
													type="checkbox"
													value="Apple"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
													// onChange={(event) => addFilter(event)}
													onChange={handleCheckboxChangeBrand}
												/>
												<label
													for="Apple"
													class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
												>
													Apple
												</label>
											</div>
										</li>
										<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
											<div class="flex items-center pl-3">
												<input
													id="Samsung"
													type="checkbox"
													value="Samsung"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
													// onChange={(event) => addFilter(event)}
													onChange={handleCheckboxChangeBrand}
												/>
												<label
													for="Samsung"
													class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
												>
													Samsung
												</label>
											</div>
										</li>
									</ul>
								</li>
							</ul>

							<ul>
								<li>
									<h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
										Price
									</h3>
									<ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
										<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
											<div class="flex items-center pl-3">
												<input
													id="0to9999"
													type="checkbox"
													value="0to9999"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
													// onChange={(event) => addFilter(event)}
													onChange={handleCheckboxChangePrice}
												/>
												<label
													for="0to9999"
													class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
												>
													less than 9,999
												</label>
											</div>
										</li>
										<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
											<div class="flex items-center pl-3">
												<input
													id="10000to19999"
													type="checkbox"
													value="10000to19999"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
													// onChange={(event) => addFilter(event)}
													onChange={handleCheckboxChangePrice}
												/>
												<label
													for="10000to19999"
													class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
												>
													10000 to 19999
												</label>
											</div>
										</li>
										<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
											<div class="flex items-center pl-3">
												<input
													id="20000to29999"
													type="checkbox"
													value="20000to29999"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
													// onChange={(event) => addFilter(event)}
													onChange={handleCheckboxChangePrice}
												/>
												<label
													for="20000to29999"
													class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
												>
													20000 to 29999
												</label>
											</div>
										</li>
										<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
											<div class="flex items-center pl-3">
												<input
													id="30000to100000"
													type="checkbox"
													value="30000to100000"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
													// onChange={(event) => addFilter(event)}
													onChange={handleCheckboxChangePrice}
												/>
												<label
													for="30000to100000"
													class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
												>
													more than 30000
												</label>
											</div>
										</li>
									</ul>
								</li>
							</ul>

							<button
								className="m-6 max-w-[25%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
								type="submit"
							>
								Apply Filters
							</button>
						</div>
					</div>
				</form>
			</nav>
		</div>
	);
}

export default FilterNav;
