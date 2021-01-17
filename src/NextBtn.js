import React from 'react';
import './NextBtn.css';

class NextBtn extends React.Component {
  render() {
    return (
      <button 
        value={this.props.value} 
        onClick={this.props.onClick}
        className="next-btn">Next Card</button>
    );
  }
}

export default NextBtn;
