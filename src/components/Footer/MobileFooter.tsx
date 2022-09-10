import { useState } from "react";
import {
  FaAngleDown,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BiPackage } from "react-icons/bi";
import { Link } from "react-router-dom";

function MobileFooter() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <section className="main bg-slate-50 rounded-xl mt-4 p-4 flex flex-col gap-4 bg-transparent w-full">
      <div className="wrapper sm:w-[80%] md:w-[40%] mx-auto">
        <div className="branding w-fit mx-auto ">
          <Link to="/" className="text-xl flex gap-2 items-center  ">
            <span className="font-secondary text-2xl">
              <BiPackage />
            </span>
            <p>fakeStore</p>
          </Link>
        </div>

        <div
          onClick={() => setShow(!show)}
          className="quick-links flex justify-between"
        >
          <h2 className="font-bold">Quick Links</h2>
          <FaAngleDown />
        </div>

        <div
          className={`categories-linksp-4 flex flex-col gap-2 ${
            show ? "" : "hidden"
          } transition-all duration-300 `}
        >
          <Link to="/">Men's Clothing</Link>
          <Link to="/">Women's Clothing</Link>
          <Link to="/">Electronics</Link>
          <Link to="/">Jewelery</Link>
        </div>

        <div className={`social-media mt-4 flex flex-col gap-4`}>
          <h2 className="">arpan.dhama@gmail.com</h2>
          <div className="flex gap-4">
            <a href="mailto: arpandhama2002@gmail.com" className="scale-[130%]">
              <FiMail />
            </a>
            <a href="https://twitter.com/arpan_dhama" className="scale-[130%]">
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/arpan-dhama-58575419b/"
              className="scale-[130%]"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/arpandhama_/"
              className="scale-[130%]"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="author">
          <h2 className="text-center text-neutral-500">
            Arpan Dhama <span>© 2022</span>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default MobileFooter;
