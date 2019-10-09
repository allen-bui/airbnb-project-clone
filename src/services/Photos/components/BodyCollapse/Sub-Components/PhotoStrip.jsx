import React from 'react';

class PhotoStrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  render() {
    return (
      <div className="photo-container">
        <div className="photo-strip">
          {this.props.photos.map((element, index) => {
            if (element === undefined) {
              return (
                <div className="single-strip-photo" key={index}>
                  <img src="" alt="Loading"/>
                </div>
              );
            } else {
              return (
                <div className="single-strip-photo" key={index} >
                  <img src={element.link} alt="Loaded" className="single-collapse-photo" onClick={() => this.props.callback(this.props.title)}/>
                </div>
              );
            }
          })}
        </div>
        <div className="photo-strip-title">{this.props.title}</div>
      </div>
    );
  }
}

export default PhotoStrip;
