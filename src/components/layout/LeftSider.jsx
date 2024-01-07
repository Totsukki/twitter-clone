import { BsTwitter, BsBookmark, BsBookmarkFill } from "react-icons/bs";
import {
  RiHome7Line,
  RiHome7Fill,
  RiMailLine,
  RiMailFill,
  RiFileListLine,
  RiFileListFill,
  RiNotification2Fill,
  RiNotification2Line,
} from "react-icons/ri";
import {
  HiOutlineEllipsisHorizontalCircle,
  HiEllipsisHorizontalCircle,
  HiOutlineEllipsisHorizontal,
} from "react-icons/hi2";
import {
  HiOutlineHashtag,
  HiOutlineUser,
  HiHashtag,
  HiUser,
} from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const LeftSider = () => {
  const links = [
    {
      name: "Home",
      route: "/home",
      icons: { inactive: <RiHome7Line />, active: <RiHome7Fill /> },
    },
    {
      name: "Explore",
      route: "/explore",
      icons: { inactive: <HiOutlineHashtag />, active: <HiHashtag /> },
    },
    {
      name: "Notification",
      route: "/notification",
      icons: {
        inactive: <RiNotification2Line />,
        active: <RiNotification2Fill />,
      },
    },
    {
      name: "Messages",
      route: "/messages",
      icons: { inactive: <RiMailLine />, active: <RiMailFill /> },
    },
    {
      name: "Lists",
      route: "/lists",
      icons: { inactive: <RiFileListLine />, active: <RiFileListFill /> },
    },
    {
      name: "Bookmarks",
      route: "/bookmarks",
      icons: { inactive: <BsBookmark />, active: <BsBookmarkFill /> },
    },
    {
      name: "Profile",
      route: "/profile",
      icons: { inactive: <HiOutlineUser />, active: <HiUser /> },
    },
    {
      name: "More",
      route: "/more",
      icons: {
        inactive: <HiOutlineEllipsisHorizontalCircle />,
        active: <HiEllipsisHorizontalCircle />,
      },
    },
  ];

  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname;
    console.log(path);
    links.forEach((link) => {
      if ("/" + link.name.toLowerCase() == path) setActiveLink(link.name);
    });
  }, [location, links]);

  return (
    <div className=" sticky top-0 min-h-min h-screen flex flex-col gap-5 py-3 w-[16rem]">
      <BsTwitter size={30} />
      <div className="flex flex-col gap-4 ml-[-.6rem] w-10">
        {links.map((link) => {
          return (
            <div key={link.name} className="flex">
              <Link to={link.route}>
                <span
                  className={`text-[1.8rem] flex p-2 pr-5 rounded-full gap-5 hover:bg-white/10 hover:cursor-pointer`}
                  onClick={() => setActiveLink(link.name)}
                >
                  {activeLink == link.name
                    ? link.icons.active
                    : link.icons.inactive}
                  <h5
                    className={`text-[1.2rem] ${
                      activeLink == link.name ? "font-bold" : ""
                    } `}
                  >
                    {link.name}
                  </h5>
                </span>
              </Link>
            </div>
          );
        })}
      </div>
      <button
        type="button"
        className=" bg-blue-500 hover:bg-blue-500/90 py-3 text-lg rounded-full font-bold w-56"
      >
        Tweet
      </button>
      <div className="flex gap-3 items-center hover:bg-white/10 hover:cursor-pointer rounded-full p-2 mt-auto">
        <img
          className="w-10 h-10 object-cover rounded-full"
          src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
        />
        <span>
          <h1 className="font-semibold">displayName</h1>
          <h1 className="font-extralight">@handle</h1>
        </span>
        <HiOutlineEllipsisHorizontal className="ml-auto" />
      </div>
    </div>
  );
};

export default LeftSider;
