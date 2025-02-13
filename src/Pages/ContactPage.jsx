import { motion } from "framer-motion";

function ContactPage() {
  return (
    <div className="h-full">
      <h1 className="dark:text-white text-6xl font-bold mb-10 ">Contact.</h1>
      <div className="grid grid-flow-row-dense sm:grid-flow-col-dense gap-4 grid-cols-2">
        <details className="col-span-2 text-white mb-8 rounded-xl transition-all duration-300 bg-white/10 p-4 max-h-fit max-w-fit">
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
        <div className="col-span-2 bg-white/10 h-[250px] w-[250px]">a</div>
        <div className="col-span-2 sm:row-span-2 rounded-xl text- font-semibold divide-solid divide-y divide-white/20 p-4 flex flex-col border-solid border-white/20  border-2">
          <div className="py-4">
          <input
              className="focus:outline-none p-2 rounded-t-xl bg-white/10 w-full"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="py-4">
          <input
              className="focus:outline-none p-2 bg-white/10 w-full "
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="py-4">
          <textarea
              className="focus:outline-none p-2 rounded-b-xl bg-white/10 w-full "
              type="text"
              placeholder="Message"
            />
          </div>
          <button className=" font-bold duration-100 bg-white w-fit p-3 rounded-2xl hover:px-5 hover:bg-gray-100 active:scale-95 active:bg-gray-100 block ">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
