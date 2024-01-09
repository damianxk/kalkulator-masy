import { Link } from 'react-router-dom';
import css from './AluList.module.css';

const AluList = ({items}) => {
  return (
    <>
      <ul className={css.list}>
        {items.map((item) => (
          <li key={item.id} className={css.li}>
            <Link to={`/aluminium/${item.id}`} className={css.link}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AluList;
