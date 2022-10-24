import { Outlet } from "react-router-dom";

const Number = () => {
  return (
    <div>
      <h1>Number Page</h1>
      <Outlet />
    </div>
  );
};

export default Number;
