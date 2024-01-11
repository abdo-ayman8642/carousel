import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface Props {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const CarouselDialog: React.FC<Props> = ({ open, onClose }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10 " onClose={onClose}>
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

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full  justify-center p-4 text-center items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3  sm:ml-4 sm:mt-0 text-left">
                      <Dialog.Title
                        as="h3"
                        className=" font-semibold leading-10 text-3xl text-gray-900"
                      >
                        Introduction
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          The Carousel component is a versatile and responsive
                          image slider that allows you to create engaging and
                          interactive slideshows.
                        </p>
                        <p className="text-sm text-gray-500">
                          It supports various features such as automatic
                          scrolling, touch navigation, keyboard navigation, and
                          slide indicators.
                        </p>
                      </div>
                      <h2 className="text-xl font-semibold mb-4">Usage</h2>

                      <p className="text-gray-700 mb-4">
                        The Carousel component is easy to use and customizable.
                        You can integrate it into your application by following
                        these steps:
                      </p>

                      <pre className="bg-gray-200 p-4 mb-6 mr-3 w-fit">
                        <img src="/img/screenshots/Screenshot 2024-01-11 150704.png" />
                      </pre>

                      <h2 className="text-xl font-semibold mb-4">
                        Props{" "}
                        <span className="font-light">
                          (All props are optional Ex: Children)
                        </span>
                      </h2>

                      <h3 className="text-lg font-semibold mb-2">
                        <code className="text-blue-700">
                          autoScrollInterval
                        </code>
                      </h3>

                      <ul className="list-disc pl-6 mb-4">
                        <li className="text-gray-700">
                          Type: <code className="text-blue-700">number</code>
                        </li>
                        <li className="text-gray-700">
                          Default: <code className="text-blue-700">0</code>
                        </li>
                        <li className="text-gray-700">
                          Description: The interval in seconds between automatic
                          slides.
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold mb-2">
                        <code className="text-blue-700">transition</code>
                      </h3>

                      <ul className="list-disc pl-6 mb-4">
                        <li className="text-gray-700">
                          Type: <code className="text-blue-700">object</code>
                        </li>
                        <li className="text-gray-700 ">
                          Default:
                          <pre className="bg-gray-200 p-2 block w-fit">
                            <img src="img/screenshots/Screenshot 2024-01-11 151249.png" />
                          </pre>
                        </li>
                        <li className="text-gray-700">
                          Description: Object containing properties for
                          transition animations. You can customize the{" "}
                          <code className="text-blue-700">duration</code>,{" "}
                          <code className="text-blue-700">timingFunction</code>,
                          and <code className="text-blue-700">delay</code> of
                          the transition.
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold mb-2">
                        <code className="text-blue-700">nextIcon</code>
                      </h3>

                      <ul className="list-disc pl-6 mb-4">
                        <li className="text-gray-700">
                          Type:{" "}
                          <code className="text-blue-700">
                            React.ReactElement
                          </code>
                        </li>
                        <li className="text-gray-700">
                          Default:{" "}
                          <code className="text-blue-700">
                            {"<ArrowRight />"}
                          </code>
                        </li>
                        <li className="text-gray-700">
                          Description: Custom component for the next slide
                          button.
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold mb-2">
                        <code className="text-blue-700">prevIcon</code>
                      </h3>

                      <ul className="list-disc pl-6 mb-4">
                        <li className="text-gray-700">
                          Type:{" "}
                          <code className="text-blue-700">
                            React.ReactElement
                          </code>
                        </li>
                        <li className="text-gray-700">
                          Default:{" "}
                          <code className="text-blue-700">
                            {"<ArrowLeft />"}
                          </code>
                        </li>
                        <li className="text-gray-700">
                          Description: Custom component for the previous slide
                          button.
                        </li>
                      </ul>

                      <h3 className="text-lg font-semibold mb-2">
                        <code className="text-blue-700">showIndicators</code>
                      </h3>

                      <ul className="list-disc pl-6 mb-6">
                        <li className="text-gray-700">
                          Type: <code className="text-blue-700">boolean</code>
                        </li>
                        <li className="text-gray-700">
                          Default: <code className="text-blue-700">false</code>
                        </li>
                        <li className="text-gray-700">
                          Description: Whether to display slide indicators at
                          the bottom of the Carousel.
                        </li>
                      </ul>

                      <h2 className="text-xl font-semibold mb-4">
                        Additional Features
                      </h2>

                      <h3 className="text-lg font-semibold mb-2">
                        Mouse Control
                      </h3>

                      <p className="text-gray-700 mb-4">
                        The Carousel automatically pauses scrolling when the
                        mouse is over it.
                      </p>

                      <h3 className="text-lg font-semibold mb-2">
                        Touch Navigation
                      </h3>

                      <p className="text-gray-700 mb-4">
                        Users can navigate through slides using touch gestures.
                      </p>

                      <h3 className="text-lg font-semibold mb-2">
                        Keyboard Navigation
                      </h3>

                      <p className="text-gray-700 mb-6">
                        Users can navigate through slides using keyboard arrow
                        keys.
                      </p>

                      <h2 className="text-xl font-semibold mb-4">Examples</h2>

                      <h3 className="text-lg font-semibold mb-2">
                        Example 1: Basic Carousel
                      </h3>

                      <pre className="bg-gray-200 p-4 mb-6 w-fit">
                        <img src="img/screenshots/Screenshot 2024-01-11 151313.png" />
                      </pre>

                      <h3 className="text-lg font-semibold mb-2">
                        Example 2: Carousel with Custom Icons and Indicators
                      </h3>

                      <pre className="bg-gray-200 p-4 mb-6 w-fit">
                        <img src="img/screenshots/Screenshot 2024-01-11 151325.png" />
                      </pre>

                      <h2 className="text-xl font-semibold mb-4">Notes</h2>

                      <ul className="list-disc pl-6 mb-4">
                        <li className="text-gray-700">
                          The Carousel is responsive and adapts to various
                          screen sizes.
                        </li>
                        <li className="text-gray-700">
                          Customize the appearance using Tailwind CSS
                          classNamees.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full hover:bg-fuchsia-50 justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CarouselDialog;
