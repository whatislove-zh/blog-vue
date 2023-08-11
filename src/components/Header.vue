<script setup>
import Navigation from './Navigation.vue';


</script>
<template>
    <header class="header">
        <div class="container">
            <RouterLink to="/" class="link">
                <h2 class="header-logo">Logo</h2>
            </RouterLink>
            <Navigation />
        </div>
        </header>
</template>