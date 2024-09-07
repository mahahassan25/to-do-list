<template>
  <div class="flex flex-col gap-3 ms-3">
        <h2 class="font-bold text-xl capitalize text-red-600">tasks</h2>
        <div v-for="(tsk,i) in data" key="i" class="rounded-xl border-2 border-gray-200 w-3/4 p-2 flex ">
            <div class="w-full">
              <p>{{ tsk.date }}</p>
              <p class="font-bold">{{ tsk.title }}</p>
              <p>{{ tsk.disc }}</p>
            </div>
            <div class=" flex justify-end self-center gap-3">
              <button class="border-2 rounded-lg border-gray-100 p-1" @click="deleteTask(i)">delete</button>
              <button @click="addToFav(i)" class="bg border-2 rounded-lg border-gray-100 p-1 " id="buttonFav" >
                fav
              </button>
            </div>
        </div>
      </div>
</template>

<script>
 export default{
    name:'TaskComp',
    data(){
        return{
          isFav:false,
        }
    },
   methods:{
        deleteTask(indx){
            this.$props.data.splice(indx,1)
        },
        addToFav(i){
        this.isFav=!this.isFav;
        if(this.isFav){
       this.$props.data[i].fav=true;
       document.getElementById('buttonFav').classList.add('bg-yellow-400');
    
        }else{
            this.$props.data[i].fav=false;
       document.getElementById('buttonFav').classList.remove('bg-yellow-400');
        }
       
         
        }

    },
    props:['data'],
 }
</script>

<style>
 
</style>