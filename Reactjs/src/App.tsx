import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Client from "./layouts/Client";
import { Toaster } from "react-hot-toast";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/admin/ProductList";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./components/PrivateRoute";
import ProductAdd from "./pages/admin/ProductAdd";
import ProductEdit from "./pages/admin/ProductEdit";

function App() {
  const routeConfig = [
    {
      path: "admin",
      element: (
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      ),
      children: [
        { path: "product/list", element: <ProductList /> },
        { path: "product/add", element: <ProductAdd /> },
        { path: "product/edit/:id", element: <ProductEdit /> },
      ],
    },
    {
      path: "",
      element: <Client />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "product/:id",
          element: <ProductDetail />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ];
  const routes = useRoutes(routeConfig);
  return (
    <main>
      {routes}
      <Toaster />
    </main>
  );
}

export default App;
