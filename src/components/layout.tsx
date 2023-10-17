import { Outlet } from "react-router-dom";

// 전체적이 레이아웃을 잡아주는 컴포넌트
// Outlet은 자바로 따지면 requestMapping 같은 역할 중복 된 url을 처리해줌.
// 단 outlet 태그를 가진 컴포넌트와 자식 컴포넌트가 같이 나옴.
// App.tsx에서 확인하면 나옴.
export default function Layout() {
  return (
    <>
      <h2>레이아웃</h2>
      <Outlet />
    </>
  );
}
