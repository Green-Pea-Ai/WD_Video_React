import React from "react";
import cn from 'classnames'
import './TodoListItem.scss';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md'

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo

    // 12라인이나 14라인이나 같은 코드다.
    return(
        <div className="TodoListItem">
            <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className="text">{ text }</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};

export default TodoListItem