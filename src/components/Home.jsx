import React from "react";
import HeroImage from "../assets/heroimage.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
	return (
		<div
			name="home"
			className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
		>
			<div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
				<div className="flex flex-col justify-center h-full">
					<h2 className="text-white text-4xl font-bold sm:text-6xl">
						I'm a Professional Mechanical Engineer
					</h2>
					<p className="text-gray-500 py-4 max-w-md text-1xl">
						A mechanical engineer, graduated from PIEAS University, with a
						significant interest in designing things. Have a professional grip
						on design and analysis software like SolidWorks, AutoCAD, Ansys, and
						Creo. Willing to learn new and exciting things from others.
					</p>
					<div>
						<Link
							to="portfolio"
							smooth
							duration={500}
							className="group flex text-white w-fit px-6 py-3 my-2 items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
						>
							Portfolio
							<span className="group-hover:rotate-90 duration-300">
								<MdKeyboardArrowRight size={25} className="ml-1" />
							</span>
						</Link>
					</div>
				</div>
				<div>
					<img
						src={HeroImage}
						alt="mine"
						className="rounded-2xl mx-auto w-2/3 md:w-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
