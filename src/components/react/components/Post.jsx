export default function Post({ content, title, setLoading, admin }) {
    return (
        <div className="h-auto w-3/4 sm:w-1/2 bg-violet-900/50 m-auto  mt-4 py-8 px-16 border-2 border-white rounded-xl hover:invert">
            <a rel="prefetch" href={admin ? `http://localhost:3000/admin/editPost/${title}` : `http://localhost:3000/blog/${title}`} onClick={() => { setLoading(true) }}>
                <div className="grid grid-cols-10  gap-8">
                    <div className="col-span-2">
                        <h1 className="text-white font-bold">{title}</h1>
                    </div>
                    <div className="col-span-7 line-clamp-3 max-h-16 overflow-hidden">
                        <p className="text-sm text-white ">{content?.test}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}