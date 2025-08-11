import Link from "next/link";
import { BsFillBellFill } from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi";

export default function Navbar({ page }) {
  return (
    <div className="flex items-center justify-end gap-4 border-none border-neutral-200 bg-white p-4 print:hidden lg:gap-6 lg:p-6">
      <p className="mr-auto pl-12 text-lg font-bold lg:pl-0 lg:text-2xl">
        {page}
      </p>

      <Link
        className="text-app-primary flex flex-col items-center gap-1"
        href="#"
      >
        <BsFillBellFill className="text-lg lg:text-xl" />
      </Link>
      <Link
        className="text-app-primary flex flex-col items-center gap-1"
        href="#"
      >
        <HiUserCircle className="text-lg lg:text-xl" />
      </Link>
    </div>
  );
}
