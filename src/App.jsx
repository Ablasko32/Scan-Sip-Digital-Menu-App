import {
  QueryClient,
  QueryClientProvider as QueryProvider,
} from "@tanstack/react-query";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Categories from "./pages/Categories/Categories";
import MenuItems from "./pages/MenuItems/MenuItems";
import AppLayout from "./ui/AppLayout/AppLayout";
import Items from "./pages/Items/Items";
import Menus from "./pages/Menus/Menus";
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryProvider client={queryClient}>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="/categories" />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/items/:id" element={<Items />} />
          </Route>
          <Route path="/menus/location/:id" element={<Menus />} />
          <Route path="/menus/location/:id/:category" element={<MenuItems />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryProvider>
  );
}

export default App;
