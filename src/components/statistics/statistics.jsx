import PropTypes from "prop-types";
import s from "./statistics.module.css";

function Statistics({ title, stats }) {
  const colors = () => "#" + (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase();
  return (
    <section className={s.section}>
      {title && <h2 className={s.headers}>{title}</h2>}
      <ul className={s.container}>
        {stats.map((stat) => (
          <li key={stat.id} className={s.itemList} style={{ backgroundColor: colors() }}>
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
