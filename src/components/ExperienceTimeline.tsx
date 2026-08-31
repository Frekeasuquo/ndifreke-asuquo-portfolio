import { Reveal } from "./Reveal";

type ExperienceItem = { period: string; datetime: string; title: string; company: string; achievements: readonly string[]};

export function ExperinceTimeline({ items }: {items: readonly ExperienceItem[] }) {
    return <ol className="timeline">
        {items.map((item) => <Reveal as="li" key={item.datetime} className="timeline-item">
            <time dateTime={item.datetime}>{item.period}</time>
            <h3>{item.title}</h3>
            <p className="company">{item.company}</p>
            <ul className="achievement-list">
                {item.achievements.map((achievement) => <li key={achievement}> {achievement} </li>)}
            </ul>
        </Reveal>)}
    </ol>
}