<template>
   <div class="flex flex-col gap-3 ms-4" v-if="favArray.length">
        <h2 class="font-bold capitalize text-xl text-yellow-400" >favorites</h2>
        <div v-for="(item,i) in favArray" :key="i" class="border-gray-100 rounded-xl border-2 w-3/4 p-2">
          <p>{{ item?.date }}</p>
          <p class="font-bold">{{ item?.title }}</p>
          <p> {{ item?.discription }}</p>
          
        </div>
      </div>
</template>
<script>
 export default{
    name:'FavTask',
    data(){
        return{
            arr:[]
        }
    },
    methods:{
   
    },
    mounted(){
      fetch('http://localhost:3000/tasks')
        .then(res=>res.json())
        .then(data=>this.arr=data)
        .catch(err=>console.log(err));
    },
   
    computed:{
        favArray(){
          let favArr=this.arr.filter(elm=>{
            if(elm.fav){
                return elm;
                
            }
          });
          
          return favArr;
      }
    }
 }
</script>