import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Board = () => {
  const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [memolist, setMemolist] = useState([
    { id: 1, memo: "first memo" },
    { id: 2, memo: "second memo" },
  ]);
  return (
    <div>
      <h1>Board Page</h1>
      {memolist.map((item) => (
        <Link to={"/board/" + item.id}>{item.id}</Link>
      ))}
      <Outlet />
    </div>
  );
};

export default Board;
