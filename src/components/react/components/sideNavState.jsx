import { useState } from 'react'
import { motion } from "framer-motion"
import Button from './Button'
export default function (props) {
    const [open, setOpen] = useState(false)
    let wrapperClass = open ? "h-[100vh] w-[200px] border-r-2 border-black bg-black/40" : " w-[100px] h-[100vh] border-r-2 border-black  bg-black/40"
    return (
        <motion.div
            layout
            className={wrapperClass}>
            <motion.div
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 1 },
                }}
                animate={{
                    rotate: open ? 180 : 0
                }}
                className='hover:cursor-pointer py-1 px-2 rounded-xl border-[1px] border-white my-2  bg-slate-400/20 w-[40px]  mx-auto' onClick={() => setOpen(!open)} >
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

                    <motion.div
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 1 },
                        }}
                        animate={{
                            opacity: open ? 0 : 1
                        }}
                        className='hover:cursor-pointer py-1 px-2 rounded-xl border-[1px] border-white my-1 bg-slate-400/20 w-[40px]  mx-auto' >
                        <a rel='prefetch' href='/blog'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                            </svg>
                        </a>
                    </motion.div>


                    <motion.div
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 1 },
                        }}
                        animate={{
                            rotate: open ? 180 : 0
                        }}
                        className='hover:cursor-pointer py-1 px-2 rounded-xl border-[1px] border-white my-1 bg-slate-400/20 w-[40px]  mx-auto'  >
                        <a rel='prefetch' href='/portfolio'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                        </a>

                    </motion.div>
                    <motion.div
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 1 },
                        }}
                        animate={{
                            rotate: open ? 180 : 0
                        }}
                        className='hover:cursor-pointer py-1 px-2 rounded-xl border-[1px] border-white my-1 bg-slate-400/20 w-[40px]  mx-auto'  >
                        <a rel='prefetch' href='/admin'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                        </a>

                    </motion.div>
                </div>
            )
            }
        </motion.div >
    )
}