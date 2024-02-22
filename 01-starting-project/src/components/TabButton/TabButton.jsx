//export default function TabButton(props) {
export default function TabButton({ children, onSelect }) {
    function handleClick() {
        console.log('hello world');
    };

    return (
        <li>
            <button onClick={onSelect}>
                {children}
            </button>
        </li>
    );
}