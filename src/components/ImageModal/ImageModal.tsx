import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

interface IGalleryProps {
  modalOpenPicInfo: {
    urls: {
      regular: string;
    };
    user: {
      instagram_username: string;
    };
    likes: number;
    description: string;
  };
  onModalClose: () => void;
}

const ImageModal: React.FC<IGalleryProps> = ({
  modalOpenPicInfo,
  onModalClose,
}) => {
  return (
    <Modal
      isOpen={!!modalOpenPicInfo}
      onRequestClose={onModalClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      {modalOpenPicInfo && (
        <div>
          <img className={css.modalImg} src={modalOpenPicInfo.urls.regular} />
          <div className={css.imageTextDiv}>
            <p>@{modalOpenPicInfo.user.instagram_username}</p>
            <p>Likes: {modalOpenPicInfo.likes}</p>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
