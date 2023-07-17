import TextEditor from "../components/TextEditor"
import { motion } from "framer-motion"
import { useState } from "react"
import Post from "../components/Post/Post"
export default function PostEditorPage({ post }) {
    const [content, setContent] = useState(post.content)
    const [preview, setPreview] = useState(false)
    let editorButtonStyle = !preview ?
        "p-2 bg-black/60 text-white underline border-[2px] border-r-[1px] border-l-0 border-b-0 rounded-md rounded-b-none border-white hover:cursor-pointer" : "p-2 bg-black text-white border-[2px] border-r-[1px] border-l-0 border-b-0 rounded-md rounded-b-none border-white hover:cursor-pointer";
    let previewButtonStyle = preview ? "p-2 bg-black/60 underline text-white border-[2px] border-r-[1px] border-l-0 border-b-0 rounded-md rounded-b-none border-white hover:cursor-pointer" : "p-2 bg-black text-white border-[2px] border-r-[1px] border-l-0 border-b-0 rounded-md rounded-b-none border-white hover:cursor-pointer";

    return (
        <motion.div >
            <div className="flex" >
                <div className={editorButtonStyle} onClick={() => setPreview(false)}>
                    editor
                </div>
                <div className={previewButtonStyle} onClick={() => setPreview(true)}>
                    preview
                </div>
            </div>
            <motion.div layout>
                {preview ? (<Post post={post} content={content} />) : (<TextEditor content={JSON.stringify(content)} setContent={setContent} />)}

            </motion.div>

        </motion.div>

    )
}