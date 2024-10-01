import { useEffect, useState } from "react";
import { getAllProduct, Product } from "../services/Products";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllProduct()
      .then(({ data }) => {
        toast.success("Oh Yeah");
        setProducts(data.data);
      })
      .catch((error) => toast.error("Error: " + error.message))
      .finally(() => setLoading(false));
  }, []);
  console.log(products);

  return (
    <>
      <div className="bg-white text-gray-800 py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">
          Chào mừng đến với cửa hàng của chúng tôi!
        </h1>
        <p className="text-lg mb-6 text-gray-600">
          Khám phá bộ sưu tập mới nhất với ưu đãi đặc biệt
        </p>
        <a
          href="/shop"
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Mua ngay
        </a>
      </div>

      <div className="container my-24 grid grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="border-2  hover:shadow-2xl transform hover:scale-105 transition duration-500"
          >
            <div className="transition duration-700 ease-in-out border-b-2 h-60">
              <img
                className="transition duration-700 ease-in-out mx-auto w-full h-full object-cover"
                src={product.image}
                alt=""
              />
            </div>

            {/* <div className="transition duration-700 ease-in-out border-b-2 h-60">
              <img
                className="transition duration-700 ease-in-out mx-auto"
                src={product.image}
                alt=""
              />
            </div> */}
            <div className="p-3 text-center">
              <h4 className="text-lg font-bold text-gray-500 hover:text-[#D19C97]">
                {product.title}
              </h4>
              <p className="font-medium text-gray-400 mt-2">
                $ {product.price}
              </p>
            </div>
            <div className="flex border-t-2 justify-between py-3 px-4 items-center">
              <div className="flex items-center">
                <span className="material-symbols-outlined text-[#D19C97] mr-2">
                  visibility
                </span>
                <p className="font-medium text-[#a18c8a] hover:text-[#D19C97]">
                  View Detail
                </p>
              </div>
              <div className="flex items-center">
                <Link
                  to={`/product/${product._id}`}
                  className="flex items-center hover:text-[#D19C97]"
                >
                  <span className="material-symbols-outlined text-[#D19C97] mr-2">
                    local_mall
                  </span>

                  <p className="font-medium text-[#a18c8a] hover:text-[#D19C97]">
                    Add To Cart
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
