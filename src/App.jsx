import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Categories from "./pages/Categories/Categories";
import AppLayout from "./ui/AppLayout/AppLayout";
import Items from "./pages/Items/Items";
import Menus from "./pages/Menus/Menus";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="/categories" />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/items/:id" element={<Items />} />
        </Route>
        <Route path="/menus/location/:id" element={<Menus />} />
      </Routes>
    </Router>
  );
}

export default App;
