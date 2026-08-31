
export function SectionHeading({command, title, id}: {command: string; title: string; id?: string }) {
    return <div className="section-heading reveal">
        <p className="section-label">{command}</p>
        <h2 id={id} className="section-title">{title}</h2>
    </div>
}