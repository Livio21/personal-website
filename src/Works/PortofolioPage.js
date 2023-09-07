import { motion } from "framer-motion";

function PortofolioPage() {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      exit={{
        opacity: 1,
        y: "-100%",
      }}
      className="p-10 flex flex-col gap-4 w-full"
    >
      <h1 className="dark:text-white text-6xl font-bold ">Works.</h1>
      <div className="bg-white/20 p-10 rounded-3xl w-full flex flex-col gap-5 ">
        <div className="bg-white/80 p-5 rounded-3xl">
          <img
            src="https://picsum.photos/300/300"
            alt=""
            className="rounded-3xl"
          />
          <h1 className=" text-3xl font-semibold"> lorem ipsium </h1>
        </div>
        <div className="bg-white/80 p-5 rounded-3xl flex gap-5 ">
          <img
            src="https://picsum.photos/300/300"
            alt=""
            className="rounded-xl"
          />
          <div className="">
            <h1 className=" text-3xl font-semibold self-end"> lorem ipsium </h1>
            <p className="text-xl font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quae voluptates voluptate
              exercitationem quod voluptatibus quos doloribus quidem. Quisquam
              voluptatum, quibusdam, quia, quae voluptates voluptate
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default PortofolioPage;
