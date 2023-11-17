import MenuItems from "./MenuItems";

const MenuCategory = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5 px-5 mt-10 mb-5">
        {items.map((items) => (
          <MenuItems key={items._id} items={items}></MenuItems>
        ))}
      </div>
      <div className="text-center my-5">
        <button className="btn btn-outline btn-warning">Full menu view</button>
      </div>
    </div>
  );
};

export default MenuCategory;
