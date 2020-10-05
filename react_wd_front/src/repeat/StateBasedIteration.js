import React, { Component } from "react";

class StateBasedIteration extends Component {
    // state로 관리하는게 좋다.
    state = {
        names: ["snow", "water", "fire", "thunder", "wind"]
    }
    render() {
        const nameList = this.state.names.map(
            (name, index) => (<li key={ index }>{ name }</li>)
        )
        return(
            <ul>
                { nameList }
            </ul>
        )
    }
}

export default StateBasedIteration