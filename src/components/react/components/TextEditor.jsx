import { useRef, useState, useEffect } from "react"
import Editor from '@monaco-editor/react'
import { isEqual } from 'lodash'

export default function TextEditor({ post, content, setContent }) {
    const [editorVal, setEditorVal] = useState(JSON.parse(content))
    const [disabled, setDisabled] = useState(true)
    const [loading, setLoading] = useState(false);

    const saveOnClick = () => {
        setLoading(true)
    }

    const editorRef = useRef(null);

    const handleChange = (e) => {
        setEditorVal(e)
        setContent(e)
        isEqual(content, e) ? setDisabled(true) : setDisabled(false)
    }

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;

    }

    function handleValidate(markers) {
        if (markers.length > 0) {
            setDisabled(true)
        }
    }

    useEffect(() => {
        if (!loading) return
        async function savePostChanges() {
            const body = JSON.stringify({ content: editorVal })
            let res = await fetch(`${import.meta.env.PUBLIC_ASTRO_APP_API_URL}/blogPost/${post.postTitle}`, {
                method: 'PUT',
                body
            })
            let resBody = await res.body.json
            setLoading(false)
        }
        savePostChanges()
    }, [loading])
    const buttonStyle = "w-auto h-auto bg-black/75 text-white m-2 ml-[4px] p-2 rounded-xl border-l-2 border-b-2 hover:cursor-pointer hover:border-0 hover:ml-[6px] hover:border-t-[2px] hover:border-r-[2px] hover:border-pink-600 hover:shadow-inner hover:shadow-pink-600/40"
    const buttonLoadStyle = "h-auto bg-gray-800/75 text-white m-2 ml-[4px] p-2 rounded-xl border-l-2 border-b-2"
    const buttonDisabledStyle = "h-auto bg-gray-800/75  m-2 ml-[4px] p-2 rounded-xl border-l-2 border-b-2 border-white/10 text-white/10"

    return (
        <div className>
            <div>
                <Editor
                    height="80vh"
                    theme='vs-dark'
                    defaultLanguage="json"
                    defaultValue={editorVal}
                    onMount={handleEditorDidMount}
                    onChange={handleChange}
                    onValidate={handleValidate}
                />
            </div>
            {
                disabled ? <button disabled={true} className={buttonDisabledStyle} >save </button> :
                    loading ? <button className={buttonLoadStyle} > loading...</button> : <button onClick={saveOnClick} className={buttonStyle} > save </button>
            }

        </div>

    );
} 