import { motion } from "framer-motion";

const Card = ({ title, description, tech, isSelected, onClick, style }) => {
  return (
    <motion.div
      onClick={onClick}
      className="absolute h-[300px] w-[500px] divide-solid divide-y-[1px] divide-white/20 bg-black dark:text-white text-black rounded-xl hover:bg-zinc-900 transition-all duration-300 border-solid border-[1px] border-white/20 cursor-pointer"
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{
        top: isSelected ? style.top : style.top - 30,
      }}
      transition={{ duration: 0.1 }}
    >
      <p className="text-2xl px-4 py-1 font-bold bg-white/10 rounded-t-xl">{title}</p>
      <p className="text-sm p-4">{description}</p>
      <div className="flex flex-wrap gap-2 p-4">
        {tech.map((techItem, index) => (
          <span
            key={index}
            className="bg-black/30 dark:bg-white/30 text-white px-2 py-1 rounded-lg text-xs"
          >
            {techItem}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default Card;
