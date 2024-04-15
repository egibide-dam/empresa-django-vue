<script setup>
import Menu from "@/views/Menu.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
    <NavBar/>

    <div class="container pt-5">
        <div class="row">
            <div class="col-3">
                <Menu/>
            </div>
            <div class="col">
                <RouterView/>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
