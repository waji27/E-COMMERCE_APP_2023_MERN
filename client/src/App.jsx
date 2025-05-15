import Login from "./pages/AuthPages/Login";
import Signup from "./pages/AuthPages/Signup";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
