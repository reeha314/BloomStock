
function ProductCard({ product, onDelete }) {
    const productIcons = {
        Notebooks: "📒",
        Pens: "🖊️",
        Planners: "📔",
        Highlighters: "🖍️",
        Accessories: "🎀",
    };

    return (
        <article className="product-card">

            <div className="product-icon">
                {productIcons[product.category] || "🌸"}
            </div>

            <div className="product-details">

                <span className="product-category">
                    {product.category}
                </span>

                <h3>{product.name}</h3>

                <div className="product-info">

                    <p>
                        Price:{" "}
                        <strong>
                            ${Number(product.price).toFixed(2)}
                        </strong>
                    </p>

                    <p>
                        Stock:{" "}
                        <strong>
                            {product.stock} units
                        </strong>
                    </p>

                </div>
            </div>

            <button
                type="button"
                className="delete-button"
                onClick={() => onDelete(product.id)}
                aria-label={`Delete ${product.name}`}
            >
                Delete
            </button>

        </article>
    );
}

export default ProductCard;
