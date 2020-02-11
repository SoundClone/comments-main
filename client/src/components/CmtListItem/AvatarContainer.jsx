import React from 'react';
import styled from 'styled-components';

const AvatarDiv = styled.div`
  padding-top: 2px;
  align-self: flex-start;
  flex: 0 0 45px;
`;

const Icon = styled.img`
  border-radius: 50%;
  width: 35px;
  height: 35px;
`;

class AvatarContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let props = this.props;

    return (
      <AvatarDiv className="valign-wrapper">
        <Icon
          className="responsive-img circle"
          src={props.cmt.userData.profilePicture}
        />
      </AvatarDiv>
    );
  }
}

export default AvatarContainer;