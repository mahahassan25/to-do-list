<template>
     <div class="flex flex-col gap-3 ms-3">
        <h2 class="font-bold text-xl capitalize text-red-600">tasks</h2>
        <div v-for="(tsk,i) in tasks" :key="i" class="rounded-xl border-2 border-gray-200 w-3/4 p-2 flex ">
            <div class="w-full">
              <p>{{ tsk.date }}</p>
              <p class="font-bold">{{ tsk.title }}</p>
              <p>{{ tsk.discription }}</p>
            </div>
            <div class=" flex justify-end self-center gap-3">
              <button class="border-2 rounded-lg border-gray-100 p-1" @click="deleteTask(tsk.id)">delete</button>
              <button class="bg border-2 rounded-lg border-gray-100 p-1 " :id="tsk.id" @click="addToFav(tsk.id,i)">
                fav
              </button>
            </div>
        </div>
      </div>
</template>
<script>
  export default{
    name:'ShowTasks',
    data(){
        return{
          
        }
    },
    computed:{
      tasks(){
        return this.$store.state.tasks;
      }
    },
    methods:{
        deleteTask(id){
            fetch('http://localhost:3000/tasks/'+id,{
                method:'DELETE',
            }).then(()=>console.log("deleted"));
        },
        addToFav(id,i){
          const favtask=false;
          const obj={
            title:this.arr[i].title,
            discription:this.arr[i].discription,
            date:this.arr[i].date,
            fav:!favtask,
          }
          document.getElementById(id).classList.add("bg-yellow-400");
          fetch('http://localhost:3000/tasks/'+id,{
            method:'PUT',
            headers:{ 'Content-Type': 'application/json' },
            body:JSON.stringify(obj)
          }).then(()=>console.log("updated"));
        }
    },
    mounted(){
      console.log("ي يارب");
     console.log(this.tasks);
   
      this.$store.dispatch("doGetTasks");
    },
    
  }
</script>