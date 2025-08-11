import Head from "next/head";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { IoIosPeople } from "react-icons/io";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdModeEdit } from "react-icons/md";

export default function Dashboard() {
  const [staffs, setStaffs] = useState([]);
  useEffect(() => {
    setStaffs(JSON.parse(localStorage.getItem("staffs")) || []);
  }, []);

  return (
    <div>
      <Head>
        <title>Staffs - Censia.ng</title>
        <meta name="description" content="Census Mnagement System" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="flex min-h-screen w-full bg-neutral-100">
        <Sidebar />

        <div className="w-full flex-1 lg:w-4/5">
          <Navbar page="Staffs" />

          <div className="space-y-3 px-4 py-8 lg:px-12">
            <div className="flex items-center bg-app-main px-3 py-4 text-white">
              <p className="text-sm font-bold">All Staff Records</p>
            </div>

            {/* Desktop table header */}
            <div className="hidden grid-cols-12 bg-white text-app-main lg:grid">
              <p className="col-span-1 p-3 py-4 text-sm font-bold">S/N</p>
              <p className="col-span-1 p-3 py-4 text-sm font-bold">Passport</p>
              <p className="col-span-3 p-3 py-4 text-sm font-bold">Name</p>
              <p className="col-span-2 p-3 py-4 text-sm font-bold">
                Department
              </p>
              <p className="col-span-2 p-3 py-4 text-sm font-bold">Email</p>
              <p className="col-span-2 p-3 py-4 text-sm font-bold">Username</p>
              <p className="col-span-1 p-3 py-4 text-sm font-bold">Actions</p>
            </div>

            {staffs?.map(
              (
                { passport, firstname, lastname, department, email, username },
                index
              ) => (
                <div
                  key={index}
                  className="grid grid-cols-1 gap-4 bg-white p-4 text-black lg:grid-cols-12 lg:items-center lg:gap-0 lg:p-0"
                >
                  {/* Mobile layout */}
                  <div className="flex items-center space-x-4 lg:hidden">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        className="object-fill"
                        src={passport}
                        fill
                        alt={`${firstname} ${lastname}`}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold">
                        {firstname} {lastname}
                      </p>
                      <p className="text-sm text-gray-600">{department}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">{username}</p>
                      <p className="text-xs text-gray-600">{email}</p>
                    </div>
                    <Link href="#" className="flex-shrink-0">
                      <MdModeEdit className="text-xl text-sky-600" />
                    </Link>
                  </div>

                  {/* Desktop layout */}
                  <p className="col-span-1 hidden p-3 py-4 text-sm lg:block">
                    {index + 1}
                  </p>
                  <p className="col-span-1 hidden p-3 py-4 text-sm lg:block">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        className="object-fill"
                        src={passport}
                        fill
                        alt={`${firstname} ${lastname}`}
                      />
                    </div>
                  </p>
                  <p className="col-span-3 hidden p-3 py-4 text-sm lg:block">
                    {firstname} {lastname}
                  </p>
                  <p className="col-span-2 hidden p-3 py-4 text-sm lg:block">
                    {department}
                  </p>
                  <p className="col-span-2 hidden p-3 py-4 text-sm lg:block">
                    {email}
                  </p>
                  <p className="col-span-2 hidden p-3 py-4 text-sm lg:block">
                    {username}
                  </p>
                  <p className="col-span-1 hidden p-3 py-4 text-sm lg:flex lg:justify-center">
                    <Link href="#">
                      <MdModeEdit className="text-xl text-sky-600" />
                    </Link>
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
