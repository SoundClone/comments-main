// Setup
import React from 'react';
import styled from 'styled-components';

import CmtListItem from './CmtListItem/CmtListItem.jsx';
import { CommentDiv } from './CmtListItem/CmtListItemStyle.js';
import { connection } from 'mongoose';

const TotalCmts = styled.div`
  color: #999;
  margin-bottom: 10px;
  border-bottom: 1px solid #d1d1d1;
`;

const Cmti = styled.i`
  padding-left: 4px;
  font-size: 16px;
`;

class CmtList extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
    this.isBottom = this.isBottom.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  handleScroll() {
    let element = document.getElementById('scroll-mark');
    if (this.isBottom(element)) {
      console.log(this.props);
      // document.removeEventListener('scroll', this.handleScroll);
    }
  }

  calculateUserPosition() {
    // TODO: calculate where the user is on the page
  }

  render () {
    // FUV
    let props = this.props;

    return (
      <div id="scroll-mark">
        <TotalCmts>
          <span><Cmti className="material-icons md-48" id="cmt-i" >chat_bubble</Cmti> {props.totalComments} comments</span>
        </TotalCmts>

        <CommentDiv>
          {props.comments.map((el, idx) => {
            return <CmtListItem cmt={el} key={idx} />;
          })}
        </CommentDiv>
      </div>
    );
  }
}

/*
    let element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      // do something at end of scroll
      console.log('HELLO WORLD');
    }

*/

export default CmtList;