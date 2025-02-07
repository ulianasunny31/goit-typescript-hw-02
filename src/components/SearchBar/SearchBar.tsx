/* eslint-disable react/prop-types */
import { FaSearch } from "react-icons/fa";
import css from './SearchBar.module.css'
import toast from 'react-hot-toast';
import { useState } from "react";


const SearchBar = ({ handleChangeQuery}) => {
  const [value, setValue] = useState('')
  
  
  function handleSubmit(e) {
    
    e.preventDefault()
    
    if (value.trim() === '') {
      toast.error('Please write a search word!');
      return;
    }
    
    handleChangeQuery(value);
  }

  return (
    <header className={css.header}>
    <form onSubmit={handleSubmit}>
    <button className={css.submitBtn} type="submit"><FaSearch /></button>
    <input
      type="text"
      placeholder="Search images and photos"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
    
  </form>
</header>

  )
}

export default SearchBar