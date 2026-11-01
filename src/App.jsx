
import { useState } from "react";
import Navbar from "./components/Navbar.js";
import ProductList from "./components/ProductList.js";
import AddProductForm from "./components/AddProductForm.js";
import SearchBar from "./components/SearchBar.js";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Pastel Notebook",
      category: "Notebooks",
      price: 12,
      stock: 25,
    },
    {
      id: 2,
      name: "Cute Gel Pens",
      category: "Pens",
      price: 8,
      stock: 40,
    },
    {
      id: 3,
      name: "Daily Planner",
      category: "Planners",
      price: 18,
      stock: 15,
    },
    {
      id: 4,
      name: "Pastel Highlighters",
      category: "Highlighters",
      price: 10,
      stock: 30,
    },
    {
      id: 5,
      name: "Cute Pencil Case",
      category: "Accessories",
      price: 15,
      stock: 20,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  function addProduct(newProduct) {
    setProducts((previousProducts) => [
      ...previousProducts,
      newProduct,
    ]);
  }

  function deleteProduct(productId) {
    setProducts((previousProducts) =>
      previousProducts.filter((product) => product.id !== productId)
    );
  }

  const filteredProducts = products.filter((product) => {
    const search = searchTerm.trim().toLowerCase();

    return (
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
    );
  });

  return (
    <div className="app">
      <Navbar products={products} />

      <main className="dashboard">
        <AddProductForm onAddProduct={addProduct} />

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <div className="list-heading">
          <h2>Product Inventory</h2>
          <span>{filteredProducts.length} products found</span>
        </div>

        <ProductList
          products={filteredProducts}
          onDelete={deleteProduct}
        />

        <footer className="footer">
          BloomStock 🌷 — Your little stationery store
        </footer>
      </main>
    </div>
  );
}

export default App;
