<template>
      <Header />
  <div id="app">
    <Sidebar />

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
</script>

<style scoped>
#app {
  display: flex;
}

main {
  flex: 1;
  padding: 20px;
}
</style>
