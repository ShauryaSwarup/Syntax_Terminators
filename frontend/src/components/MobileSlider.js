import React from "react";
import Slider from "react-slick";
import mobileList from "../data/mobileList";
import MobileCard from "./MobileCard";

export default function MobileSlider() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
	};
	return (
		<div className="m-4">
			<h1 className="text-2xl mb-4">Mobiles</h1>
			<Slider {...settings} className="m-8">
				{mobileList.map((mobile) => {
					const { id } = mobile;
					return (
						<div>
							<MobileCard {...mobile} />
						</div>
					);
				})}
			</Slider>
		</div>
	);
}
