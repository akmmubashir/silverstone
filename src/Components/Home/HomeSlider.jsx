import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import Slide1 from '../../Assets/Slider/slide1.png';
import Slide2 from '../../Assets/Slider/slide2.png';
import Slide3 from '../../Assets/Slider/slide3.png';

export default function HomeSlider() {
	var settings = {
		dots: false,
		speed: 3500,
		autoplaySpeed: 1500,
		autoplay: true,
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	const data = [
		{ id: 1, title: '', img: Slide1 },
		{ id: 2, title: '', img: Slide2 },
		{ id: 3, title: '', img: Slide3 },
	];
	return (
		<div className="overflow-hidden">
				<Slider {...settings} className="" >
			{data.map((item) => (
					<div className="relative" key={item?.id}>
						<img src={item.img} alt="" className="w-full" />
						<h2 className="absolute z-10 bottom-[40%] left-[60px] text-[70px] max-2xl:text-[60px] max-sm:text-[20px] font-[700] max-sm:bottom-[20px] max-sm:left-[20px]">
							Drive in Style:
							<br /> Luxury Car Rentals
						</h2>
					</div>
			))}
				</Slider>
		</div>
	);
}
