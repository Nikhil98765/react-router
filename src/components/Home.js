import { Link, useNavigate } from "react-router-dom";

export function Home() {

  const navigate = useNavigate();

  function navigateHandle() {
    navigate('/products')
  }

  return (
    <>
      <h1>My Homepage</h1>
      <p>
        Go to <Link to="/products">the products page</Link>
      </p>
      <p>
        <button onClick={navigateHandle}>Navigate Programmatically</button>
      </p>
    </>
  );
}