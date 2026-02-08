import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function Sidebar() {

  return (
    <aside className="sidebar">
      
      <div className="side">
            <h1 >Admin</h1>
            <FaBars/>
      </div>
      <nav className="menu">
        <NavLink to="/" end>Dashboard</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/subscription">Subscription</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>
    </aside>
  );
}
