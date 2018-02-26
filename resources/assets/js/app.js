// 'Imports' de librerias

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';

// 'Use' de librerias
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

// 'Imports' de Componentes
import App from './App.vue';
import Dashboard from '../components/dashboard/Dashboard';

// 'Routes'
const routes = [

  { name: 'dashboard', path: '/', component: Dashboard }

];

const router = new VueRouter({ mode: 'history', routes: routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#app-spa');
