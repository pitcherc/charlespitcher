/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

import Vue from "vue";
import VueRouter from "vue-router";

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(VueRouter);

import App from "./views/App";
import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";
import Contact from "./views/Contact";

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/projects",
            name: "projects",
            component: Projects
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact
        }
    ]
});

const app = new Vue({
    el: "#app",
    components: { App },
    router
});
