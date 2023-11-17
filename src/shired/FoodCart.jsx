const FoodCart = ({ items }) => {
  const { image, recipe, price, name } = items;
  return (
    <div className=" w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
       <div className="flex gap-4">
       <h2 className="text-xl font-semibold">{name}</h2>
        <h4>price:${price}</h4>
       </div>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Buy Food Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
