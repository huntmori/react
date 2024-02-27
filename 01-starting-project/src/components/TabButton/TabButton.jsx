//export default function TabButton(props) {
export default function TabButton({ children, onSelect }) {
    console.log('TabButton COMPONENT EXECUTING');

    return (
        <li>
            <button onClick={onSelect}>
                {children}
            </button>
        </li>
    );
}