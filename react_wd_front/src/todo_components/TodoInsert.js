// callback은 이벤트 핸들러다.
// C에서는 인터럽트 핸들러와 비슷함.
import React, { useState, useCallback } from "react";
import { MdAdd } from 'react-icons/md'
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('')
    const onChange = useCallback( e => {
        setValue(e.target.value)
    }, [])

    const onSubmit = useCallback(e => {
        onInsert(value)
        setValue('')

        // submit Event는 Refresh(F5)를 발생시키므로
        // (로컬이라 데이터 증발 우려가 있다)
        // update 방지를 위해 사용한다!
        // Vue에서는 글로벌 state라 이런 처리를 할 필요가 없었음
        e.preventDefault();
    }, [onInsert, value])

    return(
        <form className="TodoInsert" onSubmit={ onSubmit }>
            <input placeholder="할 일을 입력하세요 ~" value ={ value } onChange={ onChange }/>
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert