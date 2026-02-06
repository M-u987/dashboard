import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import "./admin.css";

export default function AdminLayout() {


  return (
    <div className="admin-wrapper">
      <Sidebar />
      <div className="admin-right">
        <Header />
        <main className="admin-body">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
