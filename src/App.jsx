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
import StartingWizard from "./pages/StartingWizard/StartingWizard";
import Categories from "./pages/Categories/Categories";
// import MenuItems from "./pages/MenuItems/MenuItems";
// import AppLayout from "./ui/AppLayout/AppLayout";
import { IoCheckmark } from "react-icons/io5";
import { Toaster } from "react-hot-toast";
import { GoAlert } from "react-icons/go";
import Items from "./pages/Items/Items";
import Loader from "./ui/Loader/Loader";
// import Menus from "./pages/Menus/Menus";
import React, { Suspense } from "react";
// import Login from "./pages/Login/Login";
const Login = React.lazy(() => import("./pages/Login/Login"));
const AppLayout = React.lazy(() => import("./ui/AppLayout/AppLayout"));
const Menus = React.lazy(() => import("./pages/Menus/Menus"));
const MenuItems = React.lazy(() => import("./pages/MenuItems/MenuItems"));

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryProvider client={queryClient}>
      <Router>
        <Suspense fallback={<Loader fullScreen={true} />}>
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
              <Route path="/setup-wizard" element={<StartingWizard />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/categories/items/:id" element={<Items />} />
            </Route>
            <Route path="/menus/location/:id" element={<Menus />} />
            <Route
              path="/menus/location/:id/:category"
              element={<MenuItems />}
            />
          </Routes>
        </Suspense>
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
            icon: <IoCheckmark size={20} color="rgba(255, 255, 255, 0.87)" />,
            style: {
              border: "1px solid green",
            },
          },
          error: {
            icon: <GoAlert size={20} color="rgba(255, 255, 255, 0.87)" />,
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
