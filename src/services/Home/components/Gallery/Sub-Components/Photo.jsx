import React from 'react';

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: '',
      isLoading: false,
    };
  }
  render() {
    return (
      <div className="single-photo" onClick={this.props.callback}>
        <img src={this.props.link} alt="photo" className="homepage-single-photo" />
        <div className="photo-title">{this.props.title}</div>
      </div>
    );
  }
}

export default Photo;
