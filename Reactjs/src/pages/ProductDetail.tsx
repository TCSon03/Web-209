import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail, Product } from "../services/Products";
import toast from "react-hot-toast";

export default function ProductDetail() {
  const { id } = useParams();
  const [ProductDetail, setProductDetail] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;
    getProductDetail(id)
      .then(({ data }) => setProductDetail(data.data))
      .catch((error) => toast.error("Error: " + error.message));
  }, [id]);

  return (
    <>
      <div className="bg-white mb-32">
        <div className="container">
          {ProductDetail && (
            <div className="grid grid-cols-3 gap-4">
              <div className="border-1 col-span-2 rounded-xl p-4 h-[32rem]">
                <img
                  className="w-full h-full rounded-xl object-cover "
                  src={ProductDetail.image}
                  alt=""
                />
              </div>
              <div className="max-w-sm p-6 bg-white rounded-lg shadow-md">
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {ProductDetail.title}
                </h2>
                {/* Category */}
                <p className="text-sm text-gray-500 mb-4">
                  Category: Vegetables
                </p>
                {/* Price */}
                <div className="text-3xl font-bold text-green-600 mb-4">
                  {ProductDetail.price} $
                </div>
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500 text-lg">★★★★</span>
                  <span className="text-gray-400 text-lg">★</span>
                </div>
                {/* Description */}

                <p className="text-sm text-gray-600 mb-4">
                  {ProductDetail.description}
                </p>
                {/* Quantity Selector */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-4">
                    {/* Button Giảm */}
                    <button
                      id="decrease"
                      className="bg-gray-200 text-gray-600 p-2 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {/* Input hiển thị số lượng */}
                    <input
                      id="quantity"
                      type="text"
                      className="w-12 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                      defaultValue={1}
                    />
                    {/* Button Tăng */}
                    <button
                      id="increase"
                      className="bg-gray-200 text-gray-600 p-2 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Add to Cart Button */}
                <button className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V9a4 4 0 10-8 0v2m4 6v-6m4 6v-6m-8 6v-6"
                    />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
