import { Link } from 'react-router-dom';
import css from '../AluList/AluList.module.css';

const StalList = ({items}) => {
  return (
    <>
      {/* <h2>Lista Przedmiotów</h2> */}
      <ul className={css.list}>
        {items.map((item) => (
          <li key={item.id} className={css.li}>
            <Link to={`/stal/${item.id}`} className={css.link}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default StalList;
