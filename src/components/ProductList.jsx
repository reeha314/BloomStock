
import ProductCard from "./ProductCard.jsx";

function ProductList({ products, onDelete }) {
    if (products.length === 0) {
        return (
            <div className="no-products">
                <span className="empty-icon">🌷</span>
                <h3>No products found</h3>
                <p>Try another search or add a new product.</p>
            </div>
        );
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default ProductList;
