import React from "react";
import {connect} from "react-redux";
import * as actions from "./actions.js";
import TodoItem from "./TodoItem.js";
import {bindActionCreators} from "redux";


 class TodoBD extends React.Component{
    constructor({todos}){
         super();
    }

    render(){
         return(


              <section>
               <h3>未做：</h3>

                 <div>
                    {this.props.todos.map((item,index)=>{
                        if(item.done==0)
                         return <TodoItem key = {index} item = {item} changedone = {this.props.changedone} del = {this.props.del} changetitle = {this.props.changetitle}></TodoItem>
                    })}
                 </div>
                <hr />
                <h3>已做：</h3>
                <div>
                    {this.props.todos.map((item,index)=>{
                        if(item.done==1)
                         return <TodoItem key = {index} item = {item} changedone = {this.props.changedone} del = {this.props.del} changetitle = {this.props.changetitle}></TodoItem>
                    })}
                 </div>
              </section>
            )


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
)(TodoBD)