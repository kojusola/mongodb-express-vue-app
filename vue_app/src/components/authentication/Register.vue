<template>
<div class="formss">
    <v-row>
        <v-col md="8" offset-md='2' class="mt-5" >
            <v-row>
                <v-col md="8" offset-md="2">
                    <v-card>
                        <v-card-title class="justify-center">
                            <h3 id="h3">REGISTRATION FORM</h3>
                             </v-card-title>
                            <v-card-text>
                                <v-form>
                                    <v-text-field label="Name" type="text" prepend-icon="fa-user" v-model="name"></v-text-field>
                                    <v-text-field label="Email" type="text" prepend-icon="fa-envelope" v-model="email"></v-text-field>
                                    <v-text-field label="Address" type="text" prepend-icon="fa-user" v-model="address"></v-text-field>
                                    <v-text-field label="Phonenumber" type="number" prepend-icon="fa-user" v-model="phone"></v-text-field>
                                    <div class="text-center mt-3">
                                        <v-btn color="teal" type="submit" @click="RegisterUser" class="px-8 outlined ripple">
                                            Sign up
                                        </v-btn>
                                    </div>
                                </v-form>
                            </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</div> 
</template>
<script>
export default {
    name: "register",
    data(){
        return{
            name: '',
            email:'',
            address: '',
            phone:''
        }
    },
    methods: {
        RegisterUser(){
            const formdata = new FormData();
            this.$axios.post('/emp/add',{
                headers:{
                    'content-type':'application/x-www-form-urlencoded; charset=UTF-8'
                }
            },
            {
                name: this.name,
                email: this.email,
                address: this.address,
                phone: this.phone
            })
            .then((response) => {
                console.log(response)
                alert('User added')
            })
            .catch((error) => {
                console.log(error);
            })
        
    }
    }
}
</script>
<style scoped>
 #h3 {
    font-size:1.5rem;
    color: teal;
}
.formss{
    height: 93vh;
    background-color: cadetblue;
}

</style>