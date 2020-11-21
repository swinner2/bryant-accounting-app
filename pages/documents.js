import Head from "next/head";
import { useEffect, useState } from "react";
import DocumentRow from "@components/DocumentRow";
import MobileDocumentRow from "@components/MobileDocumentRow";

export default function Documents() {
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
                Documents
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row">
              <nav className="space-y-1 w-full sm:w-1/4 mt-8" aria-label="Sidebar">
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md bg-gray-200 hover:text-gray-900 hover:bg-gray-100"
                  aria-current="page"
                >
                  <span className="truncate">Personal Documents</span>
                </a>
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                >
                  <span className="truncate">Corporate Filings</span>
                </a>
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                >
                  <span className="truncate">IRS Forms & Notices</span>
                </a>
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                >
                  <span className="truncate">Bank Statements</span>
                </a>
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                >
                  <span className="truncate">Tax Returns</span>
                </a>
              </nav>

              {/* <!-- Documents list (only on smallest breakpoint) --> */}
              <div className="mt-10 sm:hidden w-full">
                <div className="px-4 sm:px-6">
                  <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                    Documents
                  </h2>
                </div>
                <ul className="mt-3 border-t border-gray-200 divide-y divide-gray-100">
                  <MobileDocumentRow />
                  <MobileDocumentRow />
                  <MobileDocumentRow />
                  <MobileDocumentRow />
                  <MobileDocumentRow />
                  {/* <!-- More project rows... --> */}
                </ul>
              </div>

              {/* <!-- Documents table (small breakpoint and up) --> */}
              <div className="hidden mt-8 sm:block w-3/4">
                <div className="align-middle inline-block min-w-full border-b border-gray-200">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-t border-gray-200">
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          <span className="lg:pl-2">Document</span>
                        </th>
                        <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Last updated
                        </th>
                        <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                      <DocumentRow />
                      <DocumentRow />
                      <DocumentRow />
                      <DocumentRow />
                      <DocumentRow />
                      <DocumentRow />
                      <DocumentRow />
                      <DocumentRow />
                      <DocumentRow />
                      <DocumentRow />
                      {/* <!-- More project rows... --> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
