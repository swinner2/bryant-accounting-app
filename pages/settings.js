import Head from "next/head";
import { useEffect, useState } from "react";

export default function Settings({ loggedIn, user, logout }) {
  return (
    <div className="container">
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <main className="flex-1 overflow-y-auto focus:outline-none" tabIndex="0">
        <div className="relative max-w-4xl mx-auto md:px-8 xl:px-0">
          <div className="pt-10 pb-16">
            <div className="px-4 sm:px-6 md:px-0">
              <h1 className="text-3xl leading-9 font-extrabold text-gray-900">
                Settings
              </h1>
            </div>
            <div className="px-4 sm:px-6 md:px-0">
              <div className="py-6">
                {/* <!-- Tabs --> */}
                <div className="lg:hidden">
                  <select
                    aria-label="Selected tab"
                    className="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:ring-blue focus:border-blue-300 sm:text-sm sm:leading-5 transition ease-in-out duration-150"
                    defaultValue="General"
                  >
                    <option>General</option>

                    <option>Password</option>

                    <option>Notifications</option>

                    <option>Plan</option>

                    <option>Billing</option>

                    <option>Team Members</option>
                  </select>
                </div>
                <div className="hidden lg:block">
                  <div className="border-b border-gray-200">
                    <nav className="-mb-px flex">
                      <a
                        href="#"
                        className="whitespace-nowrap py-4 px-1 border-b-2 border-purple-500 font-medium text-sm leading-5 text-purple-600 focus:outline-none focus:text-purple-800 focus:border-purple-700"
                      >
                        General
                      </a>

                      <a
                        href="#"
                        className="whitespace-nowrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                      >
                        Password
                      </a>

                      <a
                        href="#"
                        className="whitespace-nowrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                      >
                        Notifications
                      </a>

                      <a
                        href="#"
                        className="whitespace-nowrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                      >
                        Plan
                      </a>

                      <a
                        href="#"
                        className="whitespace-nowrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                      >
                        Billing
                      </a>

                      <a
                        href="#"
                        className="whitespace-nowrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
                      >
                        Team Members
                      </a>
                    </nav>
                  </div>
                </div>

                {/* Description list with inline editing */}
                <div className="mt-10 space-y-6 divide-y divide-gray-200">
                  <div className="space-y-1">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Profile
                    </h3>
                    <p className="max-w-2xl text-sm leading-5 text-gray-500">
                      This information will be displayed publicly so be careful
                      what you share.
                    </p>
                  </div>
                  <div>
                    <dl className="divide-y divide-gray-200">
                      <div className="py-4 space-y-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm leading-5 font-medium text-gray-500">
                          Name
                        </dt>
                        <dd className="flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                          <span className="flex-grow">Chelsea Hagon</span>
                          <span className="flex-shrink-0">
                            <button
                              type="button"
                              className="font-medium text-purple-600 hover:text-purple-500 transition duration-150 ease-in-out"
                            >
                              Update
                            </button>
                          </span>
                        </dd>
                      </div>
                      <div className="py-4 space-y-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                        <dt className="text-sm leading-5 font-medium text-gray-500">
                          Photo
                        </dt>
                        <dd className="flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                          <span className="flex-grow">
                            <img
                              className="h-8 w-8 rounded-full"
                              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </span>
                          <span className="flex-shrink-0 flex items-start space-x-4">
                            <button
                              type="button"
                              className="font-medium text-purple-600 hover:text-purple-500 transition duration-150 ease-in-out"
                            >
                              Update
                            </button>
                            <span className="text-gray-300" aria-hidden="true">
                              |
                            </span>
                            <button
                              type="button"
                              className="font-medium text-purple-600 hover:text-purple-500 transition duration-150 ease-in-out"
                            >
                              Remove
                            </button>
                          </span>
                        </dd>
                      </div>
                      <div className="py-4 space-y-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                        <dt className="text-sm leading-5 font-medium text-gray-500">
                          Email
                        </dt>
                        <dd className="flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                          <span className="flex-grow">
                            chelsea.hagon@example.com
                          </span>
                          <span className="flex-shrink-0">
                            <button
                              type="button"
                              className="font-medium text-purple-600 hover:text-purple-500 transition duration-150 ease-in-out"
                            >
                              Update
                            </button>
                          </span>
                        </dd>
                      </div>
                      <div className="py-4 space-y-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200">
                        <dt className="text-sm leading-5 font-medium text-gray-500">
                          Job title
                        </dt>
                        <dd className="flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                          <span className="flex-grow">
                            Human Resources Manager
                          </span>
                          <span className="flex-shrink-0">
                            <button
                              type="button"
                              className="font-medium text-purple-600 hover:text-purple-500 transition duration-150 ease-in-out"
                            >
                              Update
                            </button>
                          </span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div className="mt-10 space-y-6 divide-y divide-gray-200">
                  <div className="space-y-1">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Account
                    </h3>
                    <p className="max-w-2xl text-sm leading-5 text-gray-500">
                      Manage how information is displayed on your account.
                    </p>
                  </div>
                  <div>
                    <dl className="divide-y divide-gray-200">
                      <div className="py-4 space-y-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm leading-5 font-medium text-gray-500">
                          Language
                        </dt>
                        <dd className="flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                          <span className="flex-grow">English</span>
                          <span className="flex-shrink-0">
                            <button
                              type="button"
                              className="font-medium text-purple-600 hover:text-purple-500 transition duration-150 ease-in-out"
                            >
                              Update
                            </button>
                          </span>
                        </dd>
                      </div>
                      <div className="py-4 space-y-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                        <dt className="text-sm leading-5 font-medium text-gray-500">
                          Date format
                        </dt>
                        <dd className="flex space-x-4 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                          <span className="flex-grow">DD-MM-YYYY</span>
                          <span className="flex-shrink-0 flex items-start space-x-4">
                            <button
                              type="button"
                              className="font-medium text-purple-600 hover:text-purple-500 transition duration-150 ease-in-out"
                            >
                              Update
                            </button>
                            <span className="text-gray-300" aria-hidden="true">
                              |
                            </span>
                            <button
                              type="button"
                              className="font-medium text-purple-600 hover:text-purple-500 transition duration-150 ease-in-out"
                            >
                              Remove
                            </button>
                          </span>
                        </dd>
                      </div>
                      <div className="py-4 space-y-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                        <dt className="text-sm leading-5 font-medium text-gray-500">
                          Automatic timezone
                        </dt>
                        <dd className="flex text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                          {/* <!-- On: "bg-purple-600", Off: "bg-gray-200" --> */}
                          <span
                            role="checkbox"
                            tabIndex="0"
                            aria-checked="true"
                            className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring sm:ml-auto"
                          >
                            {/* <!-- On: "translate-x-5", Off: "translate-x-0" --> */}
                            <span
                              aria-hidden="true"
                              className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
                            ></span>
                          </span>
                        </dd>
                      </div>
                      <div className="py-4 space-y-1 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200">
                        <dt className="text-sm leading-5 font-medium text-gray-500">
                          Auto-update applicant data
                        </dt>
                        <dd className="flex text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                          {/* <!-- On: "bg-purple-600", Off: "bg-gray-200" --> */}
                          <span
                            role="checkbox"
                            tabIndex="0"
                            aria-checked="false"
                            className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring sm:ml-auto"
                          >
                            {/* <!-- On: "translate-x-5", Off: "translate-x-0" --> */}
                            <span
                              aria-hidden="true"
                              className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
                            ></span>
                          </span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
