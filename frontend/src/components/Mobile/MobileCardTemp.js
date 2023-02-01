import * as React from "react";
import { Link } from "react-router-dom";

export default function MobileCard(props) {
	const { _id, img_url, model_name, price } = props;
	const urlPage = `/product/${_id}`;
	return (
		<div>
			<div class="flex justify-center">
				<div class="transform block p-6 rounded-lg shadow-xl bg-white h-96 w-64 transition duration-200 hover:scale-110">
					<img className="max-h-60" src={img_url} key={_id} alt="" />
					<h5 class="truncate text-gray-900 text-xl leading-tight font-medium mb-2">
						{model_name}
					</h5>
					<p class="text-gray-700 text-base mb-4">{price}</p>
					<Link to={urlPage}>
						<button
							type="button"
							class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						>
							Buy
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
