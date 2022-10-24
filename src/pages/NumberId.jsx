import { useParams } from "react-router-dom";

const NumberId = () => {
  // 주소를 통해서 값 전달 : param - 객체 형태로 들어온다.
  const params = useParams();
  return (
    <div>
      {/* 객체 형태로 들어오기에 .을 통해서 접근 */}
      {/*id에 모든 값이 들어갈 수 있으므로 주의 : 문자열로 드러감 */}
      <p>{params.id}</p>
    </div>
  );
};

export default NumberId;
