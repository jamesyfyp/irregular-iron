export default function Button(props) {
    const { name, className, onClick } = props;
    return (
        <button type='button' onClick={onClick} className={className}>{name}</button>
    )
}