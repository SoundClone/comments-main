// Setup
import React from 'react';
import styled from 'styled-components';

import CmtListItem from './CmtListItem/CmtListItem.jsx';
import { CommentDiv } from './CmtListItem/CmtListItemStyle.js';

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
  }

  render () {
    // FUV
    let props = this.props;

    return (
      <div>
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

export default CmtList;