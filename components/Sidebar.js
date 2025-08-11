import Image from "next/image";
import Link from "next/link";
import { HiUsers } from "react-icons/hi";
import { ImBooks } from "react-icons/im";
import { IoIosPeople } from "react-icons/io";
import { MdDashboard, MdMenu, MdClose } from "react-icons/md";
import {
  RiArrowDropDownLine,
  RiExchangeFill,
  RiFileUserFill,
} from "react-icons/ri";
import { useState } from "react";

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdown = (ddf) => {
    let dd = document.querySelector(`div[data-dropdown="${ddf}"]`);

    if (dd.style.maxHeight === "0px" || !dd.style.maxHeight) {
      return (dd.style.maxHeight = "10000px");
    }

    dd.style.maxHeight = "0px";
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMobileMenu}
        className="fixed top-4 left-4 z-50 rounded-md bg-app-main p-2 text-white lg:hidden"
      >
        {isMobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 z-40 h-full w-64 transform space-y-6 bg-app-main px-4 py-6 shadow-2xl transition-transform print:hidden lg:relative lg:z-auto lg:w-1/5 lg:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="">
          <p className="flex items-center justify-center gap-2 pb-4 text-2xl font-bold">
            <IoIosPeople className="text-3xl text-white" />
            <span className="text-2xl text-white">Censia.ng</span>
          </p>
        </div>

        <div className="space-y-2">
          <Link
            className="flex items-center gap-3 rounded-md p-3 text-sm font-bold text-white hover:bg-white hover:text-app-main"
            href="/dashboard"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <MdDashboard />
            <span className="">Dashboard</span>
          </Link>

          <div className="space-y-1">
            <div
              onClick={() => dropdown("books")}
              data-dropdown-for="books"
              className="flex cursor-pointer items-center gap-3 rounded-md bg-white p-3 text-sm font-bold text-app-main"
              href="#"
            >
              <ImBooks />
              <span className="">Staffs</span>
              <RiArrowDropDownLine className="ml-auto" />
            </div>

            <div
              className="max-h-full space-y-1 overflow-hidden"
              data-dropdown="books"
            >
              <Link
                className="bg-app-light flex items-center gap-3 rounded-md p-3 text-sm text-white hover:bg-white hover:text-app-main"
                href="/staffs/"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MdDashboard className="invisible" />
                <span className="">Overview</span>
              </Link>
              <Link
                className="bg-app-light flex items-center gap-3 rounded-md p-3 text-sm text-white hover:bg-white hover:text-app-main"
                href="/staffs/new"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MdDashboard className="invisible" />
                <span className="">New staff</span>
              </Link>
            </div>
          </div>

          <div className="space-y-1">
            <div
              onClick={() => dropdown("loan")}
              data-dropdown-for="loan"
              className="fake:text-white flex cursor-pointer items-center gap-3 rounded-md bg-white p-3 text-sm font-bold text-app-main"
              href="#"
            >
              <RiExchangeFill />
              <span className="">People</span>
              <RiArrowDropDownLine className="ml-auto" />
            </div>

            <div
              className="max-h-full space-y-1 overflow-hidden"
              data-dropdown="loan"
            >
              <Link
                className="bg-app-light flex items-center gap-3 rounded-md p-3 text-sm text-white hover:bg-white hover:text-app-main"
                href="/people"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MdDashboard className="invisible" />
                <span className="">Overview</span>
              </Link>
              <Link
                className="bg-app-light flex items-center gap-3 rounded-md p-3 text-sm text-white hover:bg-white hover:text-app-main"
                href="/people/new"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MdDashboard className="invisible" />
                <span className="">Add person</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
