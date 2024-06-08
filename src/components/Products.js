import {Link} from "react-router-dom";


const products = [
    { id: 'p1', title: 'Product 1' },
    { id: 'p2', title: 'Product 2' },
    { id: 'p3', title: 'Product 3' },
]


export const Products = () => {
  return (
    <>
      <h1>Products Page</h1>
      <ul>
          {products.map(product => (
              <li key={product.id}>
                  <Link to={product.id}>
                      {product.title}
                  </Link>
              </li>
          ))}
      </ul>
    </>
  );
}
