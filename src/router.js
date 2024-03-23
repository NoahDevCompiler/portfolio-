import { createRouter, createWebHistory } from 'vue-router'
import Home from "./components/page/Home.vue"
import About from "./components/page/About.vue"
import Contact from "./components/page/Contact.vue"
import Projects from "./components/page/Projects.vue"


const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/contact",
            component: Contact
        },
        {
            path: "/projects",
            component: Projects
        }
    ]
})

export default router

