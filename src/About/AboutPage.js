import { motion } from "framer-motion";
function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      exit={{
        opacity: 1,
      }}
      className="p-10"
    >
      <div className="dark:text-white">
        <h1 className="dark:text-white text-6xl font-bold mb-5">About.</h1>
        <div className="flex flex-wrap gap-4">
          <header className="bg-gray-100/30 p-5 rounded-3xl w-fit">
            <h1 className="text-4xl font-bold">Livio Macaj</h1>
            <h2 className="text-xl font-semibold">
              Software Engineer | Frontend Developer
            </h2>
          </header>
          <section id="summary" className="bg-gray-100/30 p-5 rounded-3xl font-semibold basis-1/2">
            <p>
              As a recent graduate in Software Engineering, I have a strong
              foundation in computer science principles and a passion for
              frontend web development. I have completed an internship with
              AKKSHI, where I gained valuable experience in web development
              using tools such as VueJS, Firebase, and TailwindCSS. My diploma
              thesis was focused on the development of web applications. I am
              currently pursuing my Master's degree in Software Engineering to
              further enhance my skills and knowledge in the field. In addition
              to my technical abilities, I am a quick learner and thrive in
              collaborative environments.
            </p>
          </section>
          <section id="skills" className="bg-gray-100/30 p-5 rounded-3xl">
            <h3 className="text-4xl font-semibold text-orange-500">🛠️ Top Skills</h3>
            <ul className="list-disc ml-4">
              <li>React.js</li>
              <li>HTML5</li>
              <li>TailwindCSS</li>
              <li>CSS3</li>
              <li>JavaScript ES6</li>
            </ul>
          </section>
          <section id="experience" className="bg-gray-100/30 p-5 rounded-3xl">
            <h3 className="text-4xl font-semibold text-orange-500">💼 Experience</h3>
            <article className="mb-6">
              <h4 className="text-lg font-semibold text-orange-500">
                Ministry of Justice of Albania
              </h4>
              <p className="mb-1">Information Technology Intern</p>
              <p className="mb-1">April 2024 - Present (2 months)</p>
              <p className="mb-1">Tirana, Albania</p>
              <p>
                - Managed and maintained IT infrastructure and systems
                - Assisted in the setup and maintenance of various IT systems
                - Contributed to the implementation of new IT projects and
                improvements
                - Provided technical support and assistance to end-users
                - Documented and resolved IT-related issues
                - Assisted in the implementation of security measures and protocols
              </p>
            </article>
            <article>
              <h4 className="text-lg font-semibold text-orange-500">AKKSHI (NASRI)</h4>
              <p className="mb-1">Web Developer</p>
              <p className="mb-1">May 2022 - June 2022 (2 months)</p>
              <p className="mb-1">Tirana, Albania</p>
              <p>
                -Worked on improving and updating the website of NASRI
                -Fixed problems with the page, improving aesthetics, functional mobile view
                - Complied with RWD (Responsive Web Design)
              </p>
            </article>
          </section>

          <section id="education" className="bg-gray-100/30 p-5 rounded-3xl">
            <h3 className="text-4xl font-semibold text-orange-500">🎓 Education</h3>
            <article className="mb-6">
              <h4 className="text-lg font-semibold mb-1 text-orange-500">
                Canadian Institute of Technology - CIT
              </h4>
              <p>Bachelor of Engineering - BE, Software Engineering</p>
            </article>
            <article>
              <h4 className="text-lg font-semibold mb-1 text-orange-500">
                Canadian Institute of Technology - CIT (Currently pursuing)
              </h4>
              <p>Master of Science - MS, Computer Software Engineering</p>
            </article>
          </section>
          <section id="projects" className="bg-gray-100/30 p-5 rounded-3xl">
            <h3 className="text-4xl font-semibold text-orange-500">🚀 Projects</h3>
            <article>
              <h4 className="text-lg font-semibold mb-1 text-orange-500">
                My Portofolio Website
              </h4>
              <p className="mb-1">
                - Develop a personal portfolio website using React.js, HTML5, and Tailwind CSS.
                - Create a modern, visually appealing, responsive website with a single-page application structure.
                - Implement smooth page transitions and animations using Framer Motion.
                - Develop and implement a dark/light mode toggle for enhanced user experience.
              </p>
            </article>
            <article>
              <h4 className="text-lg font-semibold mb-1 text-orange-500">
                E-commerce platform 
              </h4>
              <p className="mb-1">
                - Develop a full-stack e-commerce platform using React.js, Express.js, and MongoDB.
                - Implement various features, including product browsing, shopping cart, user account management, and payment processing.
                - Design and implement a relational database structure for storing and retrieving product data.
                - Implement smooth page transitions and animations using Framer Motion.
                - Develop and implement a dark/light mode toggle for enhanced user experience.
              </p>
            </article>
            <article>
              <h4 className="text-lg font-semibold mb-1 text-orange-500">
                Simple Web Blog
              </h4>
              <p className="mb-1">
                - Develop a full-stack web application using React.js, Express.js, and MongoDB.
                - Create a modern, visually appealing, responsive website using this Tech Stack
                - Implement smooth page transitions and animations using Framer Motion.
                - Develop and implement a dark/light mode toggle for enhanced user experience.
              </p>
            </article>
          </section>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutPage;
