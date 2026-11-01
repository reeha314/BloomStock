
import { createElement as h } from "react";

function Navbar({ products }) {
    const totalProducts = products.length;

    const totalStock = products.reduce(
        (total, product) => total + Number(product.stock),
        0
    );

    return h(
        "nav",
        { className: "navbar" },
        h(
            "div",
            { className: "navbar-content" },
            h(
                "div",
                { className: "brand" },
                h("div", { className: "brand-icon" }, "🌷"),
                h(
                    "div",
                    null,
                    h("h1", null, "BloomStock"),
                    h("p", null, "Your little stationery store")
                )
            ),
            h(
                "div",
                { className: "navbar-stats" },
                h(
                    "div",
                    { className: "stat-box" },
                    h("span", { className: "stat-icon" }, "📚"),
                    h(
                        "div",
                        null,
                        h("h2", null, totalProducts),
                        h("p", null, "Total Products")
                    )
                ),
                h(
                    "div",
                    { className: "stat-box" },
                    h("span", { className: "stat-icon" }, "📦"),
                    h(
                        "div",
                        null,
                        h("h2", null, totalStock),
                        h("p", null, "Total Stock")
                    )
                )
            )
        )
    );
}

export default Navbar;
