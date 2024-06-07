import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Home } from "./components/Home";
import { Products } from "./components/Products";

// * Another way of creating route definitions instead of object way.
const routeObject = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
  </Route>
);


const router = createBrowserRouter(
  // [
  //   { path: '/', element: <Home /> },
  //   {path : '/products', element: <Products />}
  // ]
  routeObject
);

function App() {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
