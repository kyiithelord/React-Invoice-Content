import React, { useContext } from "react";
import Product from "./Product";
import { GeneralContext } from "../Contexts/GeneralContent";

function ProductGroup() {
  const { products } = useContext(GeneralContext);
  return (
    <div id="productGroup" className="p-3">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGroup;
