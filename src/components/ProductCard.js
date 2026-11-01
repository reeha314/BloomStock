
import { createElement as h } from "react";

function ProductCard({ product, onDelete }) {
    const productIcons = {
        Notebooks: "📒",
        Pens: "🖊️",
        Planners: "📔",
        Highlighters: "🖍️",
        Accessories: "🎀",
    };

    return h(
        "article",
        { className: "product-card" },
        h(
            "div",
            { className: "product-icon" },
            productIcons[product.category] || "🌸"
        ),
        h(
            "div",
            { className: "product-details" },
            h("span", { className: "product-category" }, product.category),
            h("h3", null, product.name),
            h(
                "div",
                { className: "product-info" },
                h(
                    "p",
                    null,
                    "Price: ",
                    h("strong", null, `$${Number(product.price).toFixed(2)}`)
                ),
                h(
                    "p",
                    null,
                    "Stock: ",
                    h("strong", null, `${product.stock} units`)
                )
            )
        ),
        h(
            "button",
            {
                type: "button",
                className: "delete-button",
                onClick: () => onDelete(product.id),
                "aria-label": `Delete ${product.name}`,
            },
            "Delete"
        )
    );
}

export default ProductCard;
