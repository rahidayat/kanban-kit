// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import firebase from 'firebase'

Vue.use(VueFire)
Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyAAmZPZXnAIXJYHAMa28MGsSnKxJqL0EkU',
  authDomain: 'kanban-kit.firebaseapp.com',
  databaseURL: 'https://kanban-kit.firebaseio.com',
  projectId: 'kanban-kit',
  storageBucket: 'kanban-kit.appspot.com',
  messagingSenderId: '570294804483'
}

firebase.initializeApp(config)
Vue.prototype.$db = firebase.database()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
