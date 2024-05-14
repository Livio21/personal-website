import { motion } from "framer-motion";

function ContactPage() {
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
      <h1 className="dark:text-white text-6xl font-bold mb-10">Contact.</h1>
      <div className="flex gap-10 w-full justify-center">
        <div className="flex flex-col gap-3  bg-white/10 p-5 rounded-3xl">
          <p className="dark:text-white text-3xl font-semibold">
            You can contact me at:
          </p>
          <p className="dark:text-white text-3xl font-semibold underline underline-offset-8 hover:scale-105 duration-75 ">
            <a
              href="mailto:livio.macaj@cit.edu.al"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Email
            </a>
          </p>
          <p className="dark:text-white text-3xl font-semibold underline underline-offset-8 hover:scale-105 duration-75 ">
            <a
              href="https://www.linkedin.com/in/livio-macaj/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              LinkedIn
            </a>
          </p>
        </div>
        <form className="flex flex-col gap-5 bg-white/10 p-5 rounded-3xl text-xl font-semibold">
          <input
            className="bg-white/10 p-5 rounded-3xl w-fit focus:outline-none focus:invert"
            type="text"
            placeholder="Name"
          />
          <input
            className="bg-white/10 p-5 rounded-3xl w-fit focus:outline-none focus:invert"
            type="text"
            placeholder="Email"
          />
          <textarea
            className="bg-white/10 p-5 rounded-3xl w-fit focus:outline-none focus:invert"
            type="text"
            placeholder="Message"
          />
          <button className=" font-bold duration-100 bg-white w-fit p-3 rounded-2xl hover:px-5 hover:bg-gray-100 active:scale-95 active:bg-gray-100 ">
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactPage;
