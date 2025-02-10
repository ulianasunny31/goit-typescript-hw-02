import { RingLoader } from 'react-spinners';
// import { MagnifyingGlass } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader: React.FC = () => {
  const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
  };

  return (
    <div className={css.loader}>
      <RingLoader
        color="#e15b64"
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      // <MagnifyingGlass
      //   visible={true}
      //   height="150"
      //   width="150"
      //   ariaLabel="magnifying-glass-loading"
      //   wrapperStyle={{}}
      //   wrapperClass=""
      //   glassColor="#c0efff"
      //   color="#e15b64"
      // />
    </div>
  );
};

export default Loader;
