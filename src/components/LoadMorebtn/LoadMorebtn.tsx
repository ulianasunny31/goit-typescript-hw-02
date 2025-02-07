/* eslint-disable react/prop-types */
import css from './LoadMorebtn.module.css'
const LoadMorebtn = ({changePage}) => {
  return (
    <button className={css.loadMoreBtn} onClick={changePage}>MORE</button>
  )
}

export default LoadMorebtn