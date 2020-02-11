import React from 'react';
import styled from 'styled-components';

// Reply box border
const ReplyWrapper = styled.div`
  padding: 5px;
  background: #f2f2f2;
  border: 1px solid #e5e5e5;
`;

// Text input field
const ReplyField = styled.input`
  width: 96%;
  background: #fff;
  padding: 0 9px;
  font-size: 12px;
  outline: none;
  cursor: pointer;
  border: 1px solid #e5e5e5;
  color: #333;
  font-family: inherit;
`;

// Renders the reply box component
class Reply extends React.Component {
  constructor(props) {
    super(props);
  }

  handleReplyPost() {
    // TODO: dear SDC coder, you may need to fill this out? idk
  }

  render() {
    return (
      <ReplyWrapper>
        <ReplyField placeholder="Write a reply..."></ReplyField>
      </ReplyWrapper>
    );
  }
}

export default Reply;