import React, { Component } from 'react';

import Header from './components/Header';
import Content from './components/Content';
import SideBar from './components/SideBar';
import Container from './components/Container';
import LeftCol from './components/Container/left-col.js';
import RightCol from './components/Container/right-col.js';
import InfoBlock from './components/InfoBlock';
import Event from './components/InfoBlock/ivent';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Content>
          <SideBar />
          <Container>
            <LeftCol>
              <InfoBlock>
                <Event />
              </InfoBlock>
            </LeftCol>
            <RightCol>
              <InfoBlock></InfoBlock>
            </RightCol>
          </Container>
        </Content>
      </div>
    );
  }
}

export default App;
