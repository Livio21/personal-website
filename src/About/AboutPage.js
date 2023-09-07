import { motion } from "framer-motion";
function AboutPage() {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      exit={{
        opacity: 1,
        y: "-100%",
      }}
      className="p-10"
    >
      <h1 className="dark:text-white text-6xl font-bold ">About.</h1>
    </motion.div>
  );
}

export default AboutPage;
