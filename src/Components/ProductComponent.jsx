import React from 'react';
import Rating from '../Assets/Icons/rating.svg';

export const ProductComponent = ({ data }) => {
	return (
		<div className="col-span-3 max-2xl:col-span-4 max-sm:col-span-12">
			<div className="relative group">
				<img src={data?.img} alt="" className="w-full" />
				<div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-[30px] max-sm:p-[20px]">
					<div>
						<p className="text-black text-[24px] max-sm:text-[20px] font-[600]">{data?.priceRange} AED</p>
						<p className="text-black text-[18px] mt-[10px] max-sm:mt-[5px] max-sm:text-[16px] line-clamp-4">{data?.desc}</p>
					</div>
					<div className="flex flex-col">
						<button className="bg-black py-[16px] max-sm:py-[12px]">View Details</button>
						<button className="bg-[#CB8E37] py-[16px] max-sm:py-[12px] mt-[16px] max-sm:mt-[12px]">Book Now</button>
					</div>
				</div>
			</div>
			<div className="flex mt-[10px] items-center">
				<p className="text-[20px] max-sm:text-[18px] font-[500] me-auto">{data?.title}</p>
				<img src={Rating} alt="" />
			</div>
		</div>
	);
};
