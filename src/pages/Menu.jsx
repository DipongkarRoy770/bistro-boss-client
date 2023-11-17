import { Helmet } from "react-helmet-async";
import Cover from "../shired/Cover";
import coverMenu from '../assets/menu/banner3.jpg'
import dessert from '../assets/menu/dessert-bg.jpeg'
import pizza1 from '../assets/menu/pizza-bg.jpg'
import salads from '../assets/menu/salad-bg.jpg'
import soups from '../assets/menu/soup-bg.jpg'
import useMenu from "../../public/hooks/useMenu";
import Section from "../shired/Section";
import MenuCategory from "../component/MenuCategory";


const Menu = () => {

    const [menu] = useMenu()
    const desserts = menu.filter(items =>items.category==='dessert')
    const salad = menu.filter(items =>items.category==='salad')
    const soup = menu.filter(items =>items.category==='soup')
    const pizza = menu.filter(items =>items.category==='pizza')
    const offered = menu.filter(items =>items.category==='offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            
            <Cover coverTitle={'Our menu'} img={coverMenu}></Cover>
            <Section subHeading={'--- Don miss---'} Heading={'TODAYS OFFER'}></Section>
            <MenuCategory items={offered}></MenuCategory>
            <Cover coverTitle={'Our Desserts'} img={dessert}></Cover>
            <MenuCategory items={desserts} ></MenuCategory>
            <Cover coverTitle={'Our Pizza'} img={pizza1}></Cover>
            <MenuCategory items={pizza} ></MenuCategory>
            <Cover coverTitle={'Our Salads'} img={salads}></Cover>
            <MenuCategory items={salad} ></MenuCategory>
            <Cover coverTitle={'Our Soup'} img={soups}></Cover>
            <MenuCategory items={soup} ></MenuCategory>
        </div>
    );
};

export default Menu;