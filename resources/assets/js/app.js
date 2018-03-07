// 'Imports' de librerias

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import lang_es from 'element-ui/lib/locale/lang/es'
import locale from 'element-ui/lib/locale'

// 'Use' de librerias
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(ElementUI)
locale.use(lang_es)

// 'Imports' de Componentes
import App from './App.vue'
import Dashboard from '../components/dashboard/Dashboard.vue'
import ProjectList from '../components/projects/ProjecList.vue'

// 'Routes'
const routes = [

  {
    name: 'dashboard', path: '/my-projects', component: Dashboard, children: [
      { name: 'project_list', path: 'list', component: ProjectList}
    ]
  }

];

const router = new VueRouter({ mode: 'history', base: __dirname, routes: routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#app-spa')
