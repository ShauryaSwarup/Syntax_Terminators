import React from "react";
import mobileList from "../data/mobileList";
import mobileDealAmazon from "../data/mobileDealAmazon";
import { useParams } from "react-router-dom";
import mobileDealFlipkart from "../data/mobileDealFlipkart";
import mobileDealCroma from "../data/mobileDealCroma";

function Product() {
	return (
		<div className="flex flex-row space-x-4 m-4">
			<ProductDetail />
			<div className="">
				<div className="flex space-x-4">
					<ProductDealAmazon />
					<ProductDealFlipkart />
					<ProductDealCroma />
				</div>
			</div>
		</div>
	);
}

export const ProductDetail = () => {
	const { id } = useParams();
	const product = mobileList[id - 1];
	const { id: ID, img, price, title } = product;

	return (
		<div className="max-w-md">
			<div class="flex justify-center">
				<div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
					<img src={img} key={ID} alt="" className="max-h-fit" />
					<h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
						{title}
					</h5>
					<p class="text-gray-700 text-base mb-4">Original price: {price}</p>
				</div>
			</div>
		</div>
	);
};

export const ProductDealAmazon = () => {
	const { id } = useParams();
	const dealAmazon = mobileDealAmazon[id - 1];
	const { id: ID, price, discount, dateOfChange } = dealAmazon;

	return (
		<div class="flex justify-center ">
			<div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
				<div class="py-3 px-6 border-b border-gray-300">Amazon</div>
				<div class="p-6">
					<h5 class="text-gray-900 text-xl font-medium mb-2">{price}</h5>
					<p class="text-gray-700 text-base mb-4">{discount}</p>
					<button
						type="button"
						class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
					>
						Buy
					</button>
				</div>
				<div class="py-3 px-6 border-t border-gray-300 text-gray-600">
					last updated on {dateOfChange}
				</div>
			</div>
		</div>
	);
};

export const ProductDealFlipkart = () => {
	const { id } = useParams();
	const dealAmazon = mobileDealFlipkart[id - 1];
	const { id: ID, price, discount, dateOfChange } = dealAmazon;

	return (
		<div class="flex justify-center ">
			<div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
				<div class="py-3 px-6 border-b border-gray-300">Flipkart</div>
				<div class="p-6">
					<h5 class="text-gray-900 text-xl font-medium mb-2">{price}</h5>
					<p class="text-gray-700 text-base mb-4">{discount}</p>
					<button
						type="button"
						class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
					>
						Buy
					</button>
				</div>
				<div class="py-3 px-6 border-t border-gray-300 text-gray-600">
					last updated on {dateOfChange}
				</div>
			</div>
		</div>
	);
};

export const ProductDealCroma = () => {
	const { id } = useParams();
	const dealAmazon = mobileDealCroma[id - 1];
	const { id: ID, price, discount, dateOfChange } = dealAmazon;

	return (
		<div class="flex justify-center ">
			<div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
				<div class="py-3 px-6 border-b border-gray-300">Croma</div>
				<div class="p-6">
					<h5 class="text-gray-900 text-xl font-medium mb-2">{price}</h5>
					<p class="text-gray-700 text-base mb-4">{discount}</p>
					<button
						type="button"
						class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
					>
						Buy
					</button>
				</div>
				<div class="py-3 px-6 border-t border-gray-300 text-gray-600">
					last updated on {dateOfChange}
				</div>
			</div>
		</div>
	);
};

export default Product;

// import React from "react";
// import { useParams } from "react-router-dom";

// import mobileList from "../data/mobileList";
// import mobileDealAmazon from "../data/mobileDealAmazon";
// import mobileDealFlipkart from "../data/mobileDealFlipkart";
// import mobileDealCroma from "../data/mobileDealCroma";

// function Product() {
// 	return (
// 		<div className="flex flex-row space-x-4 m-4">
// 			<ProductDetail />
// 			<div>
// 				<div className="flex space-x-4">
// 					<ProductDealAmazon />
// 					<ProductDealFlipkart />
// 					<ProductDealCroma />
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export const ProductDetail = () => {
// 	const { id } = useParams();
// 	const product = mobileList[id - 1];
// 	const { id: ID, img, price, title } = product;

// 	return (
// 		<div className="max-w-md">
// 			<div class="flex justify-center">
// 				<div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
// 					<img src={img} key={ID} alt="" className="max-h-fit" />
// 					<h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
// 						{title}
// 					</h5>
// 					<p class="text-gray-700 text-base mb-4">Original price: {price}</p>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export const ProductDealAmazon = () => {
// 	const { id } = useParams();
// 	const dealAmazon = mobileDealAmazon[id - 1];
// 	const { id: ID, price, discount, dateOfChange } = dealAmazon;

// 	return (
// 		<div class="flex justify-center ">
// 			<div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
// 				<div class="py-3 px-6 border-b border-gray-300">Amazon</div>
// 				<div class="p-6">
// 					<h5 class="text-gray-900 text-xl font-medium mb-2">{price}</h5>
// 					<p class="text-gray-700 text-base mb-4">{discount}</p>
// 					<button
// 						type="button"
// 						class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
// 					>
// 						Buy
// 					</button>
// 				</div>
// 				<div class="py-3 px-6 border-t border-gray-300 text-gray-600">
// 					last updated on {dateOfChange}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export const ProductDealFlipkart = () => {
// 	const { id } = useParams();
// 	const dealAmazon = mobileDealFlipkart[id - 1];
// 	const { id: ID, price, discount, dateOfChange } = dealAmazon;

// 	return (
// 		<div class="flex justify-center ">
// 			<div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
// 				<div class="py-3 px-6 border-b border-gray-300">Flipkart</div>
// 				<div class="p-6">
// 					<h5 class="text-gray-900 text-xl font-medium mb-2">{price}</h5>
// 					<p class="text-gray-700 text-base mb-4">{discount}</p>
// 					<button
// 						type="button"
// 						class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
// 					>
// 						Buy
// 					</button>
// 				</div>
// 				<div class="py-3 px-6 border-t border-gray-300 text-gray-600">
// 					last updated on {dateOfChange}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export const ProductDealCroma = () => {
// 	const { id } = useParams();
// 	const dealAmazon = mobileDealCroma[id - 1];
// 	const { id: ID, price, discount, dateOfChange } = dealAmazon;

// 	return (
// 		<div class="flex justify-center ">
// 			<div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
// 				<div class="py-3 px-6 border-b border-gray-300">Croma</div>
// 				<div class="p-6">
// 					<h5 class="text-gray-900 text-xl font-medium mb-2">{price}</h5>
// 					<p class="text-gray-700 text-base mb-4">{discount}</p>
// 					<button
// 						type="button"
// 						class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
// 					>
// 						Buy
// 					</button>
// 				</div>
// 				<div class="py-3 px-6 border-t border-gray-300 text-gray-600">
// 					last updated on {dateOfChange}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Product;
