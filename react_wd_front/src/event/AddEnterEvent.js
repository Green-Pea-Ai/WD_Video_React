import React, { Component } from 'react';

class AddEnterEvent extends Component {
    state = {
        id: '',
        pw: ''
    }
    // Method 자체로 Binding을 시킬때는 아래처럼 화살표 함수를 써준다.
    // self binding
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = (e) => {
        alert(this.state.id + ': ' + this.state.pw)
        this.setState({
            id: '',
            pw: ''
        })
    }
    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick()
        }
    }
    render() {
        return(
            <div>
                <h1>Add Enter Event</h1>
                <input type="text" name="id" placeholder="Input ID"
                    value={ this.state.id }
                    onChange={
                        this.handleChange
                    }
                />
                <input type="text" name="pw" placeholder="Input Password"
                    value={ this.state.pw }
                    onChange={ this.handleChange }
                    onKeyPress={ this.handleKeyPress }
                />
                <button onClick={
                    this.handleClick
                }>Click Test</button>
            </div>
        )
    }
}

export default AddEnterEvent