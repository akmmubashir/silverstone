import React from 'react';
import Brand from '../Assets/Icons/brand.svg';
import Types from '../Assets/Icons/types.svg';
import Location from '../Assets/Icons/location.svg';
import ArrowDown from '../Assets/Icons/arrowDown.svg';
export const SearchBar = () => {
	const data = [
		{ id: 1, title: 'Select Brand', img: Brand, options: ['BMW', 'Audi', 'Mercedes'] },
		{ id: 2, title: 'Select Location', img: Location, options: ['New York', 'Los Angeles', 'Chicago'] },
		{ id: 3, title: 'Select Types', img: Types, options: ['Sedan', 'SUV', 'Convertible'] },
	];
	return (
		<div className="bg-black p-[80px_120px] max-sm:p-[40px_20px_50px_20px]">
			<h3 className="text-[30px] font-[500] max-sm:text-[22px]">Search your relatable products</h3>
			<div className="mt-[20px] flex justify-between max-sm:flex-col">
				{data.map((item) => (
					<select className="border border-[#fff] p-[18px_12px] flex items-center me-[40px] w-full max-sm:mb-[20px]" key={item.id}>
						<img src={item.img} alt="" className="pe-[10px]" />
						<p className="text-[18px] font-[500] max-sm:text-[16px]">{item.title}</p>
						<img src={ArrowDown} alt="" className="ms-auto" />
					</select>
				))}
				<div className="flex justify-center items-center bg-[#CB8E37]">
					<button className="text-[18px] font-[600] p-[18px_42px]">Search</button>
				</div>
			</div>
		</div>
	);
};
