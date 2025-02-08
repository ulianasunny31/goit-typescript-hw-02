import css from './LoadMorebtn.module.css';
import React from 'react';

interface ILoadMoreBtnProps {
  changePage: () => void;
}
const LoadMorebtn: React.FC<ILoadMoreBtnProps> = ({ changePage }) => {
  return (
    <button className={css.loadMoreBtn} onClick={changePage}>
      MORE
    </button>
  );
};

export default LoadMorebtn;
