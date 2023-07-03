import { useState } from 'react'
import { motion } from "framer-motion"
import Button from './Button'
export default function (props) {
    const [open, setOpen] = useState(false)
    let wrapperClass = open ? "h-[100vh] w-[200px] border-r-2 border-black bg-black/40" : " w-[100px] h-[100vh] border-r-2 border-black  bg-black/40"
    return (
        <div className={wrapperClass}>
            <motion.div
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 1 },
                }}
                animate={{
                    rotate: open ? 180 : 0
                }}
                className='hover:cursor-pointer py-1 px-2 rounded-xl border-[1px] border-white my-1 bg-slate-400/20 w-[40px]  mx-auto' onClick={() => setOpen(!open)} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 mx-auto h-4">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
            </motion.div>
            {open ? (
                <div >
                    <ul className='text-white'>
                        <h1>
                            test
                        </h1>
                        <li>
                            test2
                        </li>
                    </ul>
                </div >
            ) : (
                <div >

                </div>
            )
            }
        </div>
    )
}