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
import ProtectedRoute from "./features/auth/ProtectedRoute/ProtectedRoute";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Categories from "./pages/Categories/Categories";
import MenuItems from "./pages/MenuItems/MenuItems";
import AppLayout from "./ui/AppLayout/AppLayout";
import { IoCheckmark } from "react-icons/io5";
import { Toaster } from "react-hot-toast";
import { GoAlert } from "react-icons/go";
import Items from "./pages/Items/Items";
import Menus from "./pages/Menus/Menus";
import Login from "./pages/Login/Login";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/categories" />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/items/:id" element={<Items />} />
          </Route>
          <Route path="/menus/location/:id" element={<Menus />} />
          <Route path="/menus/location/:id/:category" element={<MenuItems />} />
        </Routes>
      </Router>
      {/* notification toaster with defined styles */}
      <Toaster
        position="top-center"
        gutter={8}
        toastOptions={{
          duration: 3000,
          style: {
            background: "black",
            color: "#fff",
            border: "1px solid blueviolet",
            fontSize: "1.2rem",
            marginTop: "3rem",
          },
          success: {
            icon: <IoCheckmark size={20} color="#fff" />,
          },
          error: {
            icon: <GoAlert size={20} color="#fff" />,
            style: {
              border: "1px solid red",
            },
          },
        }}
      />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryProvider>
  );
}

export default App;
