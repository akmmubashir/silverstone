import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';

export const FeedBack = () => {
	var settings = {
		dots: false,
		speed: 3500,
		autoplaySpeed: 1500,
		autoplay: true,
		infinite: true,
		fade: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 1445,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};
	const data = [
		{ id: 1, title: '', desc: '' },
		{ id: 2, title: '', desc: '' },
		{ id: 3, title: '', desc: '' },
		{ id: 4, title: '', desc: '' },
		{ id: 5, title: '', desc: '' },
		{ id: 6, title: '', desc: '' },
	];
	return (
		<div className="p-[80px_0_80px_120px] max-sm:p-[50px_0_50px_20px]">
			<h2 className="text-[#E8E8E8] text-[46px] max-sm:text-[22px] font-[400] leading-[58px] max-sm:leading-[30px] mb-[60px] max-sm:mb-[30px]">What our client says</h2>

			<Slider {...settings} className="">
				{data.map((item) => (
					// <div className='px-[20px]'>
					<div className="bg-[#0F0F0F] p-[26px_30px] max-w-[320px] max-sm:max-w-full" key={item.id}>
						<h3 className="mb-[24px] text-[26px] font-[500]">Best Services</h3>
						<p className="text-[18px] font-[400] max-sm:text-[16px]">“{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'}”</p>
						<p className="text-[18px] font-[400] max-sm:text-[16px] text-[#CB8E37] text-end">Adam Jhon</p>
					</div>
					// </div>
				))}
			</Slider>
		</div>
	);
};
