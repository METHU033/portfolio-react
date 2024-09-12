import { stagger } from "framer-motion/dom"
import "./services.scss"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"


const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 2,
            staggerChildren: 0.3,
        }
    }
}


const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref,{margin:"-100px"})
  return (
    <motion.div className="services" 
    varients={variants} 
    initial="initial"
    // animate="animate"
    whileInView="animate"
    ref={ref}
    animate={"animate"}
    >
        <motion.div className="textContainer" variants={variants}>
            <p>
                I focus on helping your brand grow
                <br /> and move forward
            </p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
                </h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Nemo, fugiat temporibus tenetur expedita
                    repellat accusamus dolorum voluptas, id odio amet
                    culpa voluptatem alias rem porro cum dolore  vitae 
                    nostrum. Enim!
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Nemo, fugiat temporibus tenetur expedita
                    repellat accusamus dolorum voluptas, id odio amet
                    culpa voluptatem alias rem porro cum dolore  vitae 
                    nostrum. Enim!
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Nemo, fugiat temporibus tenetur expedita
                    repellat accusamus dolorum voluptas, id odio amet
                    culpa voluptatem alias rem porro cum dolore  vitae 
                    nostrum. Enim!
                </p>
                <button>Go</button>
            </motion.div>
         </motion.div>
    </motion.div>
  )
}

export default Services