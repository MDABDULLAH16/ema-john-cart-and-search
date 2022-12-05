import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home/Home";
import OrderReview from "./components/OrderReview/OrderReview";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="orderReview" element={<OrderReview></OrderReview>}></Route>
      </Routes>
    </div>
  );
}

export default App;
