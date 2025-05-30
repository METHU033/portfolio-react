import { useState } from "react"
import { motion } from "framer-motion"
import Links from "./links/Links";
import "./sidebar.scss"
import ToggleButton from './toggleButton/ToggleButton';


const variants = {
  open: {
    clipPath: "circle(100% at 50% 50%)", 
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)", 
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  
}
const Sidebar = () => {
  const [open, setOpen] = useState(false)


  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"} variants={variants}>
      <motion.div className="bg">
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar
