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
        </Route>
      </Routes>
    </>
  );
}

export default App;
