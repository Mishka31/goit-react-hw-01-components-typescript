import s from './statistics.module.css'

type statOption = { id: string; label: string; percentage: number }

interface Props {
  title: string
  stats: statOption[]
}

function Statistics({ title, stats }: Props) {
  const colors = () =>
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  return (
    <section className={s.section}>
      {title && <h2 className={s.headers}>{title}</h2>}
      <ul className={s.container}>
        {stats.map((stat) => (
          <li
            key={stat.id}
            className={s.itemList}
            style={{ backgroundColor: colors() }}
          >
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Statistics
