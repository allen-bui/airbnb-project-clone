import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: '',
    };
  }
  render() {
    if (this.props.homePhoto.length) {
      return (
        <div className='right-splash-inner'>
          <img
            src={this.props.homePhoto[0].link}
            className='splash-home-photo'
          />
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default Image;
