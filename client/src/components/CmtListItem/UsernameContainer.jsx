import React from 'react';
import { Lta } from './CmtListItemStyle.js';

class UsernameContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let props = this.props;

    return (
      <span>
        <Lta
          href={props.cmt.userData.profileURL}
          target="_blank"
        >
          {props.cmt.userData.displayName}
        </Lta>

      </span>
    );
  }
}

export default UsernameContainer;
