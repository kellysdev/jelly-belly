import "../bean-button/bean-button.css"

export const BeanButton = ({ bean }) => {
  return (
    <button className="bean-button">
      <img 
        src={bean.imageUrl} alt={bean.flavorName}
        className="bean-image"
      />
      {bean.flavorName}
    </button>
  );
};

export default BeanButton;