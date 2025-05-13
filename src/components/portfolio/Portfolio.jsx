import { useRef } from "react"
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"


const items = [
    {
        id:1,
        title: "React Commerce",
        img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkd",
        desc: "A frontend solution using React to build fast, customizable e-commerce sites. It handles product displays, carts, and checkout with smooth user experiences."
    },
    {
        id:2,
        title: "Next.js Blog",
        img: "data:image/jpeg;base64,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",
        desc: "The Next.js framework to build a fast, SEO-friendly blog with features like static site generation, dynamic routing, and easy content management using Markdown or a headless CMS."
    },
    {
        id:3,
        title: "Vue.js",
        img: "data:image/jpeg;base64,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",
        desc: " A lightweight, reactive blog built using the Vue.js framework. It offers smooth navigation, dynamic content updates, and can be paired with tools like Vue Router and VuePress for a fast, customizable blogging experience."
    },
    {
        id:4,
        title: "Music App",
        img: "https://www.bing.com/th?id=OIP.79je_Ol7EUF0aan2-nSSGAHaEK&w=150&h=84&c=8&rs=1&qlt=90&o=6&cb=13&pid=3.1&rm=2",
        desc: "lets users browse, play, and manage songs or playlists. Built with modern frameworks like React, Vue, or Flutter, it can stream audio, show album art, and offer features like search, favorites, and offline playback."
    }
]

const Single = ({ item }) => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

  const y = useTransform(scrollYProgress, [0, 1], [-150, -300])

    return (
    <section>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button>See Demo</button>
            </motion.div>
            </div>
        </div>
    </section>
    )
}

const Portfolio = () => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
            <Single item={item} key={item.id}/>
    ))}
    </div>
  )
}

export default Portfolio