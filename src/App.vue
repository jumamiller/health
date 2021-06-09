<template>
  <div id="app">
    <TabRouter/>
  </div>
</template>

<script>
import TabRouter from './components/Tabs/TabRouter'

export default {
  name: 'App',
  components: {
    TabRouter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
