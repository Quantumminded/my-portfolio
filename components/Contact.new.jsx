import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPhone, FaPaperPlane } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

const CONTACTS = [
	{
		icon: <AiFillMail size={24} />,
		label: "Email",
		value: "lukkino31@gmail.com",
		link: "mailto:lukkino31@gmail.com",
	},
	{
		icon: <FaPhone size={24} />,
		label: "Phone",
		value: "+4915731487217",
		link: "tel:+4915731487217",
	},
	{
		icon: <FaGithub size={24} />,
		label: "GitHub",
		value: "Quantumminded",
		link: "https://github.com/Quantumminded",
	},
	{
		icon: <FaLinkedin size={24} />,
		label: "LinkedIn",
		value: "lucastringhetti",
		link: "https://www.linkedin.com/in/lucastringhetti/",
	},
];

export default function Contact() {
	return (
		<div className="w-full py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<div className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-700/20 dark:to-purple-700/20 px-4 py-2 rounded-full mb-4">
						<span className="text-indigo-600 dark:text-indigo-400 font-medium">Get In Touch</span>
					</div>
					
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.1 }}
						className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
					>
						Let's <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
					</motion.h2>
					
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.2 }}
						className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
					>
						Have a project in mind or want to discuss potential opportunities? 
						I'm always open to new connections and exciting collaborations.
					</motion.p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{CONTACTS.map((item, idx) => (
						<motion.a
							key={idx}
							href={item.link}
							target={item.link.startsWith("http") ? "_blank" : undefined}
							rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: idx * 0.1 }}
							whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(108,99,255,0.15)" }}
							className="flex items-center gap-6 p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700/50 group transition-all duration-300"
						>
							<span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
								{item.icon}
							</span>
							<div>
								<div className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
									{item.label}
								</div>
								<div className="text-gray-600 dark:text-gray-300 break-all">
									{item.value}
								</div>
							</div>
						</motion.a>
					))}
				</div>

				{/* Contact Form */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.3 }}
					className="mt-20 max-w-2xl mx-auto"
				>
					<div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-700/50">
						<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
							Send me a message
						</h3>
						
						<form className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Name
									</label>
									<input
										type="text"
										className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-200"
										placeholder="Your name"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
										Email
									</label>
									<input
										type="email"
										className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-200"
										placeholder="your.email@example.com"
									/>
								</div>
							</div>
							
							<div>
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
									Subject
								</label>
								<input
									type="text"
									className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-200"
									placeholder="Project inquiry"
								/>
							</div>
							
							<div>
								<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
									Message
								</label>
								<textarea
									rows={5}
									className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-200 resize-none"
									placeholder="Tell me about your project..."
								></textarea>
							</div>
							
							<motion.button
								type="submit"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
							>
								Send Message
								<FaPaperPlane />
							</motion.button>
						</form>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
