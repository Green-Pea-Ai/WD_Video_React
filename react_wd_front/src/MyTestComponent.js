import React, { Component } from 'react';

class MyTestComponent extends Component {
    render() {
        return(
            <div>
                [MyTestComponent] Awesome Golang Based { this.props.name }
            </div>
        )
    }
}
/* Vue에서처럼 기능과 화면을 분리해서 써야 코드 관리가 편하다 */
export default MyTestComponent