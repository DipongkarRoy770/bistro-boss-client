import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import image1 from '../assets/home/01.jpg'
import image2 from '../assets/home/02.jpg'
import image3 from '../assets/home/03.png'
import image4 from '../assets/home/04.jpg'
import image5 from '../assets/home/05.png'
import image6 from '../assets/home/06.png'

const Banner = () => {
  return (
    <AwesomeSlider>
      <div>
        <img src={image1} alt="" />
      </div>
      <div>
        <img src={image2} alt="" />
      </div>
      <div>
        <img src={image3} alt="" />
      </div>
      <div>
        <img src={image4} alt="" />
      </div>
      <div>
        <img src={image5} alt="" />
      </div>
      <div>
        <img src={image6} alt="" />
      </div>
    </AwesomeSlider>
  );
};

export default Banner;
