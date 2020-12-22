<template>
<div>
    <v-app-bar dark :elevation="10">
        <v-toolbar-title>
            <h2>Shoppping site</h2>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn @click ="GetAllEmployees">
                <v-icon left>mdi-home</v-icon>
                <h3>Employees</h3>
            </v-btn>
            <v-btn to ='/register'>
                <v-icon left>mdi-account</v-icon>
                <h3>Register</h3>
            </v-btn>
            <v-btn>
                <v-icon left>mdi-login</v-icon>
                <h3>login</h3>
            </v-btn>
        </v-toolbar-items>
    </v-app-bar>
</div>
</template>
<script>
export default{
    name:"navbar",

    methods:{
        GetAllEmployees() {
            this.$axios.get('/emp/all_employess')
            .then((response)=>{
                console.log(response);
            })
            .catch((error) =>{
                console.log(error)
            })
        }
    }
}
</script>
<style scoped>
</style>