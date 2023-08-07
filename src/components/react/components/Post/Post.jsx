import TimeStamp from "../TimeStamp"

export default function Post({ post, content }) {
    let postContent = content ? JSON.parse(content) : post.content
    console.log(JSON.parse(post.content))
    return (
        <div className="relative h-auto text-white w-auto m-5 p-5 border-2 rounded-md shadow-xl bg-black/50">
            <h1 className="text-2xl font-bold">{post.postTitle.replace(/_/g, ' ')}</h1>
            <TimeStamp timeStamp={post.createdAt} />
            {Object.keys(postContent).map((x, i) => {
                console.log(typeof x)
                if (x.includes("text")) return (<p>{postContent[x]}</p>)
                if (x.includes("hello")) return (<div className='bg-red-300' key={i}>{postContent[x]}</div>)
                if (x.includes("test")) return (<div key={i}>test: {postContent[x]}</div>)
            })}
        </div>
    )
}