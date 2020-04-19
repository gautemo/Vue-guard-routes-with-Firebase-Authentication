<template>
  <section>
    <h1>Sign up if you are cool</h1>
    <div id="firebaseui-auth-container"></div>
  </section>
</template>

<script>
import firebase from "@/firebaseinit";
import "firebaseui";
import "firebaseui/dist/firebaseui.css";

const ui = new firebaseui.auth.AuthUI(firebase.auth());
const uiConfig = {
  signInSuccessUrl: "/profile",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};

export default {
  mounted() {
    ui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>