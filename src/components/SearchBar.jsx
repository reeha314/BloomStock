
import { createElement as h } from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
    return h(
        "section",
        { className: "search-section" },
        h(
            "div",
            { className: "search-description" },
            h("h2", null, "Our Stationery Collection 🌸"),
            h("p", null, "Find your favorite stationery items.")
        ),
        h(
            "div",
            { className: "search-bar" },
            h("span", { "aria-hidden": "true" }, "🔍"),
            h("input", {
                type: "text",
                placeholder: "Search by product name or category...",
                value: searchTerm,
                onChange: (event) => setSearchTerm(event.target.value),
                "aria-label": "Search products by name or category",
            }),
            searchTerm
                ? h(
                    "button",
                    {
                        type: "button",
                        className: "clear-search",
                        onClick: () => setSearchTerm(""),
                        "aria-label": "Clear search",
                    },
                    "×"
                )
                : null
        )
    );
}

export default SearchBar;
