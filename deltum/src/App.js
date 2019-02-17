import React, { Component } from 'react';

import Header from './components/Header';
import Content from './components/Content';
import SideBar from './components/SideBar';
import Container from './components/Container';
import LeftCol from './components/Container/left-col.js';
import RightCol from './components/Container/right-col.js';
import InfoBlock from './components/InfoBlock';
import Event from './components/Event';
import InfoTitle from './components/InfoBlock/title.js';
import Items from './components/Items';
import Trends from './components/Trends';
import PendingTickets from './components/PendingTickets';

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
              <InfoTitle 
                title={'Inventory overview'}
                subscr={'Get a bird’s eye view of your inventory’s activities. Learn more'}
              />
              <InfoBlock>
                <Items />
              </InfoBlock>
            </LeftCol>
            <RightCol>
              <InfoBlock>
                <Trends />
              </InfoBlock>
              <InfoBlock>
                <PendingTickets />
              </InfoBlock>
            </RightCol>
          </Container>
        </Content>
      </div>
    );
  }
}

export default App;
