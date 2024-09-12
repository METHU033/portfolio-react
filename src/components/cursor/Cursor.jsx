import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div 
      className="Cursor"
      style={{ translateX: '-50%', translateY: '-50%' }}  // Correct the positioning
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }} // Add some smoothness if you like
    ></motion.div>
  );
};

export default Cursor;
