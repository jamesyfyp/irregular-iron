export default function Button({ name, className, onClick, href }) {
    return (
        <a rel='prefetch' className={className} href={href} >
            {name}
        </a>
    )
}