import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Create from "./pages/Create";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Default Page */}
        <Route index element={<Home />} />

        {/* Other Pages */}
        <Route path="explore" element={<Explore />} />
        <Route path="create" element={<Create />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;