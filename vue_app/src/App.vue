<template>
  <v-app>
    <navbar />
    <router-view/> 
  </v-app>
</template>

<script>
import navbar from './components/layout/Navbar';
import Home from './views/Home';
import About from './views/About';

export default {
  name: 'App',

  components: {
     navbar
  }
};
</script>
