<template>
   
    <TaskComm :data="arr"></TaskComm>
   
    <FavTasks :arr="arr"></FavTasks>
     <button class="text-red-600 font-bold ms-3 text-start text-xl capitalize" @click="show=!show">add task</button>
   <div>
    <div v-show="show" class=" m-3 flex flex-col gap-2 border-gray-200 border-2  rounded-md p-3">
      <input type="text" class="text-black p-1"  placeholder="task title" v-model="task.title" ref="inpt" required>
      <input type="text" class="text-black p-1" placeholder="description" v-model="task.disc" ref="inptdisc" required>
      <input type="date"  class="text-black p-1" v-model="task.date" ref="inputDate">
      <div class="flex justify-end gap-4 mb-2 me-2">
        <button class="bg-gray-200 p-2 rounded-sm text-cyan-900" @click="cancel">cancel</button>
        <button class="bg-red-600 text-white p-2 rounded-sm" @click="addNew">add task</button>
      </div>
    </div>
    
   </div>
</template>
<script>
import FavTasks from './FavTasks.vue';
import TaskComm from './TaskComm.vue';

export default{
    name:'AddTask',
    data(){
        return{
           
            show:false,
            task:{
                title:'',
                disc:'',
                date:'',
                
            },
           arr:[],
        }
    },
    
    methods:{
        addNew(){
           
          this.arr.push({
            'title':this.$refs.inpt.value,
            'disc':this.$refs.inptdisc.value,
            'date':this.$refs.inputDate.value,
            'fav':false,
          });
       this.task.title='';
       this.task.disc='';
       this.task.date='';
        
         
            
        },
        cancel(){
            this.task.title='',
            this.task.disc='';
            this.task.date='';
            this.show=false;
        },

    },
    components:{
      TaskComm,
      FavTasks,
    }
}
</script>