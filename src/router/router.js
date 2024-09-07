
import Jobs from '@/components/Tasks.vue'
import ShowTasks from '@/components/ShowTasks.vue'
import FavTask from '@/FavTask.vue'
import {  createRouter, createWebHistory } from 'vue-router'

const routes=[
    {
        path:'/',
        component:Jobs
    },
    {
        Path:'/tasks',
        component:ShowTasks
    },{
        Path:'/fav',
        component:FavTask
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes,
})
export default router;