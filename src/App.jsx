import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/Admin";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Setting";
import Subscriptions from "./pages/Subscrition";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="subscription" element={<Subscriptions/>}/>
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
