export const BeanButton = ({ bean }) => {
  return (
    <button className="bean-button">
      <img src={bean.imageUrl} alt={bean.flavorName} />
      {bean.flavorName}
    </button>
  );
};

export default BeanButton;