const MenuItems = ({ items }) => {
  const { image, recipe, price, name } = items;
  return (
    <div className="flex justify-center items-center space-x-4">
      <img className="w-48" style={{borderRadius:'70px 0px 50px'}} src={image} alt="" />
      <div className="flex">
        <h3 className="mr-4">{recipe}</h3>
        <h4 className="text-xl">{name}</h4>
      </div>
      <h4>{price}</h4>
    </div>
  );
};

export default MenuItems;
