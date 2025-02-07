import { motion } from "framer-motion";

function ContactPage() {
  return (
    <>
      <h1 className="dark:text-white text-6xl font-bold mb-10">Contact.</h1>
      <div className="grid grid-flow-col-dense gap-4 grid-cols-2">
        <details className="text-white mb-8 rounded-xl transition-all duration-300 bg-white/10 p-4">
          <summary className="text-xl font-semibold ">
            You can contact me on:
          </summary>
          <p className="dark:text-white underline underline-offset-8 hover:scale-105 duration-75 ">
            <a
              href="mailto:livio.macaj@cit.edu.al"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Email
            </a>
          </p>
          <p className="dark:text-white  underline underline-offset-8 hover:scale-105 duration-75 ">
            <a
              href="https://www.linkedin.com/in/livio-macaj/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              LinkedIn
            </a>
          </p>
        </details>
        <div className="bg-white/10 h-[250px] w-[250px]">a</div>
        <form className="row-span-2 flex flex-col gap-5 bg-white/10 p-5 rounded-3xl text- font-semibold max-h-fit">
          <input
            className="bg-white/10 py-2 px-3 rounded-xl w-fit focus:outline-none focus:invert"
            type="text"
            placeholder="Name"
          />
          <input
            className="bg-white/10 py-2 px-3 rounded-xl w-fit focus:outline-none focus:invert"
            type="text"
            placeholder="Email"
          />
          <textarea
            className="bg-white/10 py-2 px-3 rounded-xl w-fit focus:outline-none focus:invert"
            type="text"
            placeholder="Message"
          />
          <button className=" font-bold duration-100 bg-white w-fit p-3 rounded-2xl hover:px-5 hover:bg-gray-100 active:scale-95 active:bg-gray-100 ">
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactPage;
