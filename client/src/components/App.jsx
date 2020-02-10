import React from 'react';
import CmtList from './CmtList.jsx';
import styled from 'styled-components';

const AppContainer = styled.div`
  padding: 4% 4% 10px 3%;
  font: 12px/1.4 'Lucida Grande';
  color: #333;
`;

const App = () => {
  return (
    <AppContainer>
      <CmtList id="CmtList"/>
    </AppContainer>
  );
};

export default App;