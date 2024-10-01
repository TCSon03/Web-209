import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="">
      <div className="container mx-auto py-4 flex justify-between items-center border-b-2">
        {/* Logo */}
        <div className="text-4xl font-bold">XBid</div>
        {/* Nav Links */}
        <nav className="hidden md:flex space-x-8 text-2xl font-semibold ">
          <Link to="/" className="hover:text-orange-500">
            Home
          </Link>
          <Link to="/admin/product/list" className="hover:text-orange-500 ">
            Admin
          </Link>
          <Link to="/register" className="hover:text-orange-500">
            Register
          </Link>
          <Link to="/login" className="hover:text-orange-500">
            Login
          </Link>
        </nav>
        {/* Icons */}
        <div className="flex space-x-6 ">
          <span className="material-symbols-outlined hover:text-orange-500">
            search
          </span>
          <span className="material-symbols-outlined hover:text-orange-500">
            shopping_cart
          </span>
          <span className=" material-symbols-outlined hover:text-orange-500">
            person
          </span>
        </div>
      </div>
    </header>
  );
}
