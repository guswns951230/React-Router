import "./App.css";
// 3.
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Test from "./pages/Test";

function App() {
  return (
    <div className="App">
      <h1>
        React Router를 사용하게 된 것을 환영합니다.
        <div>
          {/* Link를 통해 component간 이동을 할 수 있다 */}
          <Link to="/"> home </Link> |<Link to="about"> about </Link> |
          <Link to="test"> test </Link> |
          {/* a태그는 새로고침 되어 데이터가 리셋된다 */}
          <a href="/about"> about-a-tag </a>
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
          <Route path="test" element={<Test />} />
        </Routes>
      </h1>
    </div>
  );
}

export default App;
