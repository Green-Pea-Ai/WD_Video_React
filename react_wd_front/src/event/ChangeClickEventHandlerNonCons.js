import React, { Component } from 'react';

class ChangeClickEventHandlerNonCons extends Component {
    state = {
        message:''
    }
    // Method 자체로 Binding을 시킬때는 아래처럼 화살표 함수를 써준다.
    // self binding
    handleChange = (e) => {
        this.setState({
            message: e.target.value
        })
    }
    handleClick = (e) => {
        alert(this.state.message)
        this.setState({
            message:''
        })
    }
    render() {
        return(
            <div>
                <h1>Change Click Event Handler Non Cons</h1>
                <input type="text" name="message" placeholder="Input Anything"
                    value={ this.state.message }
                    onChange={
                        this.handleChange
                    }
                />
                <button onClick={
                    this.handleClick
                }>Click Test</button>
            </div>
        )
    }
}

export default ChangeClickEventHandlerNonCons