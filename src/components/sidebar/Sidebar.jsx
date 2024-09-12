import { useState } from "react"
import { motion } from "framer-motion"
import Links from "./links/Links"
import "./sidebar.scss"
import ToggleButton from "./toggleButton/toggleButton"

const variants = {
  open: {
    clipPath: "circle(100% at 50% 50%)", // Full circle covering the screen
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)", // Small circle
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
