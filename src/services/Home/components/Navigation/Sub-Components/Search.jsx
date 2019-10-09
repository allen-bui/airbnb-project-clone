import React from 'react';

const magnifyingGlass =
  'm 2.5 7 c 0 -2.5 2 -4.5 4.5 -4.5 s 4.5 2 4.5 4.5 s -2 4.5 -4.5 4.5 s -4.5 -2 -4.5 -4.5 m 13.1 6.9 l -2.8 -2.9 c 0.7 -1.1 1.2 -2.5 1.2 -4 c 0 -3.9 -3.1 -7 -7 -7 s -7 3.1 -7 7 s 3.1 7 7 7 c 1.5 0 2.9 -0.5 4 -1.2 l 2.9 2.8 c 0.2 0.3 0.5 0.4 0.9 0.4 c 0.3 0 0.6 -0.1 0.8 -0.4 c 0.5 -0.5 0.5 -1.2 0 -1.7';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      extend: false,
    }
    this.onClick = this.onClick.bind(this);
    this.onUserExitClick = this.onUserExitClick.bind(this);
  }

  onClick() {
    this.setState({
      extend: !this.state.extend,
    })
  }

  onUserExitClick() {
    this.setState({
      extend: false,
    })
  }

  render() {

    let style;

    if (this.state.extend) {
      style = {
        width: '650px',
        transition: 'width 0.5s'
      };
    } else {
      style = {
        width: '450px',
        transition: 'width 0.5s'
      }
    }

    return (
      <div className="search-box" style={style} onBlur={this.onUserExitClick}>
        {/* Magnifying Glass */}
        <svg viewBox="0 0 16 16" role="presentation" className="magnifying-glass">
          <path d={magnifyingGlass} />
        </svg>

        {/* Search Bar */}
        <input className="search-bar" type="text" placeholder="Search" onClick={this.onClick}/>
      </div>
    );
  }
}

export default Search;
