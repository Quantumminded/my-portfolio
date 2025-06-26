import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

const CONTACTS = [
  {
    icon: <AiFillMail size={22} />, label: "Email", value: "lukkino31@gmail.com", link: "mailto:lukkino31@gmail.com",
  },
  {
    icon: <FaPhone size={22} />, label: "Phone", value: "+4915731487217", link: "tel:+4915731487217",
  },
  {
    icon: <FaGithub size={22} />, label: "GitHub", value: "Quantumminded", link: "https://github.com/Quantumminded",
  },
  {
    icon: <FaLinkedin size={22} />, label: "LinkedIn", value: "lucastringhetti", link: "https://www.linkedin.com/in/lucastringhetti/",
  },
];

const Contact = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-teal-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-teal-900" id="contact">
      <div className="max-w-2xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 text-center tracking-tight">Contact Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 text-center max-w-xl">Feel free to reach out for collaborations, freelance work, or just to say hi!</p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
          {CONTACTS.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target={item.link.startsWith('http') ? '_blank' : undefined}
              rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 group"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-200 group-hover:bg-teal-200 dark:group-hover:bg-teal-800 transition-colors">
                {item.icon}
              </span>
              <div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">{item.label}</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm break-all">{item.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
