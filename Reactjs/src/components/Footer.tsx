import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#45595b] text-[#FFFFFF] py-12">
      <div className="px-48">
        <div>
          <h4 className="text-6xl font-bold text-[#81c408]">
            Fruitables <br />{" "}
            <p className="text-xl text-[#ffb524] font-medium mt-1">
              Fresh products
            </p>
          </h4>
        </div>

        <hr className="my-4" />
      </div>
      <div className="px-48 grid grid-cols-4 gap-8 mb-8">
        <div>
          <h4 className="text-3xl font-semibold mb-4">Why People Like us!</h4>
          <p className="text-rgba(255, 255, 255, .5) text-base">
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the like Aldus PageMaker including of Lorem Ipsum.
          </p>
          <Link
            className="inline-flex items-center justify-center gap-2 text-xl font-semibold rounded-full py-2 px-4 border-2 border-[#ffb524] mt-8 text-[#81c408] transition-colors duration-300 hover:bg-[#ffb524] hover:text-white hover:border-[#ffb524] focus:outline-none focus:ring-4 focus:ring-[#ffb524]/50"
            to=""
          >
            Read More
          </Link>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-4">Shop Info</h3>
          <ul>
            <li className="mb-4 hover:text-[#FF9900]">
              <a href="">Home</a>
            </li>
            <li className="mb-4 hover:text-[#FF9900]">
              <a href="">Shop</a>
            </li>
            <li className="mb-4 hover:text-[#FF9900]">
              <a href="">About</a>
            </li>
            <li className="hover:text-[#FF9900]">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-4">Help</h3>
          <ul>
            <li className="mb-4 hover:text-[#FF9900]">
              <a href="">Payment Options</a>
            </li>
            <li className="mb-4 hover:text-[#FF9900]">
              <a href="">Returns</a>
            </li>
            <li className="hover:text-[#FF9900]">
              <a href="">Privacy Policies</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-4">Location</h3>
          <ul>
            <li className="mb-4 hover:text-[#FF9900]">
              <a href="">support@euphoria.in</a>
            </li>
            <li className="mb-4 hover:text-[#FF9900]">
              <a href="">Ahmedabad Main Road</a>
            </li>
            <li className="hover:text-[#FF9900]">
              <a href="">Udaipur, India- 313002</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="max-w-screen-xl m-auto mb-8" />
      <p className="text-center mt-7">
        Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
      </p>
    </footer>
  );
}
