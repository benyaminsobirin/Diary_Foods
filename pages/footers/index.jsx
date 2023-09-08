import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a
            href="https://github.com/benyaminsobirin"
            className="hover:underline"
          >
            Benyamin Sobirin
          </a>
          . Dibimbing Project.
        </span>
        <ul className="flex flex-wrap items-center mt-3 gap-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://www.instagram.com/benjaminsobirin/"
              className="mr-4 hover:underline md:mr-6 "
            >
              <Image
                src="/image/instagram.png"
                width={35}
                height={35}
                alt="instagram"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/benjaminsobirin/"
              className="mr-4 hover:underline md:mr-6 "
            >
              <Image
                src="/image/linkedin.png"
                width={35}
                height={35}
                alt="instagram"
              />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/benji_project"
              className="mr-4 hover:underline md:mr-6 "
            >
              <Image
                src="/image/twitter.png"
                width={35}
                height={35}
                alt="instagram"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
