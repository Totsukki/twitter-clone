/* eslint-disable react/prop-types */
import { FiSearch } from "react-icons/fi";
import { HiOutlineEllipsisHorizontal } from "react-icons/hi2";
import { useRef } from "react";
const RightSider = ({ scrollTop }) => {
  const trending = [
    {
      id: 1,
      name: "Taylor Swift",
      current_name: "Trending in Music",
      current_country: "Philippines",
      tweet_volume: 13347,
    },
    {
      id: 2,
      name: "Basketball",
      current_name: "Trending in Sports",
      current_country: "Philippines",
      tweet_volume: 7598,
    },
    {
      id: 3,
      name: "COVID-19",
      current_name: "Trending in Current Affairs",
      current_country: "Philippines",
      tweet_volume: 6436,
    },
    {
      id: 4,
      name: "Avengers: Endgame",
      current_name: "Trending in Movies",
      current_country: "Philippines",
      tweet_volume: 4534,
    },
    {
      id: 5,
      name: "Art Exhibition",
      current_name: "Trending in Art",
      current_country: "Philippines",
      tweet_volume: 4442,
    },
    {
      id: 6,
      name: "Fashion Week",
      current_name: "Trending in Fashion",
      current_country: "Philippines",
      tweet_volume: 3577,
    },
    {
      id: 7,
      name: "Food Festival",
      current_name: "Trending in Food",
      current_country: "Philippines",
      tweet_volume: 3487,
    },
    {
      id: 8,
      name: "Coco Martin",
      current_name: "Trending in Philippines",
      current_country: "Philippines",
      tweet_volume: 2502,
    },
    {
      id: 9,
      name: "Fitness Tips",
      current_name: "Trending in Fitness",
      current_country: "Philippines",
      tweet_volume: 2109,
    },
    {
      id: 10,
      name: "Election Updates",
      current_name: "Trending in Philippines",
      current_country: "Philippines",
      tweet_volume: 1574,
    },
  ];

  const toFollow = [
    {
      id: 1,
      name: "John Doe",
      handle: "@johndoe",
      avatar: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      handle: "@janesmith",
      avatar: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    },
    {
      id: 3,
      name: "Alex Johnson",
      handle: "@alexjohnson",
      avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    },
  ];

  const links = [
    { id: 1, name: "Terms of Service", link: "" },
    { id: 2, name: "Privacy Policy", link: "" },
    { id: 3, name: "Cookie Policy", link: "" },
    { id: 4, name: "Accessibility", link: "" },
    { id: 5, name: "Ads info", link: "" },
  ];

  const sider = useRef(null);
  return (
    <div
      className="w-96 px-5 pb-10 sticky top-0 h-screen overflow-y-auto no-scrollbar"
      ref={sider}
      onScroll={scrollTop}
    >
      <div className="sticky top-0 bg-[#020617] py-1">
        <div className="absolute inset-y-0 left-2 flex items-center pl-3 pointer-events-none">
          <FiSearch color="gray" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full py-3 pl-14 text-sm text-gray-900 rounded-full focus:bg-transparent focus:ring-blue-500 dark:border-0 focus:border-blue-500 dark:bg-white/10 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Twitter"
          required
        />
      </div>
      <div className="bg-white/10 mt-10 rounded-xl flex flex-col">
        <h1 className="font-bold text-xl px-4 py-3">Trends for you</h1>
        {trending.map((trend) => {
          return (
            <div
              key={trend.id}
              className="px-4 py-3 pb-4 flex hover:bg-white/5"
            >
              <div>
                <h3 className=" text-gray-500 text-xs">{trend.current_name}</h3>
                <h1 className="text-md font-bold">{trend.name}</h1>
                <h3 className=" text-gray-500 text-xs">
                  {trend.tweet_volume.toLocaleString()} tweets
                </h3>
              </div>
              <HiOutlineEllipsisHorizontal className="ml-auto text-3xl text-gray-500 p-1 hover:bg-blue-500/10 rounded-full" />
            </div>
          );
        })}
        <a className="p-4 rounded-b-xl hover:bg-white/5 text-blue-500 cursor-pointer">
          Show More
        </a>
      </div>
      <div className="bg-white/10 mt-10 rounded-xl flex flex-col">
        <h1 className="font-bold text-xl px-4 py-3">Who to follow</h1>
        {toFollow.map((follow) => {
          return (
            <div
              key={follow.id}
              className="px-4 py-3 pb-4 flex gap-3 items-center hover:bg-white/5"
            >
              <img className="rounded-full h-[3rem]" src={follow.avatar} />
              <div>
                <h1 className="font-bold text-md">{follow.name}</h1>
                <h3 className=" -ml-1 text-gray-500">{follow.handle}</h3>
              </div>
              <button
                type="button"
                className="ml-auto h-[2rem] px-4 font-bold text-sm rounded-full bg-black text-white dark:bg-white dark:text-black"
              >
                Follow
              </button>
            </div>
          );
        })}
        <a className="p-4 rounded-b-xl hover:bg-white/5 text-blue-500 cursor-pointer">
          Show More
        </a>
      </div>
      <div className=" mt-5 px-3 leading-none text-gray-500 flex flex-wrap gap-2 text-sm">
        {links.map((link) => {
          return (
            <a
              className=" hover:underline hover:decoration-solid"
              key={link.id}
              href={link.link}
            >
              {link.name}
            </a>
          );
        })}
        <a className=" flex items-center gap-1 hover:underline hover:decoration-solid">
          More
          <HiOutlineEllipsisHorizontal fontSize={17} />
        </a>
        <h1 className="text-sm">© 2023 X Corp.</h1>
      </div>
    </div>
  );
};

export default RightSider;
