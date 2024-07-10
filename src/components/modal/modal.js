import "../modal/modal.css"

export const Modal = ({ showModal, closeModal, singleBean }) => {
  if (!showModal) return null;

  return (
    <div className="modal-view" onClick={closeModal}>

      <div className="modal-box">
        <h1 className="lobster">{singleBean.flavorName}</h1>

        <div className="singlebean-descriptive-text">
          <img
            src={singleBean.imageUrl} alt={singleBean.flavorName} 
            className="modal-bean-image"
          />
          <p>
            {singleBean.groupName}
            <br />
            <br />
            {singleBean.description}
          </p>
        </div>

        <p style={{ border: `2px solid ${singleBean.backgroundColor}`}} className="ingredients">
          Ingredients:<br />
          {singleBean.ingredients}
        </p>
      </div>

    </div>
  );
};

export default Modal;