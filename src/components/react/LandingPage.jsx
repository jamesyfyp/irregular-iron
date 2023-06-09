
import { useState, useEffect } from 'react';
import { motion } from "framer-motion"

export default function LandingPage() {
  let className = [
    "absolute -top-10 p-2  text-5xl bg-gradient-to-r text-transparent bg-clip-text font-black ",
    "absolute top-0 p-2  text-5xl m-auto bg-gradient-to-r text-transparent bg-clip-text font-black",
    "absolute top-10 p-2  text-5xl m-auto bg-gradient-to-r text-transparent bg-clip-text font-black",
    "absolute top-20 p-2  text-5xl m-auto bg-gradient-to-r text-transparent bg-clip-text font-black"
  ]

  let messageOneColors = [
    ' from-red-500 from-25% via-amber-500 via-50% via-yellow-500 via-75%  to-rose-500 to-100%',
    ' from-rose-500 from-25% via-red-500 via-50% via-amber-500 via-75%  to-yellow-500 to-100%',
    ' from-yellow-500 from-10% via-rose-500 via-50% via-red-500 via-75%  to-amber-500 to-100%',
    ' from-amber-500 from-10% via-yellow-500 via-50% via-rose-500 via-75%  to-red-500 to-100%'
  ]

  const [scrollVal, setScrollVal] = useState(0)
  const [textColors, setTextColors] = useState(className.map(x => { return x + messageOneColors[0] }))


  const scrolUp = () => { setScrollVal(scrollVal + 10) }
  const scrolDown = () => { setScrollVal(scrollVal - 10) }
  function handleScroll(event) {
    if (Math.abs(scrollVal) < 20) setTextColors(className.map(x => { return x + messageOneColors[0] }))

    if (Math.abs(scrollVal) >= 40) setTextColors(className.map(x => { return x + messageOneColors[1] }))
    if (Math.abs(scrollVal) >= 80) setTextColors(className.map(x => { return x + messageOneColors[2] }))
    if (Math.abs(scrollVal) >= 120) setTextColors(className.map(x => { return x + messageOneColors[3] }))
    if (Math.abs(scrollVal) >= 160) setTextColors(className.map(x => { return x + messageOneColors[0] }))
    if (Math.abs(scrollVal) >= 200) setTextColors(className.map(x => { return x + messageOneColors[1] }))
    if (Math.abs(scrollVal) >= 240) setTextColors(className.map(x => { return x + messageOneColors[2] }))
    if (Math.abs(scrollVal) >= 300) setTextColors(className.map(x => { return x + messageOneColors[3] }))
    // if (Math.abs(scrollVal) >= 160) setTextColors(className.map(x => { return x + messageOneColors[0] }))
    // if (Math.abs(scrollVal) >= 180) setTextColors(className.map(x => { return x + messageOneColors[1] }))
    // if (Math.abs(scrollVal) >= 200) setTextColors(className.map(x => { return x + messageOneColors[2] }))
    // if (Math.abs(scrollVal) >= 220) setTextColors(className.map(x => { return x + messageOneColors[3] }))
    // if (Math.abs(scrollVal) >= 240) setTextColors(className.map(x => { return x + messageOneColors[0] }))
    // if (Math.abs(scrollVal) >= 260) setTextColors(className.map(x => { return x + messageOneColors[1] }))
    // if (Math.abs(scrollVal) >= 280) setTextColors(className.map(x => { return x + messageOneColors[2] }))
    // if (Math.abs(scrollVal) >= 300) setTextColors(className.map(x => { return x + messageOneColors[3] }))
    // Check scroll direction
    if (event.deltaY > 0) {
      scrolUp()
    } else {
      scrolDown()
    }
  }
  useEffect(() => {
    console.log(scrollVal)
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollVal])

  return (
    <div className="relative overflow-hidden w-full h-full ">
      <div className=" -rotate-90  ">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 - Math.abs(scrollVal) / 300 }}
          animate={{
            x: scrollVal,
          }}

          className={textColors[0]}

        >Welcome !!!</motion.span
        >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 - Math.abs(scrollVal) / 300 }}
          animate={{ x: scrollVal * -1 }}
          className={textColors[1]}
        >To The Blog</motion.span
        >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 - Math.abs(scrollVal) / 300 }}
          exit={{ opacity: 0 }}
          animate={{ x: scrollVal }}
          className={textColors[2]}
        >I'm Making For</motion.span
        >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 - Math.abs(scrollVal) / 300 }}
          animate={{ x: scrollVal * -1 }}
          className={textColors[3]}
        >FUN :D
        </motion.span>
      </div>
      <motion.div
        className="h-5 w-5 mt-[500px] bg-white m-auto align-middle"
        whileInView={{ opacity: Math.abs(scrollVal) / 600 - .4 }}
      >

      </motion.div>
    </div>

  );
}