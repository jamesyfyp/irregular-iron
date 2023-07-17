import TimeStamp from "../TimeStamp"

export default function Post({ post, content }) {
    let postContent = content ? JSON.parse(content) : post.content

    return (
        <div className="relative h-auto text-white w-auto m-5 p-5 border-2 rounded-md shadow-xl bg-black/50">
            <h1 className="text-2xl font-bold">{post.postTitle.replace(/_/g, ' ')}</h1>
            <TimeStamp timeStamp={post.createdAt} />
            {Object.keys(postContent).map((x, i) => {
                if (x == "text") return (<p>{postContent[x]}</p>)
                if (x == "hello") return (<div key={i}>{postContent[x]}</div>)
                if (x == "test") return (<div key={i}>test: {postContent[x]}</div>)
            })}
        </div>
    )
}