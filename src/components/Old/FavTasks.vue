<template>
   
   <div class="flex flex-col gap-3 ms-4">
        <h2 class="font-bold capitalize text-xl text-yellow-400" >favorites</h2>
        <div v-for="(item,i) in favArray" :key="i" class="border-gray-100 rounded-xl border-2 w-3/4 p-2">
          <p>{{ item?.date }}</p>
          <p class="font-bold">{{ item?.title }}</p>
          <p> {{ item?.disc }}</p>
          
        </div>
      </div>
</template>

<script>
 export default{
    name:'FavTasks',
    data(){
        return{
            show:false,
        }
    },
    props:['arr'],
    computed:{
      favArray(){
          let favArr=this.$props.arr.map(elm=>{
            if(elm.fav){
                return elm;
                
            }
          });
          
          return favArr;
      }
    },
   methods:{
    
   }
 }
</script>