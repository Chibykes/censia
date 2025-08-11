import Head from "next/head";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { IoIosPeople } from "react-icons/io";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "../../components/Select";

export default function New() {
  const [form, setForm] = useState({});

  const uploadPassport = () =>
    document.querySelector('[name="passport"]').click();

  const showImage = (e) => {
    var reader = new FileReader();
    reader.onload = () => setForm({ ...form, passport: reader.result });
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      localStorage.setItem(
        "people",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("people") || `[]`),
          form,
        ])
      );
    } catch (e) {
      return toast("❌ Passport size too large max (512kb)");
    }
    e.target.reset();
    setForm({});

    toast("✅ Person Added Successfully");
  };

  return (
    <div>
      <Head>
        <title>New Person - Censia.ng</title>
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
          <Navbar page="People" />

          <div className="space-y-3 p-4 lg:p-12">
            <form
              onSubmit={handleSubmit}
              className="space-y-8 bg-white p-6 lg:space-y-12 lg:p-20"
            >
              <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-0">
                <p className="flex items-center justify-start gap-2 pb-4 text-xl font-bold lg:text-2xl">
                  <IoIosPeople className="text-2xl text-black lg:text-4xl" />
                  <span className="text-xl text-black lg:text-3xl">
                    Record New Person
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
                  name="othername"
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                  label="Other names"
                  placeholder="Enter middle name"
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
                  name="dob"
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                  type="date"
                  label="Date of Birth"
                  placeholder="Enter Date of Birth"
                  required
                />

                <Select
                  name="gender"
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                  label="Gender"
                  options={["Male", "Female"]}
                  required
                />

                <Input
                  name="height"
                  type="number"
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                  label="Height (in cm)"
                  placeholder="Enter Height"
                  required
                />

                <Select
                  name="state"
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                  label="State of Origin"
                  options={[
                    "Abuja",
                    "Abia",
                    "Adamawa",
                    "Akwa Ibom",
                    "Anambra",
                    "Bauchi",
                    "Bayelsa",
                    "Benue",
                    "Borno",
                    "Cross River",
                    "Delta",
                    "Ebonyi",
                    "Edo",
                    "Ekiti",
                    "Enugu",
                    "Gombe",
                    "Imo",
                    "Jigawa",
                    "Kaduna",
                    "Kano",
                    "Katsina",
                    "Kebbi",
                    "Kogi",
                    "Kwara",
                    "Lagos",
                    "Nasarawa",
                    "Niger",
                    "Ogun",
                    "Ondo",
                    "Osun",
                    "Oyo",
                    "Plateau",
                    "Rivers",
                    "Sokoto",
                    "Taraba",
                    "Yobe",
                    "Zamfara",
                  ]}
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
