import LeftSider from "./LeftSider";
import RightSider from "./RightSider";
import Content from "./Content";

const Layout = () => {
  document.documentElement.classList.add("dark");

  // const contentScrollValue = 0;
  const scrollTop = (e) => {
    console.log(e);
  };

  return (
    <>
      <div className=" flex justify-center dark:bg-slate-950 dark:text-white/90 gap-3 px-[7.5rem] ">
        <LeftSider />
        <Content scrollTop={scrollTop} />
        <RightSider />
      </div>
    </>
  );
};

export default Layout;
