var defaultState = {
     "todos":[]
}
export default (state=defaultState,action)=>{
    switch(action.type){
        case "INIT":
         return {
             ...state,
             "todos":action.arr
         }
        case "ADD":
        return {
             ...state,
             "todos":[
               ...state.todos,
               action.data
             ]
        }
        case "CHANGEDONE":
        return {
             ...state,
             "todos":state.todos.map((item)=>{
                 if(item.id==action.id){
                     return {
                        ...item,
                        "done":action.value
                     }
                 }
                 return item;
             })
        }
         case "DEL":
         return {
             ...state,
             "todos":state.todos.filter((item)=>{
                  return item.id!=action.id
             })
         }
      case "CHANGETITLE":
        return {
             ...state,
             "todos":state.todos.map((item)=>{
                 if(item.id==action.id){
                    console.log(action.title);
                     return {
                        ...item,
                        "title":action.title
                     }
                 }
                 return item;
             })
        }
    }
   return state;
}