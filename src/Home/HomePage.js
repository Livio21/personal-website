import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import * as THREE from 'three';
function HomePage() {
  const [clickCount, setClickCount] = useState(0);
  const [randomEmoji, setRandomEmoji] = useState("hmm");
  const [isHovered, setIsHovered] = useState(false);

  const generateRandomEmoji = () => {
    const emojis = ["😀", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "🤩", "🥳", "🥰", "😘", "😗", "😙", "😚", "🙂", "🤗", "🤔", "🤨", "🤫", "🤭", "🤐", "🙄", "😯", "🤥", "🤤", "😴", "😵", "🤯", "🤠", "😈", "💩", "🤡", "👹", "👺", "👻", "👽", "🤖", "👾", "😹", "😻", "😼", "🙀", "😿", "😾", "🙈", "🙉", "🙊"];
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  };

  const handleHelloClick = () => {
    setClickCount(clickCount + 1);
  };
  const { width, height } = useWindowSize();

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
  
      window.addEventListener('resize', handleResize);
  
      handleResize();
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowSize;
  }

  // Donut Component
  function Donut() {
    const geometry = new THREE.TorusGeometry(1, 0.4, 100, 100);
    const material = new THREE.MeshStandardMaterial({ color: 0xf9a826 });
    const donut = new THREE.Mesh(geometry, material);

    useFrame((state) => {
      const timer = state.clock.getElapsedTime();
      donut.rotation.x = timer / 2;
      donut.rotation.y = timer / 2;
    });

    return (
      <primitive object={donut} />
    );
  }

  // Light Component
  function Light() {
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(0, 0, 5);

    return (
      <primitive object={light} />
    );
  }
  // Camera Component
  function Camera() {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);

    useFrame((state) => {
      camera.lookAt(0, 0, 0);
    });

    return (
      <primitive object={camera} />
    );
  }

  // Canvas Component
  function CanvasComponent() {
    return (
      <Canvas
        style={{ width: '100%', height: '100%' }}
      >
        <Light />
        <Camera />
        <Donut />
        <ambientLight color="#fff" />
      </Canvas>
    );
  }


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      exit={{
        opacity: 1,
      }}
      className="p-10 relative"
    >
      <header className="flex gap-5 justify-between">
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
            <h1 className="dark:text-white text-6xl font-bold animate-bounce">Hello.</h1>
          ) : (
            <motion.div
              drag
              dragConstraints={{ top: -height/2, left: -width/2, right: width/2, bottom: height/2 }}
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
        
      </header>
      <div className="flex flex-col gap-4 mt-10 p-5">
      <div className="absolute right-0 top-0 h-full w-1/2">
      <CanvasComponent/>
      
      </div>




        <h1 className="dark:text-white text-3xl font-semibold">Placeholder text</h1>
        <Link
          to="/contact"
          className=" font-bold duration-100 bg-white w-fit p-3 rounded-2xl hover:px-5 hover:bg-gray-100 active:scale-95 active:bg-gray-100"
          
          
        >
          Contact!
        </Link>
        
        
      </div>

      
    </motion.div> 
  );
}

export default HomePage;





