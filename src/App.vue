

<template>
  <div class="bg-cyan-950 text-white flex flex-col h-screen ">
    <h1 class="font-bold text-center text-xl mt-3">TO DO LIST</h1>
  <Tasks></Tasks>
  <ShowTasks></ShowTasks>
  <FavTask></FavTask>
   
   
   
  </div>
</template>

<script setup>

import Tasks from './components/Tasks.vue';
import ShowTasks from './components/ShowTasks.vue';
import FavTask from './FavTask.vue';
</script>

