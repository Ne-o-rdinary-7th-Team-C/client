"use client";
import { useState } from "react";

export default function First() {
  return (
    <div className={"h-screen py-[40px] px-[16px]"}>
      <div className={"text-center font-bold text-[28px] leading-[38px]"}>
        <div>나만의 어드벤트</div>
        <div>캘린더 만들기</div>
      </div>
      <div className={"bg-gray-500 h-[153px] w-[153px] mx-[48px]"}></div>
      <div
        className={
          "h-[48px]  text-white font-bold text-[16px] leading-[22px] rounded-small bg-primaryColor2 text-center"
        }
      >
        캘린더 생성하기
      </div>
      <div className={"my-[8px] flex flex-wrap gap-x-1 justify-center"}>
        <span className={"text-gray-400"}>이미 계정이 있나요?</span>
        <span className={"text-primaryColor1"}>로그인</span>
      </div>
    </div>
  );
}

interface TodoItem {
  id: string;
  content: string;
  isDone: boolean;
}

const Hi = () => {
  const [state, setState] = useState<TodoItem[]>([]);
  return (
    <div>
      {state.map((item) => (
        <Todo key={item.id} todo={item} />
      ))}
    </div>
  );
};

const Todo = (props: { todo: TodoItem }) => {
  return <div>{props.todo.id}</div>;
};
