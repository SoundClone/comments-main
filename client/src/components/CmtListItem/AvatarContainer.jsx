import React from 'react';
import styled from 'styled-components';

// Icon div wrapper
const AvatarDiv = styled.div`
  padding-top: 2px;
  align-self: flex-start;
  flex: 0 0 45px;
`;

// Circular icon
const Icon = styled.img`
  border-radius: 50%;
  width: 35px;
  height: 35px;
`;

// Renders the avatar circle
class AvatarContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AvatarDiv className="valign-wrapper">
        <Icon
          className="responsive-img circle"
          src={this.props.cmt.userData.profilePicture}
        />
      </AvatarDiv>
    );
  }
}

export default AvatarContainer;