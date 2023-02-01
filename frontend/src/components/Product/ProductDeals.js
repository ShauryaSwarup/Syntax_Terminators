import { Link } from "react-router-dom";

export const ProductDealAmazon = (props) => {
	const { _id: _ID, url, price, flipkart_price } = props;

	return (
		<div class="flex justify-center ">
			<div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
				<div class="py-3 px-6 border-b border-gray-300">Amazon</div>
				<div class="p-6">
					{/* <p class="text-gray-700 text-base mb-4">{brand}</p> */}
					<div>{flipkart_price>price? <div>Best Deal</div> : ""}</div>
					<h5 class="text-gray-900 text-xl font-medium mb-2">{price}</h5>
                    <a href={url}>
					<button
						type="button"
						class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
					>
						Buy
					</button>
                    </a>
				</div>
				
			</div>
		</div>
	);
};

export const ProductDealFlipkart = (props) => {
	const {
		price,
        flipkart_url,
        flipkart_price,
	} = props;


	return (
		<div class="flex justify-center ">
			<div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
				<div class="py-3 px-6 border-b border-gray-300">Flipkart</div>
				<div class="p-6">
					{/* <p class="text-gray-700 text-base mb-4">{brand}</p> */}
					<div>{flipkart_price < price ? <div>Best Deal</div> : ""}</div>
					<h5 class="text-gray-900 text-xl font-medium mb-2">
						{flipkart_price}
					</h5>
					<a href={flipkart_url}>
						<button
							type="button"
							class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						>
							Buy
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};
