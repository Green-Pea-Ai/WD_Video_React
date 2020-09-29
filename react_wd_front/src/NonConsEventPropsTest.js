import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NonConsEventPropsTest extends Component {
    static defaultProps = {
        name: 'Default Name'
    }
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }
    state = {
        number: 0
    }
    render() {
        return(
            <div>
                <p>ConstructorPropsTest name: { this.props.name }</p>
                <p>ConstructorPropsTest age: { this.props.age }</p>
                <p>ConstructorPropsTest Number: { this.state.number }</p>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>Plus Button</button>
            </div>
        )
    }
}
/*
    constructor(props)를 매번 쓰기 불편해서 state만 써도 되게 개선되었다
    추상화: 책을 읽는다
    추상화 X: c언어 전공서적을 읽는다(세부사항을 다 알아야 한다)
    리액트는 추상화와는 거리가 멀다. 무엇을 하는지 명확하게 알 수 있다.
    사이즈가 커지면 Vue가 유리하다.
    리액트 할 때는 추상화를 어떻게 시키느냐가 중요하다.(신입에겐 어려움)
*/
export default NonConsEventPropsTest