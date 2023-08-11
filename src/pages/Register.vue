<script setup>
import { ref } from 'vue';


const firstName = ref("")
const lastName = ref("")
const email = ref("")
const password = ref("")
const phone = ref("")
const imgUrl = ref("")

const submit = () => {
    console.log("submit")
}

</script>
<template>
    <div class="register-section">
        <div class="container">
            <form action="#" @submit.prevent="submit" class="register-form">
                <input type="text" placeholder="First Name" v-model="firstName" />
                <input type="text" placeholder="Last Name" v-model="lastName" />
                <input type="text" placeholder="Email" v-model="email" />
                <input type="text" placeholder="Password" v-model="password" />
                <input type="text" placeholder="Phone" v-model="phone" />
                <input type="text" placeholder="Profile Image" v-model="imgUrl" />
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
</template>