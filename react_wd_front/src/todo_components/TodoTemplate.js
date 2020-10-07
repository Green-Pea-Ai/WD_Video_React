import React from "react";
import './TodoTemplate.scss';

// child -> children으로 바뀜
// child로 바꾸면 todo 리스트 안나옴
// 리액트는 업데이트 할 때 내부 변수들을 바꿔버린다.

// state를 local로 쓰는 것도 단점
// 하위 호환을 버린다, ARM 프로세서가 그런느낌이다(휴대폰)
// 버전 변경하면 문제가 팡팡 터진다, 버전을 유지를 권장.
const TodoTemplate = ({ children }) => {

    return(
        <div className="TodoTemplate">
            <div className="app-title">Schedule Management</div>
            <div className="content">{ children }</div>
        </div>
    );
};

export default TodoTemplate