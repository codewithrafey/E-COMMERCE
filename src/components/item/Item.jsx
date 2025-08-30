import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";

function Item({ product }) {

  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  // discount calculate
  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100
        )
      : 0;

  return (
    <>
      <div className="group border border-gray-50 rounded-lg flex flex-col gap-2 shadow hover:shadow-lg overflow-hidden cursor-pointer relative">
        {/* Image Box */}
        <div className="h-[200px] overflow-hidden relative ">
          <div className="flex h-full justify-center items-center">
            <img
            loading="lazy"
              src={product.image}
              alt={product.name}
              className="w-[180px] object-cover rounded transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Discount Badge */}
          {discount > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded">
              {discount}% OFF
            </div>
          )}

          {/* Add to cart button */}
          <div className="absolute w-full bottom-2 right-0 left-0 px-5 opacity-0 focus:opacity-100 active:opacity-100 group-hover:opacity-100 transition-all duration-300">
              <Link to={`/product/${product.id}`}>
            <div className="flex px-7 py-2 rounded justify-center items-center gap-3 bg-gray-950 hover:bg-gray-950/90 text-white text-xs max-sm:hidden">
                <FiShoppingCart />
                <p>Add to cart</p>
            </div>
              </Link>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 pb-6 px-3">
          <h3 className="font-medium text-sm">{product.name}</h3>

          {/* Rating */}
          <div className="flex items-center">
            {[...Array(fullStars)].map((_, i) => (
              <FaStar key={`full-${i}`} className="w-4 h-4 text-yellow-400" />
            ))}
            {hasHalfStar && (
              <FaStarHalfAlt className="w-4 h-4 text-yellow-400" />
            )}
            {[...Array(emptyStars)].map((_, i) => (
              <FaStar key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
            ))}
            <span className="text-sm text-gray-500 ml-1">
              ({product.reviews})
            </span>
          </div>

          {/* Price Section */}
          <div className="flex flex-1 items-center justify-between">
            <div className="flex flex-1 gap-2 items-center">
              <p className="text-black font-bold text-lg">
                <span className="font-bold">Rs</span> {product.price.toLocaleString()}
              </p>
              {product.originalPrice &&
                product.originalPrice !== product.price && (
                  <p className="text-gray-500 text-xs line-through">
                    {product.originalPrice.toLocaleString()}
                  </p>
                )}
            </div>
            <Link to={`/product/${product.id}`}>
              <div className="sm:hidden w-fit flex-1 bg-gray-100 hover:bg-[#3a88a1] text-[#3a88a1] hover:text-white cursor-pointer transition-all duration-200 p-3 rounded-full text-center">
                <FiShoppingCart className="" />
              </div>
            </Link>
          </div>

          {/* Stock Status */}
          <div>
            {product.inStock ? (
              <p className="text-green-600 text-xs">In Stock</p>
            ) : (
              <p className="text-red-600 text-xs">Out of Stock</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
