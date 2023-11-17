import image1 from '../assets/home/slide1.jpg'
import image2 from '../assets/home/slide2.jpg'
import image3 from '../assets/home/slide3.jpg'
const HomeCart = () => {
  return (
    <section className='mt-12'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-5'>
        <div className="w-96 bg-base-300">
          <figure className="px-10 pt-10">
            <img
              src={image1}
              alt="Shoes"
              className="rounded-xl h-60"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-primary">Add to cart</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-300">
          <figure className="px-10 pt-10">
            <img
              src={image2}
              alt="Shoes"
              className="rounded-xl h-60"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Add to card</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-300">
          <figure className="px-10 pt-10">
            <img
              src={image3}
              alt="Shoes"
              className="rounded-xl h-60"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCart;
