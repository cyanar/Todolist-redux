import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "./actions.js";

import TodoHD from "./TodoHD.js";
import TodoBD from "./TodoBD.js";

class App extends React.Component{
    constructor({todos}){
         super();
    }

    componentDidMount(){
       this.props.init();
    }
    render(){
         return <div>
           <TodoHD></TodoHD>
           <TodoBD></TodoBD>
         </div>
    }
}

export default connect(
   ({todos})=>{
      return {
         todos
      }
   },
  (dispatch) => {
    return bindActionCreators(actions , dispatch);
  }
)(App)
