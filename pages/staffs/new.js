import Head from "next/head";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { IoIosPeople } from "react-icons/io";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function New() {
  const [form, setForm] = useState({});

  const uploadPassport = () =>
    document.querySelector('[name="passport"]').click();

  const showImage = (e) => {
    var reader = new FileReader();
    reader.onload = (e) => setForm({ ...form, passport: reader.result });
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      localStorage.setItem(
        "staffs",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("staffs") || `[]`),
          form,
        ])
      );
    } catch (e) {
      return toast("❌ Passport size too large max (512kb)");
    }
    e.target.reset();
    setForm({});

    toast("✅ Staff Added Successfully");
  };

  return (
    <div>
      <Head>
        <title>New Staff - Censia.ng</title>
        <meta name="description" content="Census Mnagement System" />
        <link rel="icon" href="/favicon.png" />
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

      <main className="flex min-h-screen w-full bg-neutral-100">
        <Sidebar />

        <div className="w-full flex-1 overflow-auto lg:w-4/5">
          <Navbar page="Staffs" />

          <div className="space-y-3 p-4 lg:p-12">
            <form
              onSubmit={handleSubmit}
              className="space-y-8 bg-white p-6 lg:space-y-12 lg:p-20"
            >
              <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-0">
                <p className="flex items-center justify-start gap-2 pb-4 text-xl font-bold lg:text-2xl">
                  <IoIosPeople className="text-2xl text-black lg:text-4xl" />
                  <span className="text-xl text-black lg:text-3xl">
                    New Staff Registration
                  </span>
                </p>

                <div
                  style={{ backgroundImage: `url(${form.passport})` }}
                  onClick={uploadPassport}
                  className="ml-auto grid h-40 w-40 place-content-center border border-dashed border-black bg-neutral-100 bg-contain bg-center bg-no-repeat lg:h-52 lg:w-52"
                >
                  {!form.passport && (
                    <div className="inline-flex items-center justify-center gap-2 rounded-md bg-white p-2 font-bold">
                      <BsFillCloudUploadFill className="" />
                      <span className="">Passport</span>
                    </div>
                  )}
                </div>
                <input
                  name="passport"
                  className="hidden"
                  type="file"
                  accept="image/*"
                  onChange={showImage}
                />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                <p className="italics col-span-full">
                  Inputs with a <span className="text-red-500">*</span> means
                  they are required
                </p>

                <Input
                  name="firstname"
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                  label="Firstname"
                  placeholder="Enter Firstname"
                  required
                />

                <Input
                  name="lastname"
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                  label="Lastname"
                  placeholder="Enter Lastname"
                  required
                />

                <Input
                  name="othernames"
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                  label="Other names"
                  placeholder="Enter Middle name"
                />

                <Input
                  name="email"
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                  type="email"
                  label="Email"
                  placeholder="Enter Email"
                  required
                />

                <Input
                  name="phone"
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                  label="Phone Number"
                  placeholder="Enter Phone Number"
                  required
                />

                <Input
                  name="department"
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                  label="Department"
                  placeholder="Enter Census Staff Department"
                  required
                />

                <Input
                  name="dob"
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                  type="date"
                  label="Date of Birth"
                  placeholder="Enter Date of Birth"
                  required
                />

                <Input
                  name="state"
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                  label="State of Origin"
                  placeholder="Enter State of Origin"
                  required
                />

                <Input
                  name="lga"
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                  label="LGA of Origin"
                  placeholder="Enter LGA of Origin"
                  required
                />

                <div className="col-span-full md:col-span-2">
                  <Input
                    name="address"
                    onChange={(e) =>
                      setForm({ ...form, [e.target.name]: e.target.value })
                    }
                    label="Residential Address"
                    placeholder="Enter Residential Address"
                    required
                  />
                </div>

                <Input
                  name="username"
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                  label="Username"
                  placeholder="Enter Username"
                  required
                />

                <Input
                  name="password"
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                  label="Password"
                  placeholder="Enter Password"
                  type="password"
                  required
                />

                <Input
                  name="confirm_password"
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  type="password"
                  required
                />

                <div className="col-span-full">
                  <div className="mx-auto w-full max-w-md">
                    <Button className="mx-auto w-full" value="Submit" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
