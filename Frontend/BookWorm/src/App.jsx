import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Cart from "./Components/Cart";
import Layout from "./Components/Layout";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Layout> <Home /> </Layout>} />
        <Route path="/cart" element={<Layout> <Cart /> </Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
