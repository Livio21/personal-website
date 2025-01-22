import { motion } from "framer-motion";
import { useState } from "react";

function PortofolioPage() {
  const projects = [
    {
      title: "Vue Covid App",
      description:
        "A web application based on VueJS, Colorful CMS and Tailwind CSS.",
      // imageUrl: "vue_covid_app.png", // Placeholder
      link: "https://vue-covidapp.vercel.app/#/",
      tech: ["VueJS", "Vuex", "Tailwind CSS", "ColorfulCMS", "Vercel"],
    },
    {
      title: "ITSA System",
      description:
        "ITSA or Interactive Teaching and Assessment System is a Learning/Student Management System created on VueJS 3 & Firebase and Tailwind CSS for styling.",
      // imageUrl: "itsa_system.png", // Placeholder
      link: "https://itsa-vue.web.app/#/login",
      tech: ["VueJS", "Firebase", "Vuex", "Tailwind CSS", "Vercel"],
    },
    {
      title: "Personal Website",
      description:
        "This is my personal website currently in development. It uses ReactJS and TailwindCSS plus in the future a backend to manage information possibly a personal blog.",
      // imageUrl: "personal_website.png", // Placeholder
      link: "https://livio-macaj.vercel.app/",
      tech: ["ReactJS", "Tailwind CSS", "Supabase"],
    },
    {
      title: "LMS on ODOO",
      description: "A Learning Management System developed on ODOO Framework.",
      // imageUrl: "lms_odoo.png", // Placeholder
      tech: ["ODoo", "PostgresSQL"],
    },
    {
      title: "Albanian Content Safety Checker",
      description:
        "This chrome extension checks the content of a webpage for unsafe text in Albanian. It uses a model finetuned on a dataset of labeled data.",
      // imageUrl: "albanian_content_safety_checker.png", // Placeholder
      tech: ["Javascript", "BERT", "Language Transformer", "Python"],
    },
  ];
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      exit={{
        opacity: 1,
      }}
      className="p-10 flex flex-col gap-4 w-full relative"
    >
      <h1 className="dark:text-white text-6xl font-bold ">
        Works.
      </h1>
      <div className="bg-white/20 p-10 rounded-3xl w-full flex flex-col gap-5 relative">
      <div className="w-full relative ">
        <div className="flex flex-col gap-5 w-full h-full overflow-hidden relative ">
          {projects.map((project, index) => (
            <motion.div
            style={{ position: 'relative' }}
              key={index}
              className="h-full relative flex flex-col  group  hover:cursor-pointer  hover:scale-105 overflow-hidden  transition-smooth-magnetic-linear hover:bg-gray-500/10 "
              transition={
                index === selectedCard ? { duration: 0.7, ease: "easeIn" } : ""
              }
              onClick={index === selectedCard ? null : () => handleCardClick(index)}
              initial={{ opacity: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.05 }}
              animate={{ opacity: 1, y: 0 }}
               layoutId={selectedCard}
            >
             <div className="relative  z-10  group-hover:bg-white/50  group-hover:scale-105 group-hover:transition-smooth-magnetic-linear ">
                <div className="flex flex-col gap-1   w-full  ">
                  <div className=" w-full flex flex-col gap-2">
                    <h2 className="dark:text-white text-xl font-bold  group-hover:bg-gray-500/10  ">{project.title} </h2>
                    <div className="dark:text-white text-sm  font-bold">{project.description}</div>
                  </div>
                </div>
                <div className="flex gap-1  p-2 ">
                  <div className="  group-hover:bg-white/10  w-full  ">
                  <div className="dark:text-white  flex gap-2  p-2  ">
                    <a href={project.link} className="transition-smooth-magnetic-linear">
                      <button className="bg-white/30 p-2 rounded-xl  " >
                        <svg className="  w-6 h-6   ">
                          <path className="  text-gray-700  group-hover:scale-105  group-hover:transition-smooth-magnetic-linear  " />
                        </svg>
                      </button>
                      <div className=" group-hover:bg-gray-500/10 transition-smooth-magnetic-linear   bg-white/20  p-2    rounded-xl  ">
                        <div className="  dark:text-white   text-sm  w-full   ">
                          <span className="  group-hover:bg-gray-500/10  ">
                            {project.title}
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
            </motion.div>
          ))}
        </div>
        </div>
    </motion.div>
  );
}

export default PortofolioPage;
  