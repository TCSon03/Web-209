import React, { useEffect, useState } from "react";
import { deleteProduct, getAllProduct, Product } from "../../services/Products";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getAllProduct()
      .then(({ data }) => {
        toast.success("Oh Yeah");
        setProducts(data.data);
      })
      .catch((error) => toast.error("Error: " + error.message));
    //   .finally(() => setLoading(false));
  }, []);
  const handleDeleteProduct = (id: number) => {
    if (window.confirm("Xoa that ko?")) {
      deleteProduct(id)
        .then(() => {
          toast.success(`Delete Product Id: ${id} Successfull`);
          // navigate(0);
          location.reload();
        })
        .catch((error) => toast.error("Error: " + error.message));
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin</h1>
      <Link
        to="/admin/product/add"
        className="bg-blue-500 text-white px-8 py-2 rounded hover:bg-blue-600 my-5"
      >
        Add
      </Link>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-600 text-sm uppercase">
              <th className="py-3 px-6 text-left">#</th>
              <th className="py-3 px-6 text-left">First</th>
              <th className="py-3 px-6 text-left">Last</th>
              <th className="py-3 px-6 text-left">Image</th>
              <th className="py-3 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="py-3 px-6">{product._id}</td>
                <td className="py-3 px-6">{product.title}</td>
                <td className="py-3 px-6">{product.price}</td>
                <td className="py-3 px-6">
                  <img
                    src={product.image}
                    alt=""
                    className="w-20 h-auto object-cover"
                  />
                </td>
                <td className="py-3 px-6">
                  <Link
                    to={`/admin/product/edit/${product._id}`}
                    className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDeleteProduct(product._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
