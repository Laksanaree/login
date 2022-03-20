<template>
  <div class="container">
  {{ email }}
  <div>
  <imput v-model="email" type="text" label="E-mail" required></imput>
        <imput
          v-model="password"
          label="password"
          type="password"
          required
        ></imput></div>
    <b-card bg-variant="dark" header="Login With Google" text-variant="white" class="text-center">
     <imput v-model="email" type="text" label="E-mail" required></imput>
        <imput
          v-model="password"
          label="password"
          type="password"
          required
        ></imput>
      <b-btn variant="outline-success" class="mr-1" @click="login">Login</b-btn>
    </b-card>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { auth } from "@/main.js";
export default {
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth
        .signInWithPopup(provider)
        .then(result => {
          /** @type {firebase.auth.OAuthCredential} */
          const credential = result.credential;
          const token = credential.accessToken;
          console.log(token);
          const user = result.user;
          console.log(user);
          this.$router.replace("/login");
          console.log("Login Complete");
          alert("Login Complete");
        })
        .catch(error => {
          const errorCode = error.code;
          console.log(errorCode);
        });
    },
  }
};
</script>
