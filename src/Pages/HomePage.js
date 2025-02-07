import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import * as THREE from "three";
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

  function Shape({ count = 10 }) {
    const sphereGeometry = useRef(new THREE.SphereGeometry(1, 32, 32));
    const particleGeometry = useRef(new THREE.SphereGeometry(0.2, 32, 32));
    const particleMaterial = useRef(
      new THREE.MeshStandardMaterial({ color: "white" })
    );// Adjust the material to add specular reflection
    const centralMaterial = useRef(
      new THREE.MeshStandardMaterial({ 
        color: "white", 
        // Increase the shininess
        metalness: 0.0,
        roughness: 0.0,
        // Add specular highlights
        specular: new THREE.Color("white"), 
      })
    ); //Create a point light inside the atom
    const sphere = useRef(new THREE.Mesh(sphereGeometry.current, centralMaterial.current));
    const particles = useRef(Array.from({ length: count }, () => null));
    const centralLight = useRef(new THREE.PointLight(0xffffff, 1));
    const centralSphere = sphere.current;
    const particleMeshes = particles.current.map(
      (particle, index) => new THREE.Mesh(particleGeometry.current, particleMaterial.current)
    );

    const time = useRef(0);
    const clock = new THREE.Clock();
    
    
    centralLight.current.position.set(0,0,0);
    useFrame((state) => {
      const timer = clock.getElapsedTime();
      time.current = timer;
      if(sphere.current)
      {
        centralSphere.rotation.y = timer * 0.5;
        particleMeshes.forEach((particle, index) => {
          const orbitRadius = 2; 
          const angle = (timer * (index + 1)) ;
          const x = orbitRadius * Math.cos(angle);
          const z = orbitRadius * Math.sin(angle);
          particle.position.set(x, 0, z);

          particle.rotation.x = time.current * 2;
          particle.rotation.y = time.current * 0.5;
        });
      }
      centralLight.current.position.set(centralSphere.position.x,centralSphere.position.y,centralSphere.position.z);
    });
    
    return (
      <group>
        <primitive object={centralSphere} />
        {particleMeshes.map((particle, index) => (
          <primitive key={index} object={particle} />
        ))}
         <primitive object={centralLight.current} />
      </group>
    );
    
  }

  // Light Component
  function Light() {
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    light.castShadow = true

    return <primitive object={light} />;
  }
  // Camera Component
  function Camera() {
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);

    useFrame((state) => {
      camera.lookAt(0, 0, 0);
    });

    return <primitive object={camera} />;
  }

  // Canvas Component
  function CanvasComponent() {
    return (
      <Canvas style={{ width: "100%", height: "100%" }}>
        <Light />
        <Camera />
        <Shape />
        <ambientLight color="#fff" intensity={0.5} />
        
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
      className="flex h-screen" ref={constraintsRef}
    >
      <div className="flex-col" >
        <header className="flex gap-5 justify-between w-max h-max">
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
              <h1 className="dark:text-white text-6xl font-bold animate-bounce">
                Hello.
              </h1>
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
        </header>
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
