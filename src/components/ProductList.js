
import { createElement as h } from "react";
import ProductCard from "./ProductCard.js";

function ProductList({ products, onDelete }) {
    if (products.length === 0) {
        return h(
            "div",
            { className: "no-products" },
            h("span", { className: "empty-icon" }, "🌷"),
            h("h3", null, "No products found"),
            h("p", null, "Try another search or add a new product.")
        );
    }

    return h(
        "div",
        { className: "product-list" },
        products.map((product) =>
            h(ProductCard, {
                key: product.id,
                product: product,
                onDelete: onDelete,
            })
        )
    );
}

export default ProductList;
