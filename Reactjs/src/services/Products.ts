import axios from "axios";

export type Product = {
  _id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

export const getAllProduct = () => {
  return axios.get("http://localhost:3000/products");
};
export const getProductDetail = (id: string) => {
  return axios.get<{ data: Product }>(`http://localhost:3000/products/${id}`);
};
export const deleteProduct = (id: number) => {
  return axios.delete("http://localhost:3000/products/" + id);
};
export const addProduct = (data: Product) => {
  return axios.post("http://localhost:3000/products", data);
};

export const editProduct = (_id: string, data: Product) => {
  return axios.put("http://localhost:3000/products/" + _id, data);
};
