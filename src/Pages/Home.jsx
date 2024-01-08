import React from 'react';
import HomeSlider from '../Components/Home/HomeSlider';
import { SearchBar } from '../Components/SearchBar';
import { ProductList } from '../Components/Home/ProductList';
import { Service } from '../Components/Home/Service';
import Image from '../Assets/Common/image3.jpg';
import { AboutUs } from '../Components/Home/AboutUs';
import { FeedBack } from '../Components/Home/FeedBack';

export const Home = () => {
	return (
		<div className="">
			<HomeSlider />
			<SearchBar />
			<ProductList />
			<Service />
			<div>
				<img src={Image} alt="" className="w-full" />
			</div>
			<AboutUs />
			<FeedBack />
		</div>
	);
};
