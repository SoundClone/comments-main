import React from 'react';
import UsernameContainer from './UsernameContainer.jsx';
import AvatarContainer from './AvatarContainer.jsx';
import Reply from './Reply.jsx';

const moment = require('moment');

import { CommentDiv, TopBarDiv, Lta, Xlt, FlexContainer, Lts, CommentBody, ReplyBtn, ReplyIcon, Ts } from './CmtListItemStyle.js';

// Render the individual comment entries
class CmtListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // If true, render the <ReplyBtn /> tag
      isHovered: false,
      // If true, render the <Reply> component
      isReply: false
    };

    this.friendlyTimestamp = this.friendlyTimestamp.bind(this);
    this.friendlyDate = this.friendlyDate.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.onReplyClick = this.onReplyClick.bind(this);
  }

  // Human friendly timestamp
  friendlyTimestamp (timestamp) {
    let min = 0;
    let sec = 0;

    while (timestamp > 60) {
      min += 1;
      timestamp = timestamp - 60;
    }
    timestamp < 10 ? sec = '0' + timestamp.toString() : sec = timestamp;

    return `${min}:${sec}`;
  }

  // Human friendly date
  friendlyDate(date) {
    return moment(date).fromNow();
  }

  onReplyClick() {
    this.setState({
      isReply: !this.state.isReply
    });
  }

  handleHover() {
    this.setState({
      isHovered: !this.state.isHovered
    });
  }

  render() {
    // FUV (Frequently Used Variables)
    let props = this.props;
    let cmt = this.props.cmt;

    return (
      <FlexContainer>
        <AvatarContainer cmt={cmt}/><span></span>

        <CommentDiv onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>

          <TopBarDiv>
            <UsernameContainer cmt={cmt} />
            <Xlt> at </Xlt>
            <Lta>{this.friendlyTimestamp(cmt.timeData.timestamp)}</Lta>
            <Xlt>:</Xlt>
            <Lts>{this.friendlyDate(cmt.timeData.postDate)}</Lts>

            {/* Conditional render for reply button hover */}
            {
              this.state.isHovered
                ?
                <ReplyBtn onClick={this.onReplyClick}>
                  <ReplyIcon className="material-icons md-48">reply</ReplyIcon>
                  <Ts>Reply</Ts>
                </ReplyBtn>
                :
                <div></div>
            }

          </TopBarDiv>

          <CommentBody>{cmt.commentBody}</CommentBody>

          {/* Conditional render for reply box */}
          {
            this.state.isReply
              ?
              <Reply />
              :
              <div></div>
          }

        </CommentDiv>
      </FlexContainer>
    );
  }
}

export default CmtListItem;