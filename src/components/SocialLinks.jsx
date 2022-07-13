import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
	const links = [
		{
			id: 1,
			child: (
				<>
					Linkedin <FaLinkedin size={30} />
				</>
			),
			href: "https://www.linkedin.com/in/umarasif737/",
			style: "rounded-tr-md",
		},
		{
			id: 2,
			child: (
				<>
					Github <FaGithub size={30} />
				</>
			),
			href: "https://www.Github.com/umarasif737/",
		},
		{
			id: 3,
			child: (
				<>
					Mail <HiOutlineMail size={30} />
				</>
			),
			href: "mailto:umarasif737@gmail.com",
		},
		{
			id: 4,
			child: (
				<>
					Resume <BsFillPersonLinesFill size={30} />
				</>
			),
			href: "/Resume.pdf",
			style: "rounded-br-md",
			download: true,
		},
	];

	return (
		<div className="hidden top-[35%] left-0 fixed lg:flex flex-col">
			<ul>
				{links.map(({ id, child, style, href, download }) => (
					<li
						key={id}
						className={
							"bg-gray-500 flex px-4 ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-md justify-between items-center w-40 h-14" +
							" " +
							style
						}
					>
						<a
							href={href}
							className="flex justify-between items-center w-full text-white"
							download={download}
							target="_blank"
							rel="noreferrer"
						>
							{child}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SocialLinks;
