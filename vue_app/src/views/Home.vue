<template>
 <div class="home">
   <v-main id="landing">
     <v-row align="center" justify="center">
       <v-col class="text-center" lg="12" style="margin-top: 10%">
         <h1 class="display-4 font-weight-thin mb-4">Shop App</h1>
         <h4 class="display-2 font-weight-thin pt-5">Items at your Doorstep</h4>
       </v-col>
     </v-row>
   </v-main>
 </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style scoped>
#landing {
  height:93vh;
  width: 100%;
  background-color: aquamarine;
} 
h4{
  color: white;
}
</style>
