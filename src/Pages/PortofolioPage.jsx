import { useState, useRef, useEffect } from "react";
import Card from "../Components/Card";

function PortofolioPage() {
  const projects = [
    {
      title: "Vue Covid App",
      description:
        "A web application based on VueJS, Colorful CMS and Tailwind CSS.",
      link: "https://vue-covidapp.vercel.app/#/",
      tech: ["VueJS", "Vuex", "Tailwind CSS", "ColorfulCMS", "Vercel"],
    },
    {
      title: "ITSA System",
      description:
        "ITSA or Interactive Teaching and Assessment System is a Learning/Student Management System.",
      link: "https://itsa-vue.web.app/#/login",
      tech: ["VueJS", "Firebase", "Vuex", "Tailwind CSS", "Vercel"],
    },
    {
      title: "Personal Website",
      description:
        "My personal website currently in development using ReactJS and TailwindCSS.",
      link: "https://livio-macaj.vercel.app/",
      tech: ["ReactJS", "Tailwind CSS", "Supabase"],
    },
    {
      title: "LMS on ODOO",
      description: "A Learning Management System developed on ODOO Framework.",
      tech: ["ODoo", "PostgresSQL"],
    },
    {
      title: "Albanian Content Safety Checker",
      description:
        "A Chrome extension that checks webpage content for unsafe text in Albanian.",
      tech: ["Javascript", "BERT", "Language Transformer", "Python"],
    },
  ];

  const [selectedCard, setSelectedCard] = useState(0);
  const handleCardClick = (index) => setSelectedCard(index);

  const nextCard = () => {
    setSelectedCard((prev) => (prev + 1) % projects.length);
  };

  const prevCard = () => {
    setSelectedCard((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const containerRef = useRef(null);
  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateContainerSize = () => {
      if (containerRef.current) {
        setContainerDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateContainerSize();
    window.addEventListener("resize", updateContainerSize);
    return () => window.removeEventListener("resize", updateContainerSize);
  }, []);
  
  const cardWidth = 500;
  const cardHeight = 300;
  const baseLeft = containerDimensions.width / 2 - cardWidth ;
  const baseTop = containerDimensions.height / 2 - cardHeight ;
  const offsetX = 20;
  const offsetY = 10;

  return (
    <>
      <h1 className="dark:text-white text-6xl font-bold">Works.</h1>
      <div
        ref={containerRef}
        className="h-full w-screen overflow-hidden relative mx-auto mt-8 "
      >
        {projects.map((project, index) => {
          const isSelected = selectedCard === index;
          const dynamicLeft = baseLeft + index * offsetX;
          const dynamicTop = baseTop - index * offsetY;

          return (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              isSelected={isSelected}
              onClick={() => handleCardClick(index)}
              style={{
                zIndex: isSelected
                  ? projects.length + 1
                  : projects.length - index,
                left: isSelected ? baseLeft : dynamicLeft,
                top: isSelected ? baseTop : dynamicTop,
              }}
            />
          );
        })}
      </div>

      <div className="fixed top-1/2 right-10 flex flex-col gap-4 transform -translate-y-1/2 z-[999] ">
        <button
          onClick={prevCard}
          className="border-solid border-[1px] border-white/20 text-white px-4 py-2 rounded-md hover:bg-white/10 bg-black"
        >
          <span className="material-symbols-outlined">arrow_drop_up</span>
        </button>
        <button
          onClick={nextCard}
          className="border-solid border-[1px] border-white/20 text-white px-4 py-2 rounded-md hover:bg-white/10 bg-black"
        >
          <span className=" material-symbols-outlined">arrow_drop_down</span>
        </button>
      </div>
    </>
  );
}

export default PortofolioPage;
