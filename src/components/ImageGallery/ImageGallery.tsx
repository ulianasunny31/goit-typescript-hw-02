import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { nanoid } from 'nanoid';
import { IGallery } from '../../App';

interface IGalleryProps {
  pics: IGallery[];
  onImageClick: (pic: unknown) => void;
}

const ImageGallery: React.FC<IGalleryProps> = ({ pics, onImageClick }) => {
  return (
    <ul className={css.galleryList}>
      {pics.map((pic) => {
        return (
          <li key={nanoid()}>
            <ImageCard pic={pic} onImageClick={onImageClick} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
