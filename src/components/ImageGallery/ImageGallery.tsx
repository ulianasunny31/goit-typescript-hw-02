/* eslint-disable react/prop-types */
import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'
import { nanoid } from 'nanoid'

const ImageGallery = ({ pics, onImageClick}) => {
    
  return (
      <ul className={css.galleryList}>
      {pics.map((pic) => {
              return (
            <li key={nanoid()}>
                 <ImageCard pic={pic} onImageClick={onImageClick}/>
            </li>
)          })}
    </ul>
  )
}

export default ImageGallery