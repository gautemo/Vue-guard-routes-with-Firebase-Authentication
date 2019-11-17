<template>
  <section>
    <h1>Profile</h1>
    <h2>Hi {{name}}</h2>
    <h3>You are <span>cool!</span></h3>
    <button @click="signOut">Sign out</button>
  </section>
</template>

<script>
import firebase from "@/firebaseinit";

export default {
  created(){
    this.name = firebase.auth().currentUser.displayName;
  },
  data(){
    return{
      name: ''
    }
  },
  methods: {
    signOut(){
      firebase.auth().signOut();
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
span{
  text-transform: uppercase;
  font-weight: bold;
  background: orangered;
  color: white;
  padding: 10px;
  font-size: 1.5em;
  transform: skew(20deg);
}
</style>