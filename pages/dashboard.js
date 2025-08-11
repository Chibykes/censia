import Head from "next/head";
import Input from "../components/Input";
import Button from "../components/Button";

import { IoIosPeople } from "react-icons/io";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Image from "next/image";
import Link from "next/link";
import { MdModeEdit } from "react-icons/md";
import { useEffect, useState } from "react";
import mode from "../hooks/mode";
import mean from "../hooks/mean";

export default function Dashboard() {
  const [people, setPeople] = useState([]);
  const [staffs, setStaffs] = useState([]);
  useEffect(() => {
    setPeople(JSON.parse(localStorage.getItem("people")) || []);
    setStaffs(JSON.parse(localStorage.getItem("staffs")) || []);
  }, []);

  const getAge = (dob) =>
    (
      (new Date().getTime() - new Date(dob).getTime()) /
      (1000 * 60 * 60 * 24 * 365)
    ).toFixed();

  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    datasets: [
      {
        label: "Population by sexes",
        data: [
          people.reduce(
            (acc, cv) => (cv.gender === "Male" ? (acc += 1) : acc),
            0
          ),
          people.reduce(
            (acc, cv) => (cv.gender === "Female" ? (acc += 1) : acc),
            0
          ),
        ],
        backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
        hoverOffset: 4,
      },
    ],

    labels: ["Male", "Female"],
  };

  return (
    <div>
      <Head>
        <title>Dashboard - Censia.ng</title>
        <meta name="description" content="Census Mnagement System" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="flex min-h-screen w-full bg-neutral-100">
        <Sidebar />

        <div className="w-full flex-1 space-y-8 overflow-auto lg:w-4/5">
          <Navbar page="Dashboard" />

          <div className="space-y-8 px-4 py-8 lg:px-12">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-3 bg-green-400 p-6 text-white">
                <p className="">Total People Recorded</p>
                <p className="text-4xl font-bold">
                  {people.length.toLocaleString()}
                </p>
              </div>

              <div className="space-y-3 bg-sky-300 p-6 text-white">
                <p className="">Total Staffs in Database</p>
                <p className="text-4xl font-bold">
                  {staffs.length.toLocaleString()}
                </p>
              </div>

              <div className="space-y-3 bg-amber-300 p-6 text-white md:col-span-2 lg:col-span-1">
                <p className="">Total Departments in Database</p>
                <p className="text-4xl font-bold">5</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="bg-white p-4 lg:p-8">
                <Pie data={data} />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
                <div className="space-y-2 bg-white p-4">
                  <p className="font-bold">Most Populous State</p>
                  <p className="text-xl lg:text-3xl">
                    {mode(people.map((p) => p.state)) || "-"}
                  </p>
                </div>
                <div className="space-y-2 bg-white p-4">
                  <p className="font-bold">Youngest Age Recorded</p>
                  <p className="text-xl lg:text-3xl">
                    {people.map((p) => getAge(p.dob)).sort()[0] || "0"} yrs
                  </p>
                </div>
                <div className="space-y-2 bg-white p-4">
                  <p className="font-bold">Oldest Age Recorded</p>
                  <p className="text-xl lg:text-3xl">
                    {people
                      .map((p) => getAge(p.dob))
                      .sort()
                      .reverse()[0] || "0"}{" "}
                    yrs
                  </p>
                </div>
                <div className="space-y-2 bg-white p-4">
                  <p className="font-bold">Average Age</p>
                  <p className="text-xl lg:text-3xl">
                    {mean(people.map((p) => getAge(p.dob)).sort()).toFixed(1) ||
                      "0"}{" "}
                    yrs
                  </p>
                </div>
                <div className="space-y-2 bg-white p-4">
                  <p className="font-bold">Shortest Height Recorded</p>
                  <p className="text-xl lg:text-3xl">
                    {people.map((p) => p.height).sort()[0] || "0"} cm
                  </p>
                </div>
                <div className="space-y-2 bg-white p-4">
                  <p className="font-bold">Tallest Height Recorded</p>
                  <p className="text-xl lg:text-3xl">
                    {people
                      .map((p) => p.height)
                      .sort()
                      .reverse()[0] || "0"}{" "}
                    cm
                  </p>
                </div>
                <div className="space-y-2 bg-white p-4 sm:col-span-2 lg:col-span-1">
                  <p className="font-bold">Average Height</p>
                  <p className="text-xl lg:text-3xl">
                    {mean(people.map((p) => p.height).sort()).toFixed(1) || "0"}{" "}
                    cm
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
              <div className="space-y-8 bg-white p-4 lg:p-8 xl:col-span-7">
                <p className="font-bold">Latest Recorded Persons</p>

                <div className="hidden grid-cols-12 bg-app-main text-white md:grid">
                  <p className="col-span-2 p-3 py-4 text-sm font-bold"></p>
                  <p className="col-span-4 p-3 py-4 text-sm font-bold">Name</p>
                  <p className="col-span-3 p-3 py-4 text-sm font-bold">
                    State of Origin
                  </p>
                  <p className="col-span-3 p-3 py-4 text-sm font-bold">Phone</p>
                </div>

                {people
                  ?.slice(0, 5)
                  ?.map(
                    (
                      { passport, firstname, lastname, state, phone },
                      index
                    ) => (
                      <div
                        key={index}
                        className="grid grid-cols-1 items-center gap-2 bg-white text-black md:grid-cols-12 md:gap-0"
                      >
                        <div className="flex items-center space-x-3 md:col-span-2 md:p-3 md:py-4">
                          <div className="relative h-10 w-10 overflow-hidden rounded-full">
                            <Image
                              className="object-fill"
                              src={passport}
                              fill
                              alt={`${firstname} ${lastname}`}
                            />
                          </div>
                          <span className="md:hidden">
                            {firstname} {lastname}
                          </span>
                        </div>
                        <p className="hidden p-3 py-4 text-sm md:col-span-4 md:block">
                          {firstname} {lastname}
                        </p>
                        <p className="text-sm md:col-span-3 md:p-3 md:py-4">
                          <span className="font-bold md:hidden">State: </span>
                          {state}
                        </p>
                        <p className="text-sm md:col-span-3 md:p-3 md:py-4">
                          <span className="font-bold md:hidden">Phone: </span>
                          {phone}
                        </p>
                      </div>
                    )
                  )}

                <div className="flex justify-center">
                  <Link
                    href="/people/"
                    className="rounded-sm bg-app-main px-3 py-1 font-bold text-white"
                  >
                    See full list
                  </Link>
                </div>
              </div>
              <div className="space-y-8 bg-white p-4 lg:p-8 xl:col-span-5">
                <p className="font-bold">Latest Recorded Staffs</p>

                <div className="hidden grid-cols-12 bg-app-main text-white md:grid">
                  <p className="col-span-2 p-3 py-4 text-sm font-bold"></p>
                  <p className="col-span-6 p-3 py-4 text-sm font-bold">Name</p>
                  <p className="col-span-4 p-3 py-4 text-sm font-bold">
                    Username
                  </p>
                </div>

                {staffs
                  ?.slice(0, 5)
                  ?.map(
                    ({ passport, firstname, lastname, username }, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-1 items-center gap-2 bg-white text-black md:grid-cols-12 md:gap-0"
                      >
                        <div className="flex items-center space-x-3 md:col-span-2 md:p-3 md:py-4">
                          <div className="relative h-10 w-10 overflow-hidden rounded-full">
                            <Image
                              className="object-fill"
                              src={passport}
                              fill
                              alt={`${firstname} ${lastname}`}
                            />
                          </div>
                          <span className="md:hidden">
                            {firstname} {lastname}
                          </span>
                        </div>
                        <p className="hidden p-3 py-4 text-sm md:col-span-6 md:block">
                          {firstname} {lastname}
                        </p>
                        <p className="text-sm md:col-span-4 md:p-3 md:py-4">
                          <span className="font-bold md:hidden">
                            Username:{" "}
                          </span>
                          {username}
                        </p>
                      </div>
                    )
                  )}

                <div className="flex justify-center">
                  <Link
                    href="/staffs/"
                    className="rounded-sm bg-app-main px-3 py-1 font-bold text-white"
                  >
                    See full list
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
