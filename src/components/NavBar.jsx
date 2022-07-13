import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
	const [bar, setBar] = useState(false);
	function sideBar() {
		console.log("clix");
		setBar(!bar);
		console.log(bar);
	}

	const links = [
		{
			id: 1,
			link: "home",
		},
		{
			id: 2,
			link: "about",
		},
		{
			id: 3,
			link: "portfolio",
		},
		{
			id: 4,
			link: "experience",
		},
		{
			id: 5,
			link: "contact",
		},
	];
	return (
		<div className="bg-black text-white w-full h-20 justify-between flex items-center fixed px-4">
			<div>
				<h1 className="text-5xl ml-2 font-signature">Umar</h1>
			</div>

			<ul className="hidden md:flex">
				{links.map(({ id, link }) => (
					<li
						key={id}
						className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 capitalize hover:text-white delay-200"
					>
						<Link to={link} smooth duration={500}>
							{link}
						</Link>
					</li>
				))}
			</ul>

			<div
				onClick={sideBar}
				className="px-4 z-10 text-gray-500 cursor-pointer md:hidden"
			>
				{bar ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>

			{bar && (
				<ul className="flex flex-col bg-black w-full h-screen justify-center items-center top-0 left-0 absolute">
					{links.map(({ id, link }) => (
						<li
							key={id}
							className="px-4 cursor-pointer text-gray-500 hover:scale-105 capitalize hover:text-white delay-200 py-6 text-4xl"
						>
							<Link
								onClick={() => setBar(!bar)}
								to={link}
								smooth
								duration={500}
							>
								{link}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default NavBar;
