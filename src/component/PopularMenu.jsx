
import useMenu from "../../public/hooks/useMenu";
import Section from "../shired/Section";
import MenuItems from "./MenuItems";

const PopularMenu = () => {
  const [menu] =useMenu()
  const popular = menu.filter(items=>items.category==='popular')
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularData = data.filter(
  //         (items) => items.category === "popular"
  //       );
  //       setMenu(popularData);
  //     });
  // }, []);
  return (
    <section className="mb-12">
      <Section
        subHeading={"popular items"}
        Heading={"From here Menu"}
      ></Section>

      <div className="grid md:grid-cols-2 gap-5 px-5 mt-10 mb-5">
        {popular.map((items) => (
          <MenuItems key={items._id} items={items}></MenuItems>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="btn btn-outline btn-warning">Full menu view</button>
      </div>
    </section>
  );
};

export default PopularMenu;
