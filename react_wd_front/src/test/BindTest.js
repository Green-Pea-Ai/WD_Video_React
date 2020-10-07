import React from 'react'

class BindTest extends React.Component {
  handleClick() {
    console.log(this)
  }
  render() {
    return (
      <button type="button" onClick={ this.handleClick.bind(this) }>
        Goodbye bind
      </button>
    )
  }
}
export default BindTest