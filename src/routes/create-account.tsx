import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ErrorMessage } from "@hookform/error-message";

interface InputTypes {
  name?: string;
  email?: string;
  password?: number;
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
`;

const Title = styled.h1`
  font-size: 42px;
`;
const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  text-align: center;
  font-size: 16px;
  &[type="submit"] {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const Span = styled.span`
  text-align: center;
`;

const Error = styled.span`
  font-weight: 600;
  color: tomato;
`;

export default function CreateAccount() {
  // 계정 생성을 시작하면 true로 바뀜
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // submit 이벤트가 일어나면 handleSubmit이 이 함수를 호출함.
  const onSubmit = (data: InputTypes) => {
    const name = data.name;
    console.log(name);
    try {
      // 계정 만들기
      // 유저 프로필에 이름 가져오기
      // 홈페이지로 리다이렉션 하기
    } catch (error) {
      // setError
    } finally {
      setIsLoading(false);
    }
  };

  const {
    register, // 각 name, email 등을 가지고 반환하는 객체
    handleSubmit, // submit을 핸들링해줌.
    // isSubmitting : 제출 될 때까지 제출 버튼 막음
    // errors : register의 두번째 인자로 에러 조건을 주고 메시지를 출력할 수 잇음.
    formState: { isSubmitting, errors },
  } = useForm<InputTypes>(); // 제네릭으로 type을 준 것.

  return (
    <Wrapper>
      <Title>회원 가입 페이징~</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="name"
          placeholder="name"
          type="text"
          {...register("name", {
            required: "이름은 필수 입력 값 입니다.",
            minLength: {
              value: 2,
              message: "이름은 최소 2자 이상으로 입력해주세요",
            },
          })}
        />
        <Span>
          <ErrorMessage errors={errors} name="name" />
        </Span>
        <Input
          id="email"
          placeholder="email"
          type=""
          // register의 두번째 인자는 에러 상태
          {...register("email", {
            required: "이메일은 필수 입력입니다.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })}
        />
        <Span>
          <ErrorMessage errors={errors} name="email" />
        </Span>
        {/* 여기서 부터 해보자 */}
        <Input
          id="password"
          placeholder="password"
          type="password"
          {...register("password", {
            required: "비밀번호 입력은 필수입니다.",
            minLength: {
              value: 3,
              message: "비밀번호는 3자 이상이여야 합니다",
            },
          })}
        />
        <Span>
          <ErrorMessage errors={errors} name="password" />
        </Span>
        {/* // 제출 될 때까지 제출 버튼 막음 */}
        <Input
          type="submit"
          value={isLoading ? "Loading..." : "create Account"}
          disabled={isSubmitting}
        />
      </Form>
      {/* 에러가 발생하면 에러메시지가 뜰 것. */}
      {error !== "" ? <Error>{error}</Error> : null}
    </Wrapper>
  );
}
