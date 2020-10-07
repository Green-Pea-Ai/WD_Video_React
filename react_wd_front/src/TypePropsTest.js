import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TypePropsTest extends Component {
    static defaultProps = {
        name: 'Default Name'
    }
    static propTypes = {
        // 타입을 달리했을 때 오류가 나는 케이스 참고용
        name: PropTypes.string
    }
    render() {
        return(
            <div>
                TypePropsTest { this.props.name }
            </div>
        )
    }
}
/*  prop이 string인데 App.js에서 {3}이라는 숫자를 넣었지만 화면은 나온다.
    "3"이라고 입력하면 오류가 없어지긴 한다.
    나중에 큰 문제를 일으킬 수 있는 리액트의 단점 중 하나다.
    웹 페이지에서 개발자 콘솔을 띄워야 오류를 확인할 수 있다. */
export default TypePropsTest