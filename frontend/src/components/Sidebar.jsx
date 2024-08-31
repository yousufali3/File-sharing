import React from "react";
import { MdOutlineCheck } from "react-icons/md";
import Content from "./Content";

const Sidebar = () => {
  return (
    <div className="flex h-[91vh] bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-1/6 flex flex-col  justify-between border-e-4 border-blue-600">
        <div className="px-4 py-6">
          <span className="grid h-10 place-content-center rounded-lg text-lg font-bold  text-gray-100">
            {/* Logo */}
            <a
              className="rounded-md bg-[#007dfc] px-5 py-2.5 text-sm cursor-default font-medium text-white shadow hover:bg-blue-900"
              href=""
            >
              Website Features Overview
            </a>
          </span>

          <ul className="mt-6 space-y-1 ">
            {/* <li>
              <a
                href="#"
                className="block rounded-lg  px-4 py-2 text-sm font-medium text-gray-700"
              >
                General
              </a>
            </li> */}

            {/* <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium"> Teams </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Banned Users
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Calendar
                    </a>
                  </li>
                </ul>
              </details>
            </li> */}

            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium  text-gray-500 cursor-default"
              >
                <span className="flex flex-row gap-[4px]">
                  <span>
                    <MdOutlineCheck />
                  </span>{" "}
                  <span className="mt-[-4px]"> File Upload</span>
                </span>{" "}
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium  text-gray-500 cursor-default"
              >
                <span className="flex flex-row gap-[4px]">
                  <span>
                    <MdOutlineCheck />
                  </span>{" "}
                  <span className="mt-[-4px]"> Generate Link</span>
                </span>{" "}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium  text-gray-500 cursor-default"
              >
                <span className="flex flex-row gap-[4px]">
                  <span>
                    <MdOutlineCheck />
                  </span>{" "}
                  <span className="mt-[-4px]"> QR Code</span>
                </span>{" "}
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium  text-gray-500 cursor-default"
              >
                <span className="flex flex-row gap-[4px]">
                  <span>
                    <MdOutlineCheck />
                  </span>{" "}
                  <span className="mt-[-4px]">Link Expiry </span>
                </span>{" "}
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium  text-gray-500 cursor-default"
              >
                <span className="flex flex-row gap-[4px]">
                  <span>
                    <MdOutlineCheck />
                  </span>{" "}
                  <span className="mt-[-4px]"> Password Protection</span>
                </span>{" "}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium  text-gray-500 cursor-default"
              >
                <span className="flex flex-row gap-[4px]">
                  <span>
                    <MdOutlineCheck />
                  </span>{" "}
                  <span className="mt-[-4px]"> Email Sharing</span>
                </span>{" "}
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium  text-gray-500 cursor-default"
              >
                <span className="flex flex-row gap-[4px]">
                  <span>
                    <MdOutlineCheck />
                  </span>{" "}
                  <span className="mt-[-4px]">Encryption </span>
                </span>{" "}
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium  text-gray-500 cursor-default"
              >
                <span className="flex flex-row gap-[4px]">
                  <span>
                    <MdOutlineCheck />
                  </span>{" "}
                  <span className="mt-[-4px]"> Terms & Privacy</span>
                </span>{" "}
              </a>
            </li>

            {/* <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium"> Account </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Details
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Security
                    </a>
                  </li>

                  <li>
                    <form action="#">
                      <button
                        type="submit"
                        className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                      >
                        Logout
                      </button>
                    </form>
                  </li>
                </ul>
              </details>
            </li> */}
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-4 rounded-full hover:text-gray-600 shadow-xl border-blue-600">
          <a
            href="https://www.linkedin.com/in/yousufali8/"
            className="flex items-center gap-2 p-4 "
            target="_blank"
          >
            <img
              alt=""
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="size-10 rounded-full object-cover"
            />

            <div>
              <p className="text-xs">
                <strong className="block font-medium">Yousuf Ali</strong>

                <span> example@gmail.com</span>
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* Main content */}
      <div className="w-4/5 p-6">
        {/* <h1 className="text-2xl font-bold">Main Content</h1>
        <p>
          This is where you can add your main content, forms, or any other
          components.
        </p> */}

        <Content />
      </div>
    </div>
  );
};

export default Sidebar;
