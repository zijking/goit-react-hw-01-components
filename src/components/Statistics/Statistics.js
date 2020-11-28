import s from './Statistics.module.css';
import PropTypes from 'prop-types';
import color from '../../util/randomColor';

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(st => (
          <li
            key={st.id}
            className={s.item}
            style={{ backgroundColor: color() }}>
            <span className={s.label}>{st.label}</span>
            <span className={s.percentage}>{st.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
