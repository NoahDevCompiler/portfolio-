import { createRouter, createWebHistory } from 'vue-router'
import Home from "./components/page/Home.vue"

const router = createRouter ({

    routes: [
        {
            path: "/",
            component: Home
        }
    ]
})
    

