export const init = ()=> async function(dispatch){
     var arr = await fetch("/todos").then((data)=>{
           return data.json();
     })
     console.log(arr);
     dispatch({"type":"INIT",arr});
}
export const add = (title)=> async function(dispatch){
     var data = await fetch("/todos",{
         "method":"POST",
         "headers":{
             "Content-Type":'application/json'
         },
         body:JSON.stringify({"title":title,"done":0})
     }).then((data)=>{
          return data.json();
     });
     dispatch({"type":"ADD",data});
}
export const del = (id)=> async function(dispatch){
     var data = await fetch("/todos/"+id,{
         "method":"DELETE",
         "headers":{
             "Content-Type":'application/json'
         }
     });

     dispatch({"type":"DEL",id});
}

export const changedone = (id,value) => async function(dispatch){
      var v = await fetch("/todos/"+id,{
         "method":"PATCH",
         "headers":{
             "Content-Type":'application/json'
         },
         body:JSON.stringify({"done":value?1:0})
      }).then((data)=>{
          return data.json();
      });
      dispatch({"type":"CHANGEDONE",id,value})
}
export const changetitle = (id,title) => async function(dispatch){
      var v = await fetch("/todos/"+id,{
         "method":"PATCH",
         "headers":{
             "Content-Type":'application/json'
         },
         body:JSON.stringify({"title":title})
      }).then((data)=>{
          return data.json();
      });
      dispatch({"type":"CHANGETITLE",id,title})
}
