import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

const CONTACTS = [
	{
		icon: <AiFillMail size={22} />,
		label: "Email",
		value: "lukkino31@gmail.com",
		link: "mailto:lukkino31@gmail.com",
	},
	{
		icon: <FaPhone size={22} />,
		label: "Phone",
		value: "+4915731487217",
		link: "tel:+4915731487217",
	},
	{
		icon: <FaGithub size={22} />,
		label: "GitHub",
		value: "Quantumminded",
		link: "https://github.com/Quantumminded",
	},
	{
		icon: <FaLinkedin size={22} />,
		label: "LinkedIn",
		value: "lucastringhetti",
		link: "https://www.linkedin.com/in/lucastringhetti/",
	},
];

export default function Contact() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
			className="max-w-xl mx-auto bg-white/90 dark:bg-gray-800/90 rounded-3xl shadow-xl p-8 border-l-8 border-pink-500"
		>
			<motion.h2
				initial={{ opacity: 0, x: -20 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7, delay: 0.2 }}
				className="h2 font-bold text-pink-500 mb-4"
			>
				Contact Me
			</motion.h2>
			<form className="flex flex-col gap-4">
				{CONTACTS.map((item, idx) => (
					<a
						key={idx}
						href={item.link}
						target={item.link.startsWith("http") ? "_blank" : undefined}
						rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
						className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 group"
					>
						<span className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-200 group-hover:bg-teal-200 dark:group-hover:bg-teal-800 transition-colors">
							{item.icon}
						</span>
						<div>
							<div className="text-lg font-semibold text-gray-900 dark:text-white">
								{item.label}
							</div>
							<div className="text-gray-600 dark:text-gray-300 text-sm break-all">
								{item.value}
							</div>
						</div>
					</a>
				))}
				<motion.button
					type="submit"
					whileHover={{
						scale: 1.05,
						backgroundColor: "#6C63FF",
						color: "#fff",
					}}
					className="a mt-4 px-6 py-3 rounded-full bg-pink-500 text-white font-semibold shadow-lg transition-all duration-300"
				>
					Send Message
				</motion.button>
			</form>
		</motion.div>
	);
}
