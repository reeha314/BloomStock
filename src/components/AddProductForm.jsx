
import { useState } from "react";

function AddProductForm({ onAddProduct }) {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Notebooks");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (!name.trim() || price === "" || stock === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (
            !Number.isFinite(Number(price)) ||
            !Number.isFinite(Number(stock)) ||
            Number(price) < 0 ||
            Number(stock) < 0
        ) {
            alert("Please enter valid price and stock values.");
            return;
        }

        const newProduct = {
            id: Date.now(),
            name: name.trim(),
            category: category,
            price: Number(price),
            stock: Number(stock),
        };

        onAddProduct(newProduct);

        setName("");
        setCategory("Notebooks");
        setPrice("");
        setStock("");
    }

    const categories = [
        "Notebooks",
        "Pens",
        "Planners",
        "Highlighters",
        "Accessories",
    ];

    return (
        <form className="add-product-form" onSubmit={handleSubmit}>

            <div className="form-heading">
                <div>
                    <span className="form-label">
                        GROW YOUR COLLECTION 🌷
                    </span>

                    <h2>Add a New Product</h2>

                    <p>
                        Add a lovely stationery item to your inventory.
                    </p>
                </div>

                <span className="form-decoration">🎀</span>
            </div>

            <div className="form-fields">

                <input
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />

                <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    aria-label="Product category"
                >
                    {categories.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>

                <input
                    type="number"
                    placeholder="Price ($)"
                    min="0"
                    step="0.01"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    required
                />

                <input
                    type="number"
                    placeholder="Stock Quantity"
                    min="0"
                    step="1"
                    value={stock}
                    onChange={(event) => setStock(event.target.value)}
                    required
                />

                <button type="submit">
                    + Add Product
                </button>

            </div>
        </form>
    );
}

export default AddProductForm;
