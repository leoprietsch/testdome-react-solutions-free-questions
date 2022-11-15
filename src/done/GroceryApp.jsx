import React from "react";
import { createRoot } from "react-dom/client";
// copy below from here only for TestDome
const Product = (props) => {
  const plus = () => {
    props.onVote(1, props.index);
  };
  const minus = () => {
    props.onVote(-1, props.index);
  };

  return (
    <li>
      <span>{props.name}</span> - <span>votes: {props.votes}</span>
      <button onClick={plus}>+</button> <button onClick={minus}>-</button>
    </li>
  );
};

const GroceryApp = (props) => {
  const [products, setProducts] = React.useState(props.products);

  const onVote = (dir, index) => {
    products[index].votes += dir;
    console.log(products);
    setProducts([...products]);
  };

  return (
    <ul>
      {products.map((product, index) => {
        return (
          <Product
            key={index}
            index={index}
            name={product.name}
            votes={product.votes}
            onVote={onVote}
          />
        );
      })}
    </ul>
  );
};

// copy above from here only for TestDome

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <GroceryApp
    products={[
      { name: "Oranges", votes: 0 },
      { name: "Bananas", votes: 0 },
    ]}
  />
);
