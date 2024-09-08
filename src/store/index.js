import { createStore } from 'vuex'

const store=createStore({
    state:{
        tasks:[],
        
    }
    ,
    mutations:{
       getTasks(state,data){
        state.tasks=data;
       },
    },
    actions:{
       doGetTasks(context){
            fetch('http://localhost:3000/tasks')
        .then(res=>res.json())
        .then(data=>{context.commit("getTasks",data)})
        .catch(err=>console.log(err));
        },

        addTask(context,obj){
             console.log(obj);
             fetch('http://localhost:3000/tasks',{
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(obj)
          }).then(()=>console.log("added"))
         
         
          }
    }

});

export default store;