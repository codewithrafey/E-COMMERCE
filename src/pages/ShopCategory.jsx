import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import { BsSortUpAlt, BsGrid } from "react-icons/bs";
import { LuGrid3X3 } from "react-icons/lu";
import Item from "../components/item/Item";

function ShopCategory(props) {
  const { products } = useContext(Context);
  const [sortBy, setSortBy] = useState("");
  const [visibleCount, setVisibleCount] = useState(10); 
  const [gridCols, setGridCols] = useState(4); //  default 4 columns

  // Filter products by category
  const categoryProducts =
    props.category === "all"
      ? products
      : products.filter((product) => product.category === props.category);

  // Sort products
  const sortedProducts = [...categoryProducts].sort((a, b) => {
    switch (sortBy) {
      case "low-high":
        return a.price - b.price;
      case "high-low":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.id.localeCompare(a.id);
      default:
        return 0;
    }
  });

  // Load more handler
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="py-4 px-4 sm:px-12 lg:px-24 xl:px-40">
      {/* Header Section */}
      <div className="flex justify-between items-center flex-wrap gap-4 py-4">
        {/* Left */}
        <div>
          <h2 className="uppercase text-2xl font-bold mb-1">
            {props.category === "all" ? "All Products" : props.category}
          </h2>
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-medium">{categoryProducts.length}</span>{" "}
            products
          </p>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-3">
          {/* Grid Buttons */}
          <button
            onClick={() => setGridCols(3)} // 3 columns
            className={`text-xs border rounded-md p-2 cursor-pointer ${
              gridCols === 3 ? "bg-black text-white" : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            <LuGrid3X3 />
          </button>

          <button
            onClick={() => setGridCols(4)} // 4 columns
            className={`text-xs border rounded-md p-2 cursor-pointer ${
              gridCols === 4 ? "bg-black text-white" : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            <BsGrid />
          </button>

          {/* Sort */}
          <div className="flex items-center gap-2 rounded-md px-2 py-1 bg-gray-200 cursor-pointer">
            <BsSortUpAlt className="text-gray-600" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs text-gray-900 border-none outline-none"
            >
              <option value="featured">Featured</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="newest">Newest</option>
              <option value="rating">Customer Rating</option>
            </select>
          </div>
        </div>
      </div>

      <div className="px-2 py-1 text-xs bg-gray-100 rounded capitalize w-fit font-medium mt-1">
        {props.category}
      </div>

      {/* Product Grid */}
      <div
        className={`grid gap-6 py-6 ${
          gridCols === 3
            ? "grid-cols-2 lg:grid-cols-3" //  3 columns wala layout
            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" //  default 4 columns
        }`}
      >
        {sortedProducts.slice(0, visibleCount).map((product, index) => (
          <Item key={index} product={product} />
        ))}
      </div>

      {/* Load More Button */}
      {props.category === "all" && visibleCount < sortedProducts.length && (
        <div
          onClick={handleLoadMore}
          className="bg-white mt-4 mb-6 hover:bg-gray-50 font-medium w-fit text-sm border border-gray-200 rounded mx-auto px-6 py-2 cursor-pointer transition"
        >
          Load More Products
        </div>
      )}
    </div>
  );
}

export default ShopCategory;
