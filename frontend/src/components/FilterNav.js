import { React, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
const ListBrandDivs = ({ brand, onChange }) => {
	return (
		<>
			<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
				<div class="flex items-center pl-3">
					<input
						id={brand}
						type="checkbox"
						value={brand}
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
						// onChange={(event) => addFilter(event)}
						onChange={onChange}
					/>
					<label
						for={brand}
						class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>
						{brand}
					</label>
				</div>
			</li>
		</>
	)
}
const ListPriceDivs = () => {}
function FilterNav() {
	const [brand, setBrand] = useState([])
	console.log(brand)

	const handleCheckboxChangeBrand = (event) => {
		const itemValue = event.target.value
		if (event.target.checked) {
			setBrand([...brand, itemValue])
		} else {
			setBrand(brand.filter((i) => i !== itemValue))
		}
	}

	const [price, setPrice] = useState([])
	console.log(price)

	const handleCheckboxChangePrice = (event) => {
		const itemValue = event.target.value
		if (event.target.checked) {
			setPrice([itemValue])
		} else {
			setPrice(price.filter((i) => i !== itemValue))
		}
	}

	const queryBrand = brand
		.map((item) => `${encodeURIComponent(item)}`)
		.join(',')

	const queryPrice = price
		.map((item) => `${encodeURIComponent(item)}`)
		.join(',')

	const url = `/filter?brand=${queryBrand}&price=${queryPrice}`
	const applyFilters = (e) => {
		e.preventDefault()
		window.location.href = url
		console.log(url)
	}
	return (
		<>
			<button
				data-drawer-target="sidebar-multi-level-sidebar"
				data-drawer-toggle="sidebar-multi-level-sidebar"
				aria-controls="sidebar-multi-level-sidebar"
				type="button"
				class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			>
				<span class="sr-only">Open sidebar</span>
				<svg
					class="w-6 h-6"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						clip-rule="evenodd"
						fill-rule="evenodd"
						d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
					></path>
				</svg>
			</button>

			<aside
				id="sidebar-multi-level-sidebar"
				class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
				aria-label="Sidebar"
			>
				<div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
					<form onSubmit={applyFilters}>
						<div
							id="mega-menu-full-dropdown"
							class="mt-1 mb-[5%] border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
						>
							<div class="flex max-w-screen-xl flex-col px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
								<ul>
									<li>
										<h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
											Brand
										</h3>
										<ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
											<ListBrandDivs
												brand="Redmi"
												onChange={
													handleCheckboxChangeBrand
												}
											/>
											<ListBrandDivs
												brand="Vivo"
												onChange={
													handleCheckboxChangeBrand
												}
											/>
											<ListBrandDivs
												brand="Apple"
												onChange={
													handleCheckboxChangeBrand
												}
											/>
											<ListBrandDivs
												brand="Samsung"
												onChange={
													handleCheckboxChangeBrand
												}
											/>
										</ul>
									</li>
								</ul>
								<ul>
									<h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
										Price
									</h3>
									<ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
										<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
											<div class="flex items-center pl-3">
												<input
													id="list-radio-license"
													type="radio"
													value="0to9999"
													name="list-radio"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
													onChange={
														handleCheckboxChangePrice
													}
												/>
												<label
													for="list-radio-license"
													class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
												>
													less than 9,999
												</label>
											</div>
										</li>
										<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
											<div class="flex items-center pl-3">
												<input
													id="list-radio-id"
													type="radio"
													value="10000to19999"
													name="list-radio"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
													onChange={
														handleCheckboxChangePrice
													}
												/>
												<label
													for="list-radio-id"
													class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
												>
													10,000 to 19,999
												</label>
											</div>
										</li>
										<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
											<div class="flex items-center pl-3">
												<input
													id="list-radio-millitary"
													type="radio"
													value="20000to29999"
													name="list-radio"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
													onChange={
														handleCheckboxChangePrice
													}
												/>
												<label
													for="list-radio-millitary"
													class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
												>
													20,000 to 29,999
												</label>
											</div>
										</li>
										<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
											<div class="flex items-center pl-3">
												<input
													id="list-radio-passport"
													type="radio"
													value="30000to150000"
													name="list-radio"
													class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
													onChange={
														handleCheckboxChangePrice
													}
												/>
												<label
													for="list-radio-passport"
													class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
												>
													more than 30,000
												</label>
											</div>
										</li>
									</ul>
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
				</div>
			</aside>
		</>
	)
}

export default FilterNav
