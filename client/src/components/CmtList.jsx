// Setup
import React from 'react';
import styled from 'styled-components';
const debounce = require('lodash.debounce');

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

const LoadingGIF = styled.img`
  padding-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 30px;
  width: 30px;
  visibility: hidden;
`;

// Renders the comments list
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

  // Returns true if user is at bottom of page
  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  // If the user scrolled to the bottom, fetch another 12 comments from parent state
  handleScroll() {
    let element = document.getElementById('scroll-mark');
    if (this.isBottom(element)) {
      document.getElementById('loadgif').style.visibility = 'visible';
      let upd = debounce(this.props.updateLazyLoad, 500);
      upd();
    }
  }

  render () {
    return (
      <div id="scroll-mark">
        <TotalCmts>
          <span><Cmti className="material-icons md-48" id="cmt-i" >chat_bubble</Cmti> {this.props.totalComments} comments</span>
        </TotalCmts>

        <CommentDiv>
          {this.props.comments.map((el, idx) => {
            return <CmtListItem cmt={el} key={idx} />;
          })}
        </CommentDiv>

        <LoadingGIF id="loadgif" src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif"></LoadingGIF>

      </div>
    );
  }
}

export default CmtList;