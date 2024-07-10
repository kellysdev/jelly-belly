import "../modal/modal.css"

export const Modal = ({ showModal, closeModal, singleBean }) => {
  if (!showModal) return null;

  return (
    <div className="modal-view" onClick={closeModal}>

      <div className="modal-box">
        <h1 className="lobster">{singleBean.flavorName}</h1>

        <div className="main-content">
          <img
            src={singleBean.imageUrl} alt={singleBean.flavorName} 
            className="modal-bean-image"
          />
          <p
            className="descriptive-text"
            style={{
              border: `2px solid ${singleBean.backgroundColor}`,
              boxShadow: `2px 2px 0px 0px ${singleBean.backgroundColor}`
            }}
          >
            <b>{singleBean.description}</b>
            <br />
            <br />
            {(singleBean.groupName).reduce((p, c) => [p, <br />, c])}
          </p>
        </div>

        <p className="ingredients" >
          Ingredients:<br />
          {(singleBean.ingredients).join(", ")}
        </p>
      </div>



    </div>
  );
};

export default Modal;