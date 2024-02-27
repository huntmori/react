
export default function Section({ id, className, title, children }) {
    return (
        <section id={id} className={className}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}