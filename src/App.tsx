import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loading-screen";
import { auth } from "./firebase";

const router = createBrowserRouter([
  {
    // outlet이 중복된 url을 처리해줌.
    // 여기에 /user라고 되어있으면 /user가 자동으로 중첩되고 /user/profile이 됨.
    // 주소에 따라 layout과 home, profile이 같이 나옴.
    path: "/",
    element: <Layout />, // 이 안에 outlet이 있음.
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile", // "/"는 필요없음
        element: <Profile />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/create-account", element: <CreateAccount /> },
]);

// ${reset}브라우저의 기본 css를 리셋하겠다
const GlobalStyles = createGlobalStyle`${reset} 
// 모든 box 사이즈를 border box로 해라 
*{
  box-sizing: border-box;
 
}
body{
  background-color: black;
  color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

function App() {
  // firebase가 로그인 인증완료 전까지 로딩을 보여주기 위한 state
  const [isLoading, setIsLoading] = useState(true);
  // 비동기함수를 사용할 것이기 때문에 async와 await를 사용
  const init = async () => {
    // 최초 인증 상태가 완료될 때 실행되는 promise객체를 리턴
    // firebase가 쿠키, 토큰을 읽고 백엔드와 소통 후 로그인 여부 확인될 때까지 대기
    //await auth.authStateReady;
    setIsLoading(false);
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <Wrapper>
      <GlobalStyles />
      {/* 로딩 안되면 로딩화면 되면 라우터 보여줌 */}
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </Wrapper>
  );
}

export default App;
