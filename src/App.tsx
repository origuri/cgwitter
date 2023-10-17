import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

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

const GlobalStyles = createGlobalStyle`${reset};
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

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
