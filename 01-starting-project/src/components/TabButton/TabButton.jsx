//export default function TabButton(props) {
export default function TabButton({ children, isSelected, ...props }) {
    console.log('TabButton COMPONENT EXECUTING');

    return (
        <li>
            <button className={isSelected ? 'active' : ''} { ...props }>
                {children}
            </button>
        </li>
    );
}