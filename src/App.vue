<template>
  <main>
    <nav>
      <router-link to="/signin"><span class="big">Signin</span> (availible for all)</router-link>
      <router-link to="/profile"><span class="big">Profile</span> (redirects you if not authenticated)</router-link>
    </nav>
    <router-view/>
    <footer>
      <p class="me">
        <span class="createdby">Created by: Gaute Meek Olsen</span>
        <Twitter />    
        <GitHub />
        <Portofolio size="20" />
      </p>
    </footer>
  </main>
</template>

<script setup>
import Twitter from './components/Twitter.vue'
import GitHub from './components/GitHub.vue'
import Portofolio from './components/Homepage.vue'
</script>

<style>
body, html, #app {
  margin: 0;
  height: 100%;
}

main{
  display: flex;
  flex-direction: column;
  height: 100%;
}

section{
  flex: 1;
  display: flex;
  flex-direction: column;
}

h1, h2, h3, button{
  margin-inline-end: auto;
  margin-inline-start: auto;
}

nav{
  display: flex;
  justify-content: center;
  background: teal;
  border-bottom: 1px solid teal;
}

.big{
  font-size: 2em;
  text-transform: uppercase;
  font-weight: bold;
}

a{
  text-decoration: none;
  color: black;
  padding: 10px;
  border-bottom: 5px solid transparent;
}

nav a:hover{
  border-bottom: 5px solid orangered;
}

nav a:hover .big{
  color: orangered;
}

.router-link-exact-active{
  border-bottom: 5px solid white;
}

footer{
  background: teal;
  padding: 15px;
  color: white;
}

</style>
