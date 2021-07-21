import "./App.css"
import { Switch, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import { Container } from "react-bootstrap";
import CustomNavbar from "./components/CustomNavbar";

const App = () => (
  <div>
    <CustomNavbar />

    <Container className="p-3">
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path="/products/:id" component={Product} />
        <Route path="/products" component={ProductList} />
        <Route path="/add" component={AddProduct} />
      </Switch>
    </Container>
  </div>
);

export default App;
