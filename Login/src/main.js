import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyAFFDEs_2h5gNkPt_4NOzIObS3c81qOlTU",
  authDomain: "fir-009-a5626.firebaseapp.com",
  projectId: "fir-009-a5626",
  storageBucket: "fir-009-a5626.appspot.com",
  messagingSenderId: "396881552660",
  appId: "1:396881552660:web:b0e69d48f9b55303548e01",
  measurementId: "G-0H4NW56DRS"
  };
  firebase.initializeApp(firebaseConfig);
}
export const db = firebase.firestore();
export const auth = firebase.auth();

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");