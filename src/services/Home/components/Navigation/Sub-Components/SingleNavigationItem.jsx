import React from 'react';

class SingleMenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseEnter: false,
    }
    this.onMouseEnter = this.onMouseEnter.bind(this);
  }

  onMouseEnter() {
    this.setState({
      mouseEnter: !this.state.mouseEnter,
    })
  }

  render() {
    const underline = { borderBottom: this.state.mouseEnter ? '2px solid #767676' : null };
    return (
      <div className="navigation" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseEnter} style={underline}>
        { this.props.element }
      </div>
    )
  }
}

export default SingleMenuItem;