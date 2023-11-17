import featured from "../assets/menu/pizza-bg.jpg";
import Section from "../shired/Section";
const Featured = () => {
  return (
    <section
      className="my-12"
      
    >
      <Section
        subHeading={"---Check it out---"}
        Heading={"FROM OUR MENU"}
      ></Section>

      <section className="py-12" style={{
        backgroundImage:
          "url(https://as2.ftcdn.net/v2/jpg/05/46/01/09/1000_F_546010921_aGoSCAWeQeXXkiGng9GwgUvChB6XvS6n.jpg)",
      }}>
        <div className=" md:flex justify-center items-center gap-5 px-12 mt-5">
          <div className="w-1/2">
            <img className="rounded" src={featured} alt="" />
          </div>
          <div className="w-1/2">
            <p className="mr-4 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
              necessitatibus saepe id suscipit quia vel voluptatum recusandae,
              quisquam vitae eaque est ipsum doloremque explicabo. Iure
              accusamus temporibus rerum minus! Molestias.
            </p>
            <button className="btn btn-secondary mt-3">buy now</button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Featured;
