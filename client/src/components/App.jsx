import React from 'react';
import CmtList from './CmtList.jsx';
import styled from 'styled-components';

const axios = require('axios');

const AppContainer = styled.div`
  padding: 4% 4% 10px 3%;
  font: 12px/1.4 'Lucida Grande';
  color: #333;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      totalComments: null,
      lazyi: 12
    };

    this.getComments = this.getComments.bind(this);
    this.calcTotalComments = this.calcTotalComments.bind(this);
    this.updateLazyLoad = this.updateLazyLoad.bind(this);
  }

  componentDidMount() {
    this.getComments();
  }

  getComments() {
    axios.get('/api/comments')
      .then((res) => {
        this.setState({
          comments: res.data[0].comments
        });
        this.calcTotalComments(res.data);
      });
  }

  calcTotalComments(res) {
    this.setState({
      totalComments: res[0].comments.length
    });
  }

  updateLazyLoad() {
    this.setState({
      lazyi: this.state.lazyi += 12
    });
  }

  render() {
    // FUV
    let state = this.state;
    let lazyLoad = state.comments.slice(0, state.lazyi);
    console.log('length of the lazy load comments array: ', lazyLoad.length);

    return (
      <AppContainer>

        <CmtList
          comments={lazyLoad}
          totalComments={state.totalComments}
          updateLazyLoad={this.updateLazyLoad}
          id="CmtList"
        />

      </AppContainer>
    );
  }
}

export default App;