import React, { useState, useRef, useCallback } from 'react';

import TodoTemplate from './todo_components/TodoTemplate'
import TodoInsert from './todo_components/TodoInsert'
import TodoList from './todo_components/TodoList'

import CounterContainer from './asynchronous/CounterContainer'

// It's for Todo App
// 최신 업데이트로 state를 쓰려면 class가 아닌 function 내에서만
// 써야하는 규칙이 생겨서 코드 변경함
// 리액트는 버전이 올라가면 함수명이나 작동방식이 바뀌는 경우가 발생할 수 있다고 함
const App = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'ReactJS',
            checked: true
        },
        {
            id: 2,
            text: 'Git',
            checked: false
        },
        {
            id: 3,
            text: 'Golang',
            checked: false
        }
    ])

    const nextId = useRef(4)

    // 핸들러(콜백), 인터럽트는 실행시점을 OS가 결정한다.
    const onInsert = useCallback(
        text => {
            const todo = {
                id: nextId.current,
                text,
                checked: false
            }

            setTodos(todos.concat(todo))
            nextId.current += 1
        }, [todos]
    )

    const onRemove = useCallback(
        id => {
            setTodos(todos.filter(todo => todo.id !== id))
        }, [todos]
    )

    const onToggle = useCallback(
        id => {
            setTodos(
                todos.map(todo =>
                    todo.id === id ? { ...todo, checked: !todo.checked } : todo
                )
            );
        }, [todos]
    )

    return (
        <div>
            <div>TodoApp</div>
            <div>
                <TodoTemplate>
                    <TodoInsert onInsert={ onInsert }/>
                    <TodoList todos={ todos } onRemove={ onRemove } onToggle={ onToggle }/>
                </TodoTemplate>
                <CounterContainer/>
            </div>
        </div>
    );
}
/* line 20: condition이 거짓이면 && 뒤에 가즈아가 안나온다 */
/* vue가 300라인이라면 react는 500라인 정도는 쳐야 구현이 됨 */
/* split js가 새로 나왔다?, split이 아니고 스벨트 */
/* 프론트는 변화가 빠르다 */
/* 리액트에서도 컴포넌트 만드는게 중요함 */

export default App;
