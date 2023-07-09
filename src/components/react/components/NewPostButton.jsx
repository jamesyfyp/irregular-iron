import { useState, useEffect } from "react"
import { motion } from 'framer-motion'
export default function NewPostButton() {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState('')
    console.log()

    useEffect(() => {
        if (!loading) return
        async function req() {
            let request = await fetch(`${import.meta.env.PUBLIC_ASTRO_APP_API_URL}/blogPost`, {
                method: 'POST',
                body: JSON.stringify({ title, content: JSON.stringify({ hello: 'world' }) }),

            })
                .then(response => response.json())
                .then(data => {
                    console.log('Saved:', data);
                    window.location.pathname = `/admin/editPost/${title}`
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
        req()

    }, [loading])


    return (
        <motion.div className='absolute left-4' layout >
            {!open && !loading && (
                <motion.div onClick={() => setOpen(true)}
                    className='rounded-full bg-black/60 hover:cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </motion.div>
            )}
            {open && !loading && (
                <motion.div
                    className='rounded-md bg-black/60 text-white'>
                    <form className="relative grid hover:cursor" >
                        <div className="absolute right-2 top-2" onClick={() => setOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <label className='p-2'>Title</label>
                        <input className='p-1 m-1 mx-2 rounded-sm text-black' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <div className='p-1 m-2 border-[1px] text-center hover:cursor-pointer' onClick={() => setLoading(true)}> submit</div>
                        <span className='h-2' />
                    </form>
                </motion.div>
            )}
            {loading && (
                <motion.div className='rounded-full bg-black /60 p-2'
                    animate={{
                        rotate: 360
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity
                    }}

                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                </motion.div>
            )}
        </motion.div>
    )
}
