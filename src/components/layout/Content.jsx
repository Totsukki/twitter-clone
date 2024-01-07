import { Outlet } from "react-router-dom";
const Content = () => {
  return (
    <div className="border-x border-white/20 w-[40rem]">
      <Outlet />
    </div>
  );
};

export default Content;
