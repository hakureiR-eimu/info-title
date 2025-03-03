<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">比特币</RouterLink>
        <RouterLink to="/gold">黄金</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  height: 80px;
  position: fixed;
  top:  0;
  left: 0;
  width: 100%;
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  margin-left: -1rem;
  font-size: 1rem;
  padding: 1rem 0;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a:first-of-type {
  border: 0;
}
</style>
