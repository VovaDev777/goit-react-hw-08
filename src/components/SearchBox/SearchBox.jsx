import { useDispatch } from 'react-redux';
import css from './SearchBox.module.css'
import { setFilter } from '../../redux/filters/slice';

const SearchBox = () => {

  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    dispatch(setFilter(event.target.value));
  }

  return (
    <form className={css.form}>
      <label className={css.label}>Find contacts by name</label>
      <input
        type="text"
        className={css.input}
        // value={filter}
        onChange={handleSearchChange}
      />
    </form>
  )
}

export default SearchBox