import { motion } from "framer-motion";

function PortofolioPage() {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      exit={{
        opacity: 1,
      }}
      className="p-10 flex flex-col gap-4 w-full"
    >
      <h1 className="dark:text-white text-6xl font-bold ">Works.</h1>
      <div className="bg-white/20 p-10 rounded-3xl w-full flex flex-col gap-5 ">
        <div className="bg-white/80 p-5 rounded-3xl flex flex-col">
           
          <h1 className=" text-3xl font-semibold"> ITSA </h1>
        </div>
        
      </div>
    </motion.div>
  );
}

export default PortofolioPage;
