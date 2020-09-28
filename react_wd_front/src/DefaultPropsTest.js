import React, { Component } from 'react';

class DefaultPropsTest extends Component {
    static defaultProps = {
        name: 'Default Name'
    }
    render() {
        return(
            <div>
                [DefaultPropsTest] Awesome Golang Based { this.props.name }
            </div>
        )
    }
}
/* Vue에서처럼 기능과 화면을 분리해서 써야 코드 관리가 편하다 */
export default DefaultPropsTest