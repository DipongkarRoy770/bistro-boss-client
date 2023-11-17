import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../shired/Cover";
import orderFoodImg from "../assets/shop/banner2.jpg";
import { useState } from "react";
import useMenu from "../../public/hooks/useMenu";
import FoodCart from "../shired/FoodCart";

const OrderFood = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [menu] = useMenu()
    const desserts = menu.filter(items =>items.category==='dessert')
    const salad = menu.filter(items =>items.category==='salad')
    const soup = menu.filter(items =>items.category==='soup')
    const pizza = menu.filter(items =>items.category==='pizza')
    const drinks = menu.filter(items =>items.category==='drinks')

  return (
    <>
      <Cover img={orderFoodImg} coverTitle={"Food Order Now"}></Cover>
      <Tabs className='text-center items-center justify-center my-5' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Desserts</Tab>
          <Tab>Pizza</Tab>
          <Tab> Salads</Tab>
          <Tab>Soup</Tab>
          <Tab>Drinks</Tab>
          
        </TabList>
        <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 px-6 gap-5">
            {
                desserts.map(items =><FoodCart
                key={items._id}
                items={items}
                ></FoodCart>)
            }
            </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 px-6 gap-5">
            {
                pizza.map(items =><FoodCart
                key={items._id}
                items={items}
                ></FoodCart>)
            }
            </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 px-6 gap-5">
            {
                salad.map(items =><FoodCart
                key={items._id}
                items={items}
                ></FoodCart>)
            }
            </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 px-6 gap-5">
            {
                soup.map(items =><FoodCart
                key={items._id}
                items={items}
                ></FoodCart>)
            }
            </div>
        </TabPanel>
        <TabPanel>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 px-6 gap-5">
            {
                drinks.map(items =><FoodCart
                key={items._id}
                items={items}
                ></FoodCart>)
            }
            </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default OrderFood;
