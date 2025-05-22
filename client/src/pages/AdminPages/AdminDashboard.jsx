import React from "react";
// import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout";
import { useAuth } from "../../context/auth";
import { Link } from "react-router-dom";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div classname="text-center">
        <div classname="list-group dashboard-menu">
          <h4>Admin Panel</h4>
          <Link
            to="/dashboard/admin/create-category"
            classname="list-group-item list-group-item-action"
          >
            Create Category
          </Link>
          <Link
            to="/dashboard/admin/create-product"
            classname="list-group-item list-group-item-action"
          >
            Create Product
          </Link>
          <Link
            to="/dashboard/admin/products"
            classname="list-group-item list-group-item-action"
          >
            Products
          </Link>
          <Link
            to="/dashboard/admin/orders"
            classname="list-group-item list-group-item-action"
          >
            Orders
          </Link>
          {"{"}/*{" "}
          <Link
            to="/dashboard/admin/users"
            classname="list-group-item list-group-item-action"
          >
            Users
          </Link>{" "}
          */{"}"}
        </div>
      </div>

      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">{/* <AdminMenu /> */}</div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3> Admin Name : {auth?.user?.name}</h3>
              <h3> Admin Email : {auth?.user?.email}</h3>
              <h3> Admin Contact : {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
