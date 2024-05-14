import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      exit={{
        opacity: 1,
      }}
      className="p-10"
    >
      <header className="flex gap-5">
        <motion.div
          drag
          dragConstraints={{ top: -0, left: -0, right: 0, bottom: 0 }}
          dragElastic={0.5}
          dragMomentum={false}
          dragTransition={{ bounceStiffness: 1000, bounceDamping: 25 }}
          className="bg-white/10 p-5 rounded-3xl w-fit"
          title="Drag me!"
        >
          <h1 className="dark:text-white text-6xl font-bold ">Hello.</h1>
        </motion.div>
        <h2 className="dark:text-white text-3xl font-semibold ">
          I'm{" "}
          <Link to="/about" className="hover:text-4xl font-bold duration-100">
            Livio
          </Link>
        </h2>
      </header>
      <div className="flex flex-col gap-4 mt-10 p-5">
        <h1 className="dark:text-white text-3xl font-semibold">Blabla bla?</h1>
        <Link
          to="/contact"
          className=" font-bold duration-100 bg-white w-fit p-3 rounded-2xl hover:px-5 hover:bg-gray-100 active:scale-95 active:bg-gray-100 "
        >
          Bla bla!
        </Link>
      </div>
    </motion.div>
  );
}

export default HomePage;
