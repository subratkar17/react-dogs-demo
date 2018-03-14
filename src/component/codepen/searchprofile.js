import React, { Component } from 'react';
import ReactDOM from 'react-dom';

 class SearchProfile extends React.Component {
    render() {
      return (
        <div className="search--box">
           <form onSubmit={this.handleForm.bind(this)}>
             <label><input type="search" ref="username" placeholder="rand text"/></label>
           </form>
        </div>
      )
    }
    
    handleForm(e) {
     e.preventDefault();
      let username = "mojombo";
      this.props.fetchProfile(username);
      //this.refs.username.getDOMNode().value = '';
    }
}

export default SearchProfile;

