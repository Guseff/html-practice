import React, { Component } from 'react';

import Select from 'react-select';

import './style.css';

const placeholder = 'Search for properties or keywords..';

const options = [
  { value: 'rent', label: 'For Rent' },
  { value: 'sale', label: 'For Sale' }
];

const customStyles = {
  control: styles => ({
    ...styles,
    fontSize: "14px",
    color: "#454545",
    backgroundColor: "white",
    width: "130px",
    marginLeft: "20px",
    height: "50px",
    border: "none",
    boxShadow: "none",
  }),
  menu: styles => ({
    ...styles,
    fontSize: "14px",
    color: "#454545",
    backgroundColor: "white",
    width: "130px",
    marginLeft: "20px",
    marginTop: "0px",
    borderRadius: "0px",
  }), 
  indicatorSeparator: () => ({
    backgroundColor: "#FFF",
  }),
};

class HeaderSearch extends Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    return (
      <div className="header-search">
        <Select 
          className="custom-select"
          defaultValue={options[0]}
          onChange={this.handleChange}
          options={options}
          styles={customStyles}
          isSearchable={false}
        />
        <input type="submit" className="custom-submit" value="" />
        <input type="text" value={this.state.value} onChange={this.handleChange} className="custom-input" placeholder={placeholder} />
      </div>
    );
  }
}

export default HeaderSearch;