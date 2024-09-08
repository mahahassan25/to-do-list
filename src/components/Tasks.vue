<template>
 <div>
    <button class="text-red-600 font-bold ms-3 text-start text-xl capitalize" @click="show=!show">add task</button>
   <div>
    <div v-show="show" class=" m-3 flex flex-col gap-2 border-gray-200 border-2  rounded-md p-3" >
      <input type="text" class="text-black p-1"  placeholder="task title"  ref="titleRef" required>
      <input type="text" class="text-black p-1" placeholder="description"  ref="discRef" required>
      <input type="date"  class="text-black p-1"  ref="dateRef">
      <div class="flex justify-end gap-4 mb-2 me-2">
        <button class="bg-gray-200 p-2 rounded-sm text-cyan-900" @click="show=!show">cancel</button>
        <button class="bg-red-600 text-white p-2 rounded-sm" @click="addTask">add task</button>
      </div>
    </div>
   </div>
   
 </div>
</template>
<script>


export default{
    name:'Tasks',
    data(){
        return{
           show:false

           
        }
    },
   
    methods:{
       addTask(){
          let obj={
            title:this.$refs.titleRef.value,
           discription :this.$refs.discRef.value,
           date:this.$refs.dateRef.value,
           fav:false,
          }
          
      console.log("mahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
      console.log(obj);
       this.$store.dispatch('addTask',obj);
      
        }
    }
   
}

</script>