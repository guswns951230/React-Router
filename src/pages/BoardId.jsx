import { useState } from "react";
import { useParams } from "react-router-dom";

const BoardId = () => {
  const { id } = useParams();
  const [memolist, setMemolist] = useState([
    { id: 1, memo: "first memo" },
    { id: 2, memo: "second memo" },
  ]);
  const memo = memolist[id - 1];
  return (
    <div>
      <h1>{memo.id}</h1>
      <p>{memo.memo}</p>
    </div>
  );
};

export default BoardId;
