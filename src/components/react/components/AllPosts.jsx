import { useEffect, useState } from "react";


export default function AllPosts() {
    const [allPosts, setAllPosts] = useState('')
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
                    setAllBlogPosts(data)
                    setLoading(false)
                })
                .catch((error) => {
                    setError(true)
                });
        }
        req()
    }, [])

    loading && (<>Loading</>)
    error && (
        <>
            {window.location.pathname = 'google.com'}
        </>

    )
    return (
        <div>
            {
                allBlogPosts?.map((post) => {
                    const title = post?.postTitle;
                    const content = post?.content;
                    return (
                        <div class="h-auto w-3/4 sm:w-1/2 bg-violet-900/50 m-auto  mt-4 py-8 px-16 border-2 border-white rounded-xl hover:invert">
                            <a href={`http://localhost:3000/blog/${title}`}>
                                <div class="grid grid-cols-10  gap-8">
                                    <div class="col-span-2">
                                        <h1 class="text-white font-bold">{title}</h1>
                                    </div>
                                    <div class="col-span-7 line-clamp-3 max-h-16 overflow-hidden">
                                        <p class="text-sm text-white ">{content?.test}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    );
                })
            }
        </div>

    )
}