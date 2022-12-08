<template>
  <section>
    <h1>Sign in if you are cool</h1>
    <input type="text" value="user@mail.com" disabled>
    <input type="password" value="password" disabled>
    <button @click="login">Sign in</button>
  </section>
</template>

<script setup>
import { login as firebaseLogin } from '../firebase';
import { router } from '../router';

async function login() {
  await firebaseLogin()
  router.push('/profile')
}
</script>

<style scoped>
section {
  align-items: center;
  gap: 5px;
}

input {
  width: 200px;
}
</style>