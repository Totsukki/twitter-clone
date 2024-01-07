import { Tabs } from "flowbite";
import { useEffect, useState } from "react";
import ForYou from "../components/home/ForYou";
import Following from "../components/home/Following";
import { BsGlobeAmericas } from "react-icons/bs";
import { MdOutlineImage, MdOutlineGifBox } from "react-icons/md";
import { RiListRadio } from "react-icons/ri";
import { PiSmileyBold } from "react-icons/pi";
import { LuCalendarClock } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Home = () => {
  const [isFocused, setIsFocused] = useState(false);

  const tabs = [
    { label: "For you", value: "for-you", component: <ForYou /> },
    { label: "Following", value: "following", component: <Following /> },
  ];

  useEffect(() => {
    const tabElements = tabs.map((tab) => {
      return {
        id: tab.value,
        triggerEl: document.querySelector(`#${tab.value}-tab`),
        targetEl: document.querySelector(`#${tab.value}`),
      };
    });
    console.log(tabElements);
    const options = {
      defaultTabId: "for-you",
      activeClasses:
        "relative text-blue-600 hover:text-blue-600 dark:text-white dark:hover:text-white after:bg-blue-500 after:w-full after:h-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:rounded-full",
      inactiveClasses:
        "text-gray-500 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700",
      onShow: (e) => {
        console.log(e._activeTab);
      },
    };

    const tabsFormatted = new Tabs(tabElements, options);
    tabsFormatted.getTab("for-you");
  });

  return (
    <div className="">
      <div className="sticky top-0 border-b border-white/20 backdrop-blur-md">
        <div className="border-gray-200 dark:border-gray-700">
          <div
            className="grid grid-cols-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400"
            id="tabs"
            role="tablist"
          >
            {tabs.map((tab) => {
              return (
                <label
                  htmlFor={`${tab.value}-tab`}
                  key={tab.label}
                  className=" hover:bg-white/5 hover:cursor-pointer"
                  role="presentation"
                >
                  <button
                    className="inline-block py-4 mx-10 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
                    id={`${tab.value}-tab`}
                    type="button"
                    role="tab"
                    aria-controls={`${tab.value}`}
                    aria-selected="false"
                  >
                    {tab.label}
                  </button>
                </label>
              );
            })}
          </div>
        </div>
      </div>
      <div id="new-post" className="p-4 border-b-[1px] border-white/20">
        <div
          id="post-container"
          className="flex gap-1 justify-center items-start"
        >
          <div id="post-container-left">
            <img
              className="w-[2.8rem] h-[2.5rem] object-cover rounded-full"
              src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
            />
          </div>
          <div id="post-container-right" className="w-[100%]">
            <textarea
              className="bg-transparent w-[100%] h-10 max-h-36 overflow-hidden text-lg border-transparent outline-none focus:ring-0 focus:border-transparent focus:outline-none"
              placeholder="What is happening?!"
              onFocus={() => setIsFocused(true)}
            ></textarea>
            {isFocused && (
              <a className="flex items-center gap-2 text-sm p-1 px-2 w-[11.5rem] mb-1 rounded-xl text-blue-500 hover:cursor-pointer font-bold hover:bg-blue-500/5">
                <BsGlobeAmericas />
                Everyone can reply
              </a>
            )}
            <div className="w-[100%] flex justify-between pt-3 border-t-[1px] border-white/20">
              <div
                id="post-container-icons"
                className="flex text-4xl text-blue-500 hover:cursor-pointer [&>*]:p-2 [&>*]:rounded-3xl"
              >
                <MdOutlineImage />
                <MdOutlineGifBox />
                <RiListRadio />
                <PiSmileyBold />
                <LuCalendarClock />
                <HiOutlineLocationMarker className=" opacity-50" />
              </div>
              <button
                type="button"
                className=" bg-blue-500 hover:bg-blue-500/90 px-5 py-2 text-md rounded-full font-bold"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="tabContent" className="">
        {tabs.map((tab) => {
          return (
            <div
              key={`${tab.label}-content`}
              className="hidden p-4 rounded-lg"
              id={tab.value}
              role="tabpanel"
              aria-labelledby={`${tab.value}-tab`}
            >
              {tab.component}
              {/* <p className="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{" "}
                <strong className="font-medium text-gray-800 dark:text-white">
                  {tab.label} {`tab's`} associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
