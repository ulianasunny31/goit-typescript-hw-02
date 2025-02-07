/* eslint-disable react/prop-types */
 

const ImageCard = ({pic, onImageClick}) => {
  return (
<div>
      <img src={pic.urls.small}   alt={pic.description} onClick={() => onImageClick(pic)}/>
</div>

  )
}

export default ImageCard