import { useEffect, useState } from "react";
import Post from "./Post";

export default function AllPosts({ admin = false }) {
    const [allPosts, setAllPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function req() {
            const allBlogPosts = await fetch(
                "https://di10dsxzc6.execute-api.us-east-1.amazonaws.com/blogPosts"
            )
                .then((response) => {
                    if (!response.ok) {
                        setError(true)
                    }
                    return response.json();
                })
                .then((data) => {
                    setAllPosts(data)
                    setLoading(false)
                })
                .catch((error) => {
                    setError(true)
                });
        }
        req()
    }, [])


    return (
        <div>
            {loading && (<div className="h-auto text-white w-3/4 sm:w-1/2 bg-violet-900/50 m-auto  mt-4 py-8 px-16 border-2 border-white rounded-xl hover:invert" >loading...</div>)}
            {!loading && (
                allPosts?.map((post, i) => {
                    return (
                        <Post key={i} admin={admin} title={post?.postTitle} content={post?.content} setLoading={setLoading} />
                    );
                })
            )
            }
        </div>
    )
}