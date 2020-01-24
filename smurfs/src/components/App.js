import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import {fetchActivity} from './actions'
import SmurfList from './SmurfList'




const App  = props =>{

    return (  
      <div className="App">

        <SmurfList/>
      </div>
    );
  }
  


const mapStateToProps = state =>{
  console.log(state)
  return{
    smurf:state.smurf
  }
}

export default connect(mapStateToProps,{fetchActivity}) (App);
