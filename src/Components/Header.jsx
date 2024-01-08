import React from 'react';
import Logo from '../Assets/Common/logo.png';
import { Link } from 'react-router-dom';

function Header() {
	const data = [
		{ id: 1, title: 'Home', link: '/' },
		{ id: 2, title: 'Cars', link: '/' },
		{ id: 3, title: 'Booking', link: '/' },
		{ id: 4, title: 'Features', link: '/' },
		{ id: 5, title: 'Contact', link: '/' },
	];
	return (
		<div className="bg-white">
			<div className="bg-[#1a1a1a] flex p-[10px] items-center max-sm:hidden">
				<div>
					<a href="mailto:test@gmail.com" className="text-[18px] font-[500] me-[20px]">
						test@gmail.com
					</a>
					<a href="tel:+971566797822" className="text-[18px] font-[500]">
						+971 566 797822
					</a>
				</div>
				<div className="ms-auto">
					<a href="/about" className="text-[18px] font-[500] me-[20px]">
						About
					</a>
					<a href="tel:+971566797822" className="text-[18px] font-[500]">
						Support
					</a>
				</div>
			</div>
			<div className="bg-white flex px-[20px] items-center">
				<img src={Logo} alt="" className="h-[100px] max-sm:h-[60px]" />
				<div className="ms-auto flex max-sm:hidden">
					{data.map((item) => (
						<Link to={item?.link} key={item?.id} className="text-[20px] text-[#000] font-[500] me-[20px]">
							{item?.title}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default Header;
