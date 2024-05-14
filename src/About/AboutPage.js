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
      <div className="dark:text-white ">
        <h1 className="dark:text-white text-6xl font-bold mb-5">About.</h1>
        <div className="flex flex-wrap gap-4">
        <header className="bg-gray-100/30 p-5 rounded-3xl w-fit">
          <h1 className="text-3xl font-bold">Livio Macaj</h1>
          <h2 className="text-xl font-semibold">
            Software Engineering Student | Junior Frontend Developer
          </h2>
        </header>
          <section
            id="summary"
            className="bg-gray-100/30 p-5 rounded-3xl font-semibold basis-1/2"
          >
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
          {/* <section id="skills" className="bg-gray-100/30 p-5 rounded-3xl">
            <h3 className="text-xl font-semibold">Top Skills</h3>
            <ul>
              <li>React.js</li>
              <li>HTML5</li>
              <li>Hybrid CMS</li>
            </ul>
          </section> */}
          <section id="experience" className="bg-gray-100/30 p-5 rounded-3xl">
            <h3 className="text-xl font-semibold">Experience</h3>
            <article className="mb-6">
              <h4 className="text-lg font-semibold">
                Ministry of Justice of Albania
              </h4>
              <p className="mb-1">Information Technology Intern</p>
              <p className="mb-1">April 2024 - Present (2 months)</p>
              <p>Tirana, Albania</p>
            </article>
            <article>
              <h4 className="text-lg font-semibold">AKKSHI (NASRI)</h4>
              <p className="mb-1">Web Developer</p>
              <p className="mb-1">May 2022 - June 2022 (2 months)</p>
              <p>Tirana, Albania</p>
              <p>
                My internship project involved working on improving and updating
                the website of NASRI. This meant using WordPress and other
                pieces of software to complete the work. Fixing problems with
                the page, improving aesthetics, functional mobile view, and
                complying with RWD (Responsive Web Design) and other
                miscellaneous work.
              </p>
            </article>
          </section>

          <section id="education" className="bg-gray-100/30 p-5 rounded-3xl">
            <h3 className="text-xl font-semibold">Education</h3>
            <article className="mb-6">
              <h4 className="text-lg font-semibold mb-1">
                Canadian Institute of Technology - CIT
              </h4>
              <p>Bachelor of Engineering - BE, Software Engineering</p>
            </article>
            <article>
              <h4 className="text-lg font-semibold mb-1">
                Canadian Institute of Technology - CIT (Currently pursuing)
              </h4>
              <p>Master of Science - MS, Computer Software Engineering</p>
            </article>
          </section>
        </div>
      </div>
    </motion.div>
  );
}

// async function fetchLinkedin(){

//     const res = await fetch('https://www.linkedin.com/in/livio-macaj/');
//     console.log(await res.json());


// }
// fetchLinkedin()
export default AboutPage;
