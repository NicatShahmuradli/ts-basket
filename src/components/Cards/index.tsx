import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, } from "@mui/material";
import { Basket } from "../../types/type";

interface IProps {
  addBasket: (item: Basket) => void;
  products: Basket[];
  basket: Basket[];
  handleDecrease:(item: Basket) => void;
  handleIncrease:(item: Basket) => void;

}

const Cards: React.FC<IProps> = ({ addBasket, products, basket, handleDecrease, handleIncrease }) => {

  console.log(products);
  
  return (
    <>
      <div>
        <h1>Products</h1>
        {products.map((item) => (
          <Card key={item.id} sx={{ maxWidth: 345, marginBottom: "50px" }}>
            <CardMedia
              component="img"
              height="140"
              image="https://bmw.scene7.com/is/image/BMW/g60-bev-tech-data-stage-ext-3-4-front-1?wid=3000&hei=3000"
              alt={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.name}
              </Typography>
            </CardContent>
              <Button
                size="small"
                color="primary"
                onClick={() => addBasket(item)}
              >
                Add
              </Button>          </Card>
        ))}
      </div>

      <div>
        <h1>Basket</h1>
          {basket
            .map((item) => (
              <Card key={item.id} sx={{ maxWidth: 345, marginBottom: "50px" }}>
            <CardMedia
              component="img"
              height="140"
              image="https://bmw.scene7.com/is/image/BMW/g60-bev-tech-data-stage-ext-3-4-front-1?wid=3000&hei=3000"
              alt={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              <Button variant="contained" onClick={() => handleIncrease(item)} >+</Button>
                <h1>{item.quantity}</h1>
              <Button variant="contained" color="error" onClick={() => handleDecrease(item)}>-</Button>
              </Typography>
            </CardContent>

          </Card>
            ))}
      </div>
    </>
  );
};

export default Cards;
