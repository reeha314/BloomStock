
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
  const [activePage, setActivePage] = useState("Dashboard");

  function addProduct(newProduct) {
    setProducts((previousProducts) => [
      ...previousProducts,
      newProduct,
    ]);
  }

  function deleteProduct(productId) {
    setProducts((previousProducts) =>
      previousProducts.filter(
        (product) => product.id !== productId
      )
    );
  }

  const filteredProducts = products.filter((product) => {
    const search = searchTerm.trim().toLowerCase();

    return (
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
    );
  });

  const totalStock = products.reduce(
    (total, product) => total + Number(product.stock),
    0
  );

  const totalValue = products.reduce(
    (total, product) =>
      total + Number(product.price) * Number(product.stock),
    0
  );

  const totalCategories = new Set(
    products.map((product) => product.category)
  ).size;

  const lowStock = products.filter(
    (product) => Number(product.stock) < 10
  ).length;

  const menuItems = [
    { name: "Dashboard", icon: "▦" },
    { name: "Products", icon: "□" },
    { name: "Categories", icon: "◈" },
    { name: "Stock Alerts", icon: "♧" },
  ];

  return (
    <div className="app">

      <aside className="sidebar">

        <div className="sidebar-brand">
          <div className="brand-logo">B</div>
          <div>
            <h2>BloomStack</h2>
            <span>INVENTORY SYSTEM</span>
          </div>
        </div>

        <div className="sidebar-menu">
          <p className="menu-heading">MAIN MENU</p>

          {menuItems.map((item) => (
            <button
              key={item.name}
              className={
                activePage === item.name
                  ? "menu-item active"
                  : "menu-item"
              }
              onClick={() => setActivePage(item.name)}
            >
              <span className="menu-icon">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </div>

        <div className="sidebar-bottom">
          <div className="sidebar-help">
            <span>🌷</span>
            <h4>Keep Growing!</h4>
            <p>Your inventory, beautifully organized.</p>
          </div>

          <div className="sidebar-footer">
            <span>© 2026 BloomStack</span>
          </div>
        </div>

      </aside>

      <main className="main-content">

        <header className="topbar">
          <div>
            <p className="breadcrumb">Workspace / {activePage}</p>
            <h1>{activePage}</h1>
          </div>

          <div className="topbar-right">
            <div className="topbar-date">
              <span>✦</span> Inventory Management
            </div>

            <div className="profile">
              <div className="profile-avatar">B</div>
              <div>
                <strong>Admin</strong>
                <span>Store Manager</span>
              </div>
            </div>
          </div>
        </header>

        <div className="page-content">

          {activePage === "Dashboard" && (
            <>
              <section className="welcome-section">
                <div>
                  <span className="welcome-label">
                    INVENTORY OVERVIEW
                  </span>
                  <h2>Welcome to BloomStack! 🌸</h2>
                  <p>
                    Here's what's happening with your inventory today.
                  </p>
                </div>
                <div className="welcome-flower">🌷</div>
              </section>

              <section className="stats-grid">

                <div className="stat-card">
                  <div className="stat-top">
                    <span>Total Products</span>
                    <div className="stat-icon purple">□</div>
                  </div>
                  <h2>{products.length}</h2>
                  <p>Products in inventory</p>
                </div>

                <div className="stat-card">
                  <div className="stat-top">
                    <span>Total Categories</span>
                    <div className="stat-icon pink">◈</div>
                  </div>
                  <h2>{totalCategories}</h2>
                  <p>Different categories</p>
                </div>

                <div className="stat-card">
                  <div className="stat-top">
                    <span>Total Stock</span>
                    <div className="stat-icon green">▤</div>
                  </div>
                  <h2>{totalStock}</h2>
                  <p>Units available</p>
                </div>

                <div className="stat-card">
                  <div className="stat-top">
                    <span>Inventory Value</span>
                    <div className="stat-icon orange">$</div>
                  </div>
                  <h2>${totalValue.toFixed(2)}</h2>
                  <p>Estimated stock value</p>
                </div>

              </section>

              <section className="overview-grid">

                <div className="overview-card">
                  <div className="section-heading">
                    <div>
                      <h3>Stock Overview</h3>
                      <p>Current inventory summary</p>
                    </div>
                    <span className="heading-icon">📦</span>
                  </div>

                  <div className="stock-overview-content">
                    <div className="stock-number">
                      <h2>{totalStock}</h2>
                      <span>Total Units</span>
                    </div>

                    <div className="stock-details">
                      <div>
                        <span className="dot available"></span>
                        Available Products
                        <strong>{products.length - lowStock}</strong>
                      </div>
                      <div>
                        <span className="dot low"></span>
                        Low Stock Products
                        <strong>{lowStock}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="overview-card alert-card">
                  <div className="section-heading">
                    <div>
                      <h3>Stock Alerts</h3>
                      <p>Products requiring attention</p>
                    </div>
                    <span className="heading-icon">⚠️</span>
                  </div>

                  <h2 className="alert-number">{lowStock}</h2>
                  <p className="alert-description">
                    Products with fewer than 10 units remaining.
                  </p>

                  <span className="alert-status">
                    {lowStock === 0 ? "All stock levels look good" : "Restocking recommended"}
                  </span>
                </div>

              </section>

              <section className="inventory-section">

                <div className="section-heading inventory-heading">
                  <div>
                    <h3>Recent Inventory</h3>
                    <p>Manage and monitor your products</p>
                  </div>
                  <span className="table-count">
                    {filteredProducts.length} Products
                  </span>
                </div>

                <SearchBar
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />

                <ProductList
                  products={filteredProducts}
                  onDelete={deleteProduct}
                />

              </section>

              <section className="add-section">
                <div className="section-heading">
                  <div>
                    <h3>Add New Product</h3>
                    <p>Add a product to your inventory</p>
                  </div>
                  <span className="heading-icon">＋</span>
                </div>

                <AddProductForm onAddProduct={addProduct} />
              </section>
            </>
          )}

          {activePage === "Products" && (
            <section className="inventory-section">
              <div className="section-heading">
                <div>
                  <h3>All Products</h3>
                  <p>Manage your complete product inventory</p>
                </div>
                <span className="table-count">
                  {products.length} Products
                </span>
              </div>

              <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />

              <ProductList
                products={filteredProducts}
                onDelete={deleteProduct}
              />

              <div className="add-section">
                <h3>Add New Product</h3>
                <AddProductForm onAddProduct={addProduct} />
              </div>
            </section>
          )}

          {activePage === "Categories" && (
            <section className="inventory-section">
              <div className="section-heading">
                <div>
                  <h3>Product Categories</h3>
                  <p>Explore your inventory categories</p>
                </div>
              </div>

              <div className="category-grid">
                {[...new Set(products.map((p) => p.category))].map(
                  (category) => (
                    <div className="category-card" key={category}>
                      <div className="stat-icon purple">◈</div>
                      <h3>{category}</h3>
                      <p>
                        {products.filter(
                          (p) => p.category === category
                        ).length} Products
                      </p>
                    </div>
                  )
                )}
              </div>
            </section>
          )}

          {activePage === "Stock Alerts" && (
            <section className="inventory-section">
              <div className="section-heading">
                <div>
                  <h3>Low Stock Monitoring</h3>
                  <p>Products with fewer than 10 units remaining</p>
                </div>
              </div>

              <ProductList
                products={products.filter(
                  (product) => Number(product.stock) < 10
                )}
                onDelete={deleteProduct}
              />

              {lowStock === 0 && (
                <div className="no-products">
                  ✓ All products have sufficient stock!
                </div>
              )}
            </section>
          )}

          <footer className="footer">
            <strong>BloomStack 🌸</strong>
            <p>Smart Inventory Management System</p>
          </footer>

        </div>
      </main>
    </div>
  );
}

export default App;
