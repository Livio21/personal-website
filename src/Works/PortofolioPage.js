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
                key={index}
                className="border-2 dark:border-white/20 bg-white/20 dark:text-white text-black dark:p-2  p-4 rounded-xl hover:bg-white/30 relative  transition-all duration-500"
                transition={{
                  transition: {
                    duration: 0.1,
                  },
                  layout: true,
                }}
                layout
                style={{ zIndex: projects.length - index }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-2xl font-bold">{project.title}</p>
                <p className="text-sm mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((techItem, index) => (
                    <span
                      key={index}
                      className="bg-black/30 dark:bg-white/30 text-white px-2 py-1 rounded-lg text-xs"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default PortofolioPage;
