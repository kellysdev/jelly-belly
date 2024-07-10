import "../bean-button/bean-button.css"

export const BeanButton = ({ bean, singleBean, setSingleBean, openModal }) => {
  const handleClick = (e) => {
    setSingleBean(bean);
    openModal();
  };

  return (
    <button onClick={handleClick} className="bean-button">
      <img 
        src={bean.imageUrl} alt={bean.flavorName}
        className="bean-image"
      />
      {bean.flavorName}
    </button>
  );
};

export default BeanButton;