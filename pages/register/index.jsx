import RegisterApi from "@/context/API Set/register";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export default function RegisterPage() {
  const [nameAcc, setNameAcc] = useState("");
  const [emailAcc, setEmailAcc] = useState("");
  const [passAcc, setPassAcc] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [roleAcc, setRoleAcc] = useState("user");
  const [phoneAcc, setPhoneAcc] = useState("");
  const [profPictAcc, setProfPictAcc] = useState("");
  const [message, setMessage] = useState("");

  const handleRegisterAccount = async (e) => {
    e.preventDefault();

    if (passAcc !== passwordRepeat) {
      setMessage("Passwords do not match");
    } else if (phoneAcc.length > 12) {
      setMessage("Phone number is not valid");
    } else {
      try {
        const res = await axios.post(
          "https://api-bootcamp.do.dibimbing.id/api/v1/register",
          {
            name: nameAcc,
            email: emailAcc,
            password: passAcc,
            passwordRepeat: passwordRepeat,
            role: roleAcc,
            phoneNumber: phoneAcc,
            profilPictureUrl: profPictAcc,
          },
          {
            headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" },
          }
        );

        if (response.status === 200) {
          console.log("Registrasi berhasil!");
        } else {
          console.error("Gagal melakukan registrasi.");
        }
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      }
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      {/* Register Container */}
      <div className="bg-gra-100 flex rounded-2xl shadow-lg max-w-3xl p-5">
        {/* from Register */}
        <div className="sm:w-1/2 px-16">
          <h2 className="text-2xl font-bold text-[#002d74] ">Register</h2>
          <p className="text-sm mt-4 text-[#002d74] ">welcome in Food Diary</p>

          <from className="flex flex-col gap-4">
            <div className="relative">
              <h2 className="p-1 mt-3 text-gray-500">Name</h2>
              <input
                className="p-2 mt-1 rounded-xl border w-full"
                type="text"
                name="name"
                value={nameAcc}
                placeholder="Enter Your Name"
                onChange={(e) => setNameAcc(e.target.value)}
              />
            </div>

            <div className="relative">
              <label className="p-1 -mt-2 text-gray-500">Email addres</label>
              <input
                className="p-2 mt-1 rounded-xl border w-full"
                type="text"
                value={emailAcc}
                name="email"
                placeholder="Enter Your Email"
                onChange={(e) => setEmailAcc(e.target.value)}
              />
            </div>

            <div className="relative">
              <label className="p-1 -mt-2 text-gray-500">Password</label>
              <input
                className="p-2 mt-1 rounded-xl border w-full"
                type="password"
                value={passAcc}
                name="password"
                placeholder="Enter Password"
                onChange={(e) => setPassAcc(e.target.value)}
              />
            </div>

            <div className="relative">
              <label className="p-1 -mt-2 text-gray-500">
                Confrim Password
              </label>
              <input
                className="p-2 mt-1 rounded-xl border w-full"
                type="password"
                value={passwordRepeat}
                name="passwordRepeat"
                placeholder="Enter Password"
                onChange={(e) => setPasswordRepeat(e.target.value)}
              />
            </div>

            <div className="relative">
              <label className="p-1 -mt-2 text-gray-500">Phone Number</label>
              <input
                className="p-2 mt-1 rounded-xl border w-full"
                type="text"
                name="phoneNumber"
                value={phoneAcc}
                placeholder="Enter your phone number"
                onChange={(e) => setPhoneAcc(e.target.value)}
              />
            </div>

            <div className="relative">
              <label className="p-1 -mt-2 text-gray-500">Role</label>
              <select>
                <option>Select Role</option>
                <option
                  className=" text-gray-500"
                  text="user"
                  value={roleAcc}
                  onChange={(e) => setRoleAcc(e.target.value)}
                >
                  User
                </option>
                <option
                  className=" text-gray-500"
                  text="admin"
                  //   value={modifiedData.role}
                >
                  Admin
                </option>
              </select>
            </div>

            <div className="relative">
              <label className="p-1 -mt-2 text-gray-500">
                Profile Picture url
              </label>
              <input
                className="p-2 mt-1 rounded-xl border-b-black w-full"
                type="text"
                name="profilPicture"
                value={profPictAcc}
                onChange={(e) => setProfPictAcc(e.target.value)}
              />
            </div>
            <button
              className="bg-[#002d74] rounded-xl text-white py-2"
              type="submit"
              onClick={handleRegisterAccount}
            >
              Register
            </button>
          </from>
          <div className="text-xs flex justify-between items-center">
            <p>Have an Account? </p>
            <button className="py-2 px-4 mt-1 bg-white border rounded-xl">
              <Link href="/login">Login</Link>
            </button>
          </div>
        </div>
        {/* image */}
        <div className="sm:block hidden w-1/2 mt-20">
          <Image
            src="/image/logo2.jpg"
            width={400}
            height={570}
            alt="Picture of the author"
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
