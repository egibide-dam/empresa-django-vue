<script setup>
import Menu from "@/views/Menu.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
    <NavBar/>

    <div class="container-fluid py-4">
        <div class="row">
            <div class="col-auto">
                <Menu/>
            </div>
            <div class="col">
                <RouterView/>
            </div>
        </div>
    </div>

    <Footer/>
</template>

<style scoped>
</style>
