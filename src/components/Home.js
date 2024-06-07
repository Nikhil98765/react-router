import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1>My Homepage</h1>
      <p>Go to <Link to="/products">the products page</Link></p>
    </>
  );
}