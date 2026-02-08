import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import { useState } from "react";
import "./admin.css";

export default function AdminLayout() {

  const [Sidebars,setSidebar]=useState(false);
  
  return (
    <div className="admin-wrapper">
      <Sidebar isOpen={Sidebars} />
      <div className={`admin-right ${Sidebars ? "open" : "closed"}`}>
        <Header ToggleSidebar={()=>setSidebar(!Sidebars)} />
        <main className="admin-body">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
