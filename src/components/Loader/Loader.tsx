import { MagnifyingGlass } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={css.loader}>
      /{' '}
      <MagnifyingGlass
        visible={true}
        height="150"
        width="150"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
};

export default Loader;
