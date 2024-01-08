import React, { useState } from 'react';
import { ProductComponent } from '../ProductComponent';
import { initialData } from '../../utils/data';

export const ProductList = () => {
	const luxuryCars = initialData.filter((item) => item.category === 'Luxury');
	const [products, setProducts] = useState(luxuryCars);
	const [activeCategory, setActiveCategory] = useState('Luxury');

	const filterCategory = (category) => {
		const filteredProducts = initialData.filter((item) => item.category === category);
		setProducts(filteredProducts);
		setActiveCategory(category);
	};

	const buttonClass = (category) =>
		`p-[14px_25px] max-sm:p-[10px_16px] text-[22px] font-[500] me-[20px] hover:bg-[#CB8E37] hover:text-white max-sm:text-[16px] max-sm:mb-[20px] ${activeCategory === category ? 'bg-[#CB8E37] text-white' : 'bg-white text-black'}`;
	return (
		<div className="p-[80px_120px] max-sm:p-[50px_20px]">
			<div className="mb-[80px] max-sm:mb-[20px]">
				<button onClick={() => filterCategory('Luxury')} className={buttonClass('Luxury')}>
					Luxury Cars
				</button>
				<button onClick={() => filterCategory('Convertible')} className={buttonClass('Convertible')}>
					Convertible Cars
				</button>
				<button onClick={() => filterCategory('Sports')} className={buttonClass('Sports')}>
					Sports Cars
				</button>
			</div>
			<div className="grid grid-cols-12 gap-[60px_30px] max-sm:gap-y-[40px] max-sm:gap-x-0">
				{products?.map((item) => (
					<ProductComponent  key={item.id} data={item} />
				))}
			</div>
		</div>
	);
};
