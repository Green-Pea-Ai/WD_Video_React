import React, { Component } from 'react';
import './bgcolor.css'

class BGTest extends Component {
    state = {
        pw: '',
        clicked: false,
        validated: false
    }
    handleChange = (e) => {
        this.setState({
            pw: e.target.value
        })
    }
    handleClick = (e) => {
        this.setState({
            clicked: true,
            // ===는 일치 연산자다. ==인 동등 연산자와 달리
            // 더 정확하게 비교할 수 있다(서로 다른 타입인 경우 타입을 강제로 변환하여 비교하지 않는다)
            validated: this.state.pw === 'wdd'
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
                <h1>Validation Background Test</h1>
                <input type="password" value={ this.state.pw }
                    onChange={ this.handleChange }
                    className={ this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button onClick={
                    this.handleClick
                }>Validation</button>
            </div>
        )
    }
}

export default BGTest