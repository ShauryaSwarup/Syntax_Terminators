import { React, useEffect, useState } from 'react'
import Slider from 'react-slick'
import mobileList from '../data/mobileList'
import MobileCardTemp from './MobileCardTemp'

export default function MobileSlider() {
	const [product, setProduct] = useState([])

	useEffect(() => {
		fetch('/products/showdb')
			.then((res) => res.json())
			.then((jsonRes) => setProduct(jsonRes))
	}, [])

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
	}
	return (
		<div className="m-4">
			<h1 className="text-2xl mb-4">Mobiles</h1>
			<Slider {...settings} className="m-8">
				{product.map((mobile) => {
					const { _id } = mobile
					return (
						<div>
							{/* <MobileCard {...mobile} /> */}
							<MobileCardTemp {...mobile} />
						</div>
					)
				})}
			</Slider>
		</div>
	)
}
