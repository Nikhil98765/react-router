import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { RootLayout } from "./components/RootLayout";
import { ErrorPage } from "./components/ErrorPage";
import { ProductDetails } from "./components/ProductDetails";

// * Another way of creating route definitions instead of object way.
// const routeObject = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Products />} />
//   </Route>
// );


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      {path: "/products/:productId", element: <ProductDetails />}
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
