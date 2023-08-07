import { useState } from "react";

export default function Login() {
    const [email, setEmailName] = useState('')
    const [passWord, setPassword] = useState('')
    async function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit} className="w-[300px] m-auto pt-10">
            <ul className="grid grid-rows-3">
                <li className="grid-rows-2">
                    <label className='w-[10rem]'>user name:</label>
                    <input type="text" defaultValue={email} onChange={(e) => setEmailName(e.target.value)} />
                </li>
                <li className="grid-rows-2">
                    <label>password:</label>
                    <input type="text" defaultValue={passWord} onChange={(e) => setPassword(e.target.value)} />
                </li>
                <button className="bg-white w-auto m-auto p-1" type="submit">submit</button>
            </ul>
        </form>
    )
}