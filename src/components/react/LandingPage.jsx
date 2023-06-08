
import { useState, useEffect } from 'react';
import { motion } from "framer-motion"

export default function LandingPage() {
  const [scrollVal, setScrollVal] = useState(0)
  const scrolUp = () => { setScrollVal(scrollVal + 20) }
  const scrolDown = () => { setScrollVal(scrollVal - 20) }
  function handleScroll(event) {
    // Check scroll direction
    if (event.deltaY > 0) {
      scrolUp()
    } else {
      scrolDown()
    }
  }
  useEffect(() => {

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollVal])
  let className = "absolute - top - 10 p-2  text - 5xl text-transparent bg-clip-text font-black "
  return (
    <div className="overflow-hidden w-full h-full">
      <div className="relative -rotate-90  ">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 - Math.abs(scrollVal) / 300 }}
          animate={{
            x: scrollVal,
          }}

          className="absolute -top-10 p-2  text-5xl  bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text font-black"
        >Welcome !!!</motion.span
        >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 - Math.abs(scrollVal) / 300 }}
          animate={{ x: scrollVal * -1 }}
          className="absolute top-0 p-2  text-5xl m-auto bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text font-black"
        >To The Blog</motion.span
        >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 - Math.abs(scrollVal) / 300 }}
          exit={{ opacity: 0 }}
          animate={{ x: scrollVal }}
          className="absolute top-10 p-2 text-5xl m-auto bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text font-black"
        >I'm Making For</motion.span
        >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 - Math.abs(scrollVal) / 300 }}
          animate={{ x: scrollVal * -1 }}
          className="absolute p-2 top-20 text-5xl m-auto bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text font-black"
        >FUN :D
        </motion.span>

      </div>
    </div>

  );
}