import React, { Component } from 'react';
import './bgcolor.css'

class RefBGTest extends Component {
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
            validated: this.state.pw == 'wdd'
        })
        this.input.focus()
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
                // 20라인 코드를 사용할 수 있게 연결해주는 코드
                <input ref={ (ref) => this.input = ref }
                    type="password" value={ this.state.pw }
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

export default RefBGTest