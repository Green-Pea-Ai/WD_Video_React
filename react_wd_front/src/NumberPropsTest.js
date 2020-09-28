import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NumberPropsTest extends Component {
    static defaultProps = {
        name: 'Default Name'
    }
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }
    render() {
        return(
            <div>
                <p>NumberPropsTest name: { this.props.name }</p>
                <p>NumberPropsTest age: { this.props.age }</p>
            </div>
        )
    }
}
/* prop이 string인데 숫자를 넣었지만
화면은 나온다. 나중에 큰 문제가 될 수 있다 */
/* isRequired, DB의 not null 같은 존재 */
export default NumberPropsTest