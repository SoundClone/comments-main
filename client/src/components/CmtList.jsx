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
    // If the user scrolled to the bottom, fetch another 12 comments from parent state
    let element = document.getElementById('scroll-mark');
    if (this.isBottom(element)) {
      document.getElementById('loadgif').style.visibility = 'visible';
      let upd = debounce(this.props.updateLazyLoad, 500);
      upd();
    }
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

        <LoadingGIF id="loadgif" src="https://lh3.googleusercontent.com/proxy/htiSQTgwPcK0b4tnuoKFNJNcGmGN9kORK0WNMBwaJ6iktA4lnAUFMUn7wzGKd-HFer8x-4oc_V1ramR4KJ_8lnMupRzdvjLOIvzG_DjaZ4IJuNh3RMlLzNdcuPal5GZk"></LoadingGIF>

      </div>
    );
  }
}

export default CmtList;