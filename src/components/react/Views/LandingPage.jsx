
import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion"
// import * as ti from "taichi.js"


export default function LandingPage() {
  let className = [
    "absolute left-1/2 transform -translate-x-1/2 bottom-20 p-2  text-5xl bg-gradient-to-r text-transparent bg-clip-text font-black",
    "absolute left-1/2 transform -translate-x-1/2 bottom-10 p-2  text-5xl m-auto bg-gradient-to-r text-transparent bg-clip-text font-black",
    "absolute left-1/2 transform -translate-x-1/2 -bottom-0 p-2  text-5xl m-auto bg-gradient-to-r text-transparent bg-clip-text font-black",
    "absolute left-1/2 transform -translate-x-1/2 -bottom-10 p-2  text-5xl m-auto bg-gradient-to-r text-transparent bg-clip-text font-black"
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
    if (Math.abs(scrollVal) < 10) setTextColors(className.map(x => { return x + messageOneColors[0] }))
    if (Math.abs(scrollVal) >= 20) setTextColors(className.map(x => { return x + messageOneColors[1] }))
    if (Math.abs(scrollVal) >= 30) setTextColors(className.map(x => { return x + messageOneColors[2] }))
    if (Math.abs(scrollVal) >= 40) setTextColors(className.map(x => { return x + messageOneColors[3] }))
    if (Math.abs(scrollVal) >= 50) setTextColors(className.map(x => { return x + messageOneColors[0] }))
    if (Math.abs(scrollVal) >= 60) setTextColors(className.map(x => { return x + messageOneColors[1] }))
    if (Math.abs(scrollVal) >= 70) setTextColors(className.map(x => { return x + messageOneColors[2] }))
    if (Math.abs(scrollVal) >= 80) setTextColors(className.map(x => { return x + messageOneColors[3] }))
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

  return (
    <div className='relative w-full h-full overflow-hidden'>
      <div className="absolute w-[900px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  m-auto ">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 - Math.abs(scrollVal) / 150 }}
          animate={{
            x: scrollVal * 10,
          }}
          className={textColors[0]}
        >Welcome !!!</motion.span
        >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 - Math.abs(scrollVal) / 150 }}
          animate={{ x: scrollVal * -1 * 14 }}
          className={textColors[1]}
        >To My Personal</motion.span
        >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 - Math.abs(scrollVal) / 150 }}
          exit={{ opacity: 0 }}
          animate={{ x: scrollVal * 15 }}
          className={textColors[2]}
        >Development</motion.span
        >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 - Math.abs(scrollVal) / 150 }}
          animate={{ x: scrollVal * -1 * 9 }}
          className={textColors[3]}
        >Blog
        </motion.span>
      </div>
      <motion.div layout
        animate={{ opacity: Math.abs(scrollVal) / 200 }}
        className=" overflow-hidden  w-full h-full ">
        <motion.div
          className="h-full w-full z-2 bg-white m-auto align-middle"
        >
          <motion.div
            layout
            animate={{
              opacity: 1,
              scale: 1
            }}
          >
            <div className='relative h-[100vh] w-auto p-8 '>
              <div className='rounded-full h-[300px] w-[300px] bg-blue-500 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
              <div className='pt-[50vh] grid grid-cols-3 w-1/3 text-center m-auto'>
                <div>Linked In</div>
                <div>Blog</div>
                <div>Discord</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>

  );
}