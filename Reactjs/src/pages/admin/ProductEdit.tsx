import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Inputs } from "./ProductAdd";
import { editProduct, getProductDetail } from "../../services/Products";
import toast from "react-hot-toast";

const ProductEdit = () => {
  const { id } = useParams();
  const nav = useNavigate();
  // console.log(id);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  useEffect(() => {
    if (!id) return;
    getProductDetail(id)
      .then(({ data }) => {
        reset(data.data);
        // console.log(data.data);
      })
      .catch(() => toast.error("error"));
  }, []);
  const handleEdit: SubmitHandler<Inputs> = (values) => {
    if (!id) return;
    editProduct(id, values)
      .then((data) => {
        // console.log(data);

        toast.success("Edit Success");
        nav("/admin/product/list");
      })
      .catch(() => toast.error("Error"));
  };
  return (
    <div>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6 text-center mt-4">
          Product Add
        </h1>
        <form onSubmit={handleSubmit(handleEdit)} className="space-y-4">
          <div className="mb-3">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("title", {
                required: "title khon bo trong",
                minLength: {
                  value: 5,
                  message: "Ten san pham phai nhieu hon 5 ki tu",
                },
              })}
            />
            {errors?.title && (
              <small className="text-red-600">{errors.title.message}</small>
            )}
          </div>

          <div className="mb-3">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("price", {
                required: "khong bo trong",
                min: {
                  value: 0,
                  message: "Gia khong duoc nho hon khong",
                },
              })}
            />
            {errors?.price && (
              <small className="text-red-600">{errors.price.message}</small>
            )}
          </div>

          <div className="mb-3">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
            <input
              type="text"
              id="image"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("image", {
                required: "Anh khong duoc de trong",
              })}
            />
            {errors?.image && (
              <small className="text-red-600">{errors.image.message}</small>
            )}
          </div>

          <div className="mb-3">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("description", {
                required: "description is required",
              })}
            />
            {errors?.description && (
              <small className="text-red-600">
                {errors.description.message}
              </small>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductEdit;
