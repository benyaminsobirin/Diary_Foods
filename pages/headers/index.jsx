import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import FoodList from "../foodList";
import Footer from "../footers";

function Header() {
  const handleLogout = async () => {
    const router = useRouter();

    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
    // const apiKey = "w05KkI9AWhKxzvPFtXotUva-";
    const jwtToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJlbmphbWluMTIzQGdtYWlsLmNvbSIsInVzZXJJZCI6ImJjZDI2MzVkLTM2MDMtNDZiNi05NDRiLTg2ZDE2NzllNmIxYSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjk0MTc1ODQ0fQ.Kv5P41qAVBuuFKg938UBerudpe4fCAZA0JVjuzx-s88";

    try {
      const res = await axios.get(
        "https://api-bootcamp.do.dibimbing.id/api/v1/logout",
        {
          headers: {
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      router.push("/login");
      return res;
    } catch (error) {
      console.error("Terjadi kesalahan saat logout:", error);
    }
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-400">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <Image
              src="/image/logo.png"
              class="mr-3 h-6 sm:h-9"
              alt="diary food logo"
              width={50}
              height={100}
            />
            <span className=" self-center text-xl font-semibold whitespace-nowrap dark:text-blue">
              Food DIary
            </span>
          </div>

          <div className="flex items-center lg:order-2">
            <div
              href="#"
              class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              <button>
                <Link href="/login" onClick={handleLogout}>
                  Log Out
                </Link>
              </button>
            </div>
          </div>
          <div
            class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <div
                  href="#"
                  class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  <Link href="/">Home</Link>
                </div>
              </li>
              <li>
                <div
                  href="#"
                  class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  <Link href="/recipes">Recipes</Link>
                </div>
              </li>
              <li>
                <div
                  href="#"
                  class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  <Link href="/createFood">Create Food</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* isi content */}
      <FoodList />
      <Footer />
    </header>
  );
}

export default Header;
