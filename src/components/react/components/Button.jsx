export default function Button(props) {
    const { name, className, onClick } = props;
    return (
        <div type='button' onClick={onClick} className={className}>{name}</div>
    )
}