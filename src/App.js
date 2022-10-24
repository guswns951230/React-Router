import "./App.css";
// 3.
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Test from "./pages/Test";
import KoreanPage from "./pages/KoreanPage";
import NotFound from "./pages/NotFound";
import Number from "./pages/Number";
import { useState } from "react";
import NumberId from "./pages/NumberId";
import BoardId from "./pages/BoardId";
import Board from "./pages/Board";

function App() {
  const [list, setList] = useState([1, 2, 3, 4, 5]);
  return (
    <div className="App">
      <h1>
        React Router를 사용하게 된 것을 환영합니다.
        <div>
          {/* a태그는 새로고침 되어 데이터가 리셋된다 */}
          <a href="/about"> about-a-tag </a> |
          {/* Link를 통해 component간 이동을 할 수 있다 */}
          <Link to="/"> home </Link> |<Link to="about"> about </Link> |
          <Link to="test"> test </Link> |
          <br />
          <Link to="/number/1"> 1 </Link> |<Link to="/number/2"> 2 </Link> |
          <br />
          {list.map((item) => (
            <Link to={"/number/" + item}>{item}</Link>
          ))}
        </div>
        {/*
          주소마다 하나의 화면을 가지게 된다
          Route에 보여질 화면을 Routes로 묶어준다
        */}
        <Routes>
          {/* path를 통해 주소를 연결, element를 통해 component 연결 */}
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />} />
          {/*
            Route를 통해 'test입니다'를 출력하는 페이지를 만들고
            Link를 통해 들어갈 수 있도록 작성
          */}
          <Route path="test" element={<Test />}>
            <Route path="ko" element={<KoreanPage />} />
          </Route>
          <Route path="test/ko" element={<KoreanPage />} />
          <Route path="test/es" element={<KoreanPage />} />
          <Route path="test/fr" element={<KoreanPage />} />
          {/*
            *을 통해 지정한 주소 이외의 모든 접근을 확인 할 수 있다 
            존재하는 페이지가 없다고 알려주는데 사용
          */}
          <Route path="*" element={<NotFound />} />

          {/* :id는 변수 이름 id를 갖는 값을 주소를 통해 전달 */}
          {/* id 위치에 값을 적어주면 그 값이 :id값과 같은 형태로 params에 전달 */}
          <Route path="number" element={<Number />}>
            {/*
              Outlet을 통해 NumberId 출력 
              중첩 : 페이지안에 또 다른 페이지가 있다            
            */}
            <Route path=":id" element={<NumberId />} />

            {/* 
              Board page를 만들어 BoardId page의 params값을 출력
              Board에는  board/1 과 같이 1~10까지 접근할 수 있는 Link가 있음
              BoardId에 params를 가져와 출력
            */}
          </Route>
          <Route path="board" element={<Board />}>
            <Route path=":id" element={<BoardId />} />
          </Route>
        </Routes>
      </h1>
    </div>
  );
}

export default App;
