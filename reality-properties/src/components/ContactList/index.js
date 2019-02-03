import React, { Component } from 'react';

import ContactBlock from '../ContactBlock';
import InfoBlock from '../InfoBlock';

import './style.css';

class ContactList extends Component {
  render() {
    return (
      <section className="section">
        <div className="contact-wrapper">
          <InfoBlock />
          <ContactBlock />
        </div>
      </section>
    );
  }
}

export default ContactList;
