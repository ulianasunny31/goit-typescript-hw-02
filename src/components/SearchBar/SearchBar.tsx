import { FaSearch } from 'react-icons/fa';
import css from './SearchBar.module.css';
import toast from 'react-hot-toast';
import { ChangeEvent, FormEvent, useState } from 'react';

export interface ISearchBarProps {
  handleChangeQuery: (val: string) => void;
}

const SearchBar: React.FC<ISearchBarProps> = ({ handleChangeQuery }) => {
  const [value, setValue] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (value.trim() === '') {
      toast.error('Please write a search word!');
      return;
    }

    handleChangeQuery(value);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <button className={css.submitBtn} type="submit">
          <FaSearch />
        </button>
        <input
          type="text"
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default SearchBar;
