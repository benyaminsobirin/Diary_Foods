import LoginApi from "@/context/API Set/login";
import Google from "@/icon/google";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLoginAccount = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://api-bootcamp.do.dibimbing.id/api/v1/login",
        {
          email,
          password,
        },
        {
          headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" },
        }
        );
        

      if (response.status === 200) {
        // Login berhasil, arahkan ke halaman utama
        router.push("/headers");
      } else {
        console.error("Gagal login.");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      {/* Login Container */}
      <div className="bg-gra-100 flex rounded-2xl shadow-lg max-w-3xl p-5">
        {/* from */}
        <div className="sm:w-1/2 px-16">
          <h2 className="text-2xl font-bold text-[#002d74] ">
            Login | Food Diary
          </h2>
          <p className="text-sm mt-4 text-[#002d74] ">
            if you alredy a member, easily log in
          </p>

          <from className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl"
              type="text"
              name="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-[#002d74] rounded-xl text-white py-2"
              type="submit"
              onClick={handleLoginAccount}
            >
              <Link href="/headers">Login</Link>
            </button>
          </from>
          <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center">OR</p>
            <hr className="border-gray-400" />
          </div>

          <button className=" bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm">
            <Google /> Login with Google
          </button>

          <p className="mt-5 text-xs border-b py-6">Forgot your password?</p>

          <div className="text-xs flex justify-between items-center">
            <p>If you don't have account? </p>
            <button className="py-2 px-4 mt-1 bg-white border rounded-xl">
              <Link href="/register">Register</Link>
            </button>
          </div>
        </div>
        {/* Image */}
        <div className="sm:block hidden w-1/2">
          <Image
            src="/image/logo1.jpg"
            width={400}
            height={400}
            alt="Picture of the author"
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
