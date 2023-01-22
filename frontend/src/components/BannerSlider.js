import React, { Component } from "react";
import Slider from "react-slick";
import mobileList from "../../../data/mobileList";
import Link from "next/link";
import MobileCard from "./MobileCard";

export default function BannerSlider() {
	{
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 5,
			slidesToScroll: 1,
		};
		return (
			<div className="mx-[2%]">
				<h1 className="text-2xl font-normal">Mobiles</h1>
				<Slider {...settings} className="m-8">
					{mobileList.map((mobile) => {
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
}
