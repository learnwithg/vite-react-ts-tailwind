/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function UserAgreement() {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ">
                <div className="bg-blue w-full font-Barlow py-4 px-4">
                  <p className="text-headingOne font-Barlow font-bold text-white mx-4">
                    KMC VMS
                  </p>
                </div>
                <div className="px-4">
                  <div className="sm:flex sm:items-start sm:flex-col ">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-l font-Karla font-bold text-pumpkin mt-4"
                      >
                        COMPANY CORPORATE POLICY
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500 font-Karla">
                          KMC shall fully comply with the obligations and
                          requirements of the Data Privacy Act and, when
                          applicable, the GDPR. KMC’s officers, management, and
                          employees shall, at all times, respect the
                          confidentiality and security of all personal data
                          collected and/or stored and/or transmitted and/or used
                          for, or on behalf of KMC. KMC shall ensure all
                          collection, storage, transmission and other handling
                          or usage of personal data by KMC shall be done in
                          accordance with the obligations and requirements of
                          the Data Privacy Act and when applicable, the GDPR.
                          Where an individual legitimately requests access to
                          and/or correction of personal data relating him/her,
                          held by KMC, KMC shall provide and/or correct that
                          data in accordance with the data privacy laws.
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-l font-Karla font-bold text-pumpkin mt-4"
                      >
                        SECURITY OF PERSONAL DATA
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500 font-Karla">
                          Physical records containing personal data are securely
                          stored in locked areas when not in use. Computer data
                          are stored on computer systems and storage media to
                          which access is strictly controlled and/or are located
                          within restricted areas. Access to records and data
                          without appropriate management authorization are
                          strictly prohibited. Authorizations are granted only
                          on a 'need to know' basis. Where KMC holds, uses
                          and/or transmits personal data, the data will be
                          adequately protected from accidental and/or
                          unauthorized disclosure, change and/or destruction.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="font-Karla w-full mt-2 rounded bg-pumpkin p-3 text-white text-xs font-bold shadow-md"
                      onClick={() => setOpen(false)}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
