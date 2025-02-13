import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

function HomePage() {
  const [clickCount, setClickCount] = useState(0);
  const [randomEmoji, setRandomEmoji] = useState("hmm");
  const [isHovered, setIsHovered] = useState(false);

  const generateRandomEmoji = () => {
    const emojis = [
      "😀",
      "😂",
      "🤣",
      "😃",
      "😄",
      "😅",
      "😆",
      "😉",
      "😊",
      "😋",
      "😎",
      "😍",
      "🤩",
      "🥳",
      "🥰",
      "😘",
      "😗",
      "😙",
      "😚",
      "🙂",
      "🤗",
      "🤔",
      "🤨",
      "🤫",
      "🤭",
      "🤐",
      "🙄",
      "😯",
      "🤥",
      "🤤",
      "😴",
      "😵",
      "🤯",
      "🤠",
      "😈",
      "💩",
      "🤡",
      "👹",
      "👺",
      "👻",
      "👽",
      "🤖",
      "👾",
      "😹",
      "😻",
      "😼",
      "🙀",
      "😿",
      "😾",
      "🙈",
      "🙉",
      "🙊",
    ];
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  };

  const handleHelloClick = () => {
    setClickCount(clickCount + 1);
  };
  const constraintsRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{
        opacity: 1,
      }}
      className="flex w-full "
      ref={constraintsRef}
    >
      <div className="flex-col">
        <div className="flex gap-5 justify-between w-max h-max">
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0,
              transition: {
                duration: 0.3,
                ease: "easeInOut",
                type: "spring",
                stiffness: 200,
              },
            }}
            className="bg-white/10 p-5 rounded-3xl w-fit hover:cursor-pointer"
            title="Click me! It's hidden something!"
            onClick={() => {
              handleHelloClick();
              if (clickCount >= 5 && randomEmoji !== "") {
                setRandomEmoji("");
              }
              setIsHovered(!isHovered);
              if (clickCount >= 5) {
                const newEmoji = generateRandomEmoji();
                setRandomEmoji(newEmoji);
              }
            }}
          >
            {clickCount < 5 ? (
              <h1 className="dark:text-white text-6xl font-bold ">Hello.</h1>
            ) : (
              <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.3}
                dragMomentum={true}
                dragTransition={{ bounceStiffness: 500, bounceDamping: 25 }}
                className="dark:text-white text-6xl font-bold"
              >
                {randomEmoji}
              </motion.div>
            )}

            {/* Empty <h1> to be removed if not needed */}
            {clickCount >= 5 && (
              <h1 className="dark:text-white text-6xl font-bold"></h1>
            )}
          </motion.div>
          <h2 className="dark:text-white text-3xl font-semibold ">
            I'm{" "}
            <Link to="/about" className="hover:text-4xl font-bold duration-100">
              Livio
            </Link>
            <motion.div
              animate={{
                scale: isHovered ? 1.1 : 1,
                transition: {
                  duration: 0.3,
                  ease: "easeInOut",
                  type: "spring",
                },
              }}
              className="dark:text-white dark:hover:text-4xl text-3xl hover:text-4xl font-bold duration-100 cursor-pointer "
              onClick={() => setIsHovered(!isHovered)}
            >
              👋
            </motion.div>
          </h2>
        </div>
        <div className="flex flex-col gap-4 mt-10 p-5">
          <h1 className="dark:text-white text-3xl font-semibold">
            Placeholder text
          </h1>
          <Link
            to="/contact"
            className=" font-bold duration-100 bg-white w-fit p-3 rounded-2xl hover:px-5 hover:bg-gray-100 active:scale-95 active:bg-gray-100"
          >
            Contact!
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default HomePage;
