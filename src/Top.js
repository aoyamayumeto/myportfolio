import React from 'react';
import Content from './Content';
import Header from './Header';

class Top extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Content />
      </React.Fragment>
      
      
    );
  }
}

export default Top