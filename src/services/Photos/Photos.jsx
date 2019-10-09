import React from 'react';

// components
import Header from './components/Header/Header.jsx';
import BodyCollapse from './components/BodyCollapse/BodyCollapse.jsx';
import BodyExpand from './components/BodyExpand/BodyExpand.jsx';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: this.props.isCollapsed,
      buttonText: 'View all rooms',
      yAxis: this.props.yAxis,
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, this.state.yAxis);
  }

  componentDidUpdate() {
    window.scrollTo(0, this.state.yAxis);
  }

  onClick(room) {

    switch (room) {
      case 'Living room':
        this.setState({
          isCollapsed: !this.state.isCollapsed,
          buttonText: this.state.isCollapsed
            ? 'View all rooms'
            : 'Tour this home',
          yAxis: this.state.isCollapsed
            ? 50
            : 0,
        });
        break;
      case 'Kitchen':
        this.setState({
          isCollapsed: !this.state.isCollapsed,
          buttonText: this.state.isCollapsed
            ? 'View all rooms'
            : 'Tour this home',
          yAxis: this.state.isCollapsed
            ? 1775
            : 1775,
        });
        break;
      case 'Bedroom':
        this.setState({
          isCollapsed: !this.state.isCollapsed,
          buttonText: this.state.isCollapsed
            ? 'View all rooms'
            : 'Tour this home',
          yAxis: this.state.isCollapsed
            ? 3500
            : 0,
        });
        break;
      case 'Bathroom':
        this.setState({
          isCollapsed: !this.state.isCollapsed,
          buttonText: this.state.isCollapsed
            ? 'View all rooms'
            : 'Tour this home',
          yAxis: this.state.isCollapsed
            ? 4825
            : 0,
        });
        break;
      case 'Interior':
        this.setState({
          isCollapsed: !this.state.isCollapsed,
          buttonText: this.state.isCollapsed
            ? 'View all rooms'
            : 'Tour this home',
          yAxis: this.state.isCollapsed
            ? 5900
            : 0,
        });
        break;
      case 'Other':
        this.setState({
          isCollapsed: !this.state.isCollapsed,
          buttonText: this.state.isCollapsed
            ? 'View all rooms'
            : 'Tour this home',
          yAxis: this.state.isCollapsed
            ? 7225
            : 0,
        });
        break;
      case 'Backyard':
        this.setState({
          isCollapsed: !this.state.isCollapsed,
          buttonText: this.state.isCollapsed
            ? 'View all rooms'
            : 'Tour this home',
          yAxis: this.state.isCollapsed
            ? 8300
            : 0,
        });
        break;
      case 'Pets':
        this.setState({
          isCollapsed: !this.state.isCollapsed,
          buttonText: this.state.isCollapsed
            ? 'View all rooms'
            : 'Tour this home',
          yAxis: this.state.isCollapsed
            ? 9375
            : 0,
        });
        break;
      default:
        this.setState({
          isCollapsed: !this.state.isCollapsed,
          buttonText: this.state.isCollapsed
            ? 'View all rooms'
            : 'Tour this home',
          yAxis: 0,
        });
    }
  }

  render() {
    return (
      <div>
        <Header
          backCallback={this.props.callback}
          buttonCallback={this.onClick}
          buttonText={this.state.buttonText}
        />
        {this.state.isCollapsed ? (
          <BodyCollapse photos={this.props.photos} callback={this.onClick} />
        ) : (
          <BodyExpand photos={this.props.photos} />
        )}
      </div>
    );
  }
}

Photos.defaultProps = {
  isCollapsed: true,
};

export default Photos;
