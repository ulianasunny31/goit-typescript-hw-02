import { IGallery } from '../../App';
import React from 'react';

interface Props {
  pic: IGallery;
  onImageClick: (pic: IGallery) => void;
}

const ImageCard: React.FC<Props> = ({ pic, onImageClick }) => {
  return (
    <div>
      <img
        src={pic.urls.small}
        alt={pic.description}
        onClick={() => onImageClick(pic)}
      />
    </div>
  );
};

export default ImageCard;
