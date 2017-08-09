import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "./actions.js";


 class TodoHD extends React.Component{
    constructor({todos}){
         super();
    }

    render(){
         return <div>
            TodoList：
            <input type="text" ref = "kuang"/>
            {" "}
            <button onClick = {()=>{this.props.add(this.refs.kuang.value)}}>增加</button>
         </div>
    }
}

export default connect(
    ({todos})=>{
         return {
             todos
         }
    },
    (dispatch)=>{
         return bindActionCreators(actions,dispatch);
    }
)(TodoHD)