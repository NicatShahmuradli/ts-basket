import "./App.css";
import Navbar from "./components/Navbar/index.tsx";
import Cards from "./components/Cards/index.tsx";
import { useState } from "react";
import { Basket } from "./types/type.ts";

const App: React.FC = () => {
  const [basket, setBasket] = useState<Basket[]>([]);
  const [products, setProducts] = useState<Basket[]>([
    {
      id: 1,
      name: "BMW",
      quantity: 0,
    },

    {
      id: 2,
      name: "Mercedes",
      quantity: 0,
    },
  ]);
  console.log(basket);
  

  const handleAddBasket = (item: Basket) => {
    const existingItem = basket.find((e) => e.id == item.id);

    if (!existingItem) {
      setBasket([...basket, { ...item, quantity: 1 }]);
    } else {
      const updatedBasket = basket.map((e) =>
        e.id === existingItem.id ? { ...e, quantity: e.quantity + 1 } : e
      );
      setBasket(updatedBasket);
    }
  };


  const handleIncrease=(item:Basket)=>{
    item.quantity++;
    setBasket([...basket]);

  }
  const handleDecrease=(item:Basket)=>{
    if (item.quantity > 1) {
      item.quantity--;
      setBasket([...basket]);
    }
  }

  return (
    <>
      <Navbar basket={basket} />
      <Cards addBasket={handleAddBasket} products={products} basket={basket}  handleIncrease={handleIncrease}  handleDecrease={handleDecrease}/>
    </>
  );
};

export default App;
