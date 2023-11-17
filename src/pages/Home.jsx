import Contact from "../component/Contact";
import Featured from "../component/Featured";
import HomeCart from "../component/HomeCart";
import PopularMenu from "../component/PopularMenu";
import Testmonial from "../component/Testmonial";
import SectionBanner from "../shired/SectionBanner";
import Banner from "./Banner";
import Category from "./Category";
import { Helmet} from 'react-helmet-async';



const Home = () => {
    return (
        <>
            <Helmet>
                <title>Bistro boss || Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <SectionBanner></SectionBanner>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <HomeCart></HomeCart>
            <Featured></Featured>
            <Testmonial></Testmonial>
        </>
    );
};

export default Home;