import Login from "./pages/AuthPages/Login";
import Signup from "./pages/AuthPages/Signup";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/Cart";
import Dashboard from "./pages/UserPages/Dashboard";
import PrivateRoute from "./Routes/UserRoute";
import AdminRoute from "./Routes/AdminRoute";
import AdminDashboard from "./pages/AdminPages/AdminDashboard";
import Profile from "./pages/UserPages/Profile";
import Orders from "./pages/UserPages/Orders";
import Search from "./pages/Search";
import CreateCategory from "./pages/AdminPages/CreateCategory";
import CreateProduct from "./pages/AdminPages/CreateProduct";
import UpdateProduct from "./pages/AdminPages/UpdateProduct";
import Products from "./pages/AdminPages/Products";
import Users from "./pages/AdminPages/ Users";
import AdminOrders from "./pages/AdminPages/AdminOrders";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/orders" element={<Orders />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
