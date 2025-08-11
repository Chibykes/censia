import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

import { IoIosPeople } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const router = useRouter();
  const [form, setForm] = useState({});
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.username === "superadmin") {
      if (form.password === "censia2022") {
        toast("✅ Login Successful");
        return router.push("/dashboard");
      }

      return toast("❌ Password Incorrect");
    }

    let staff = JSON.parse(localStorage.getItem("staffs") || "[]")?.find(
      (s) => s.username === form.username
    );
    if (staff) {
      if (form.password === staff.password) {
        toast("✅ Login Successful");
        return router.push("/dashboard");
      }

      return toast("❌ Password Incorrect");
    }
  };

  useEffect(() => {
    setTimeout(() => setError(""), 3000);
  }, [error]);
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-app-main">
      <Head>
        <title>Censia.ng</title>
        <meta name="description" content="Census Management System" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1cb558" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Censia.ng" />
        <link rel="icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <main className="flex h-full w-full flex-col items-center justify-center gap-8 py-8 md:flex-row md:gap-0">
        <div className="flex h-auto w-full items-center justify-center px-4 md:h-full md:w-2/3 md:px-0">
          <p className="flex items-center justify-center gap-2 pb-4 text-2xl font-bold">
            <IoIosPeople className="text-4xl text-white" />
            <span className="text-3xl text-white">Censia.ng</span>
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex h-auto w-full flex-col items-center justify-center space-y-4 rounded-lg bg-white p-6 shadow-lg md:h-full md:w-1/3 md:p-20"
        >
          <p className="flex items-center justify-center gap-2 pb-4 text-2xl font-bold">
            Sign In
          </p>

          <Input
            name="username"
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
            label="Username"
            placeholder="Enter username"
          />

          <Input
            name="password"
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
            label="Password"
            type="password"
            placeholder="Enter password"
          />

          <Button />
        </form>
      </main>
    </div>
  );
}
