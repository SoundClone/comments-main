import React from 'react';
import styled from 'styled-components';

const ReplyWrapper = styled.div`
  padding: 5px;
  background: #f2f2f2;
  border: 1px solid #e5e5e5;
`;

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

class Reply extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false
    };
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