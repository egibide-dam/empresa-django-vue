<script setup>
import DepartamentoList from "@/components/DepartamentoList.vue";
import DepartamentoForm from "@/components/DepartamentoForm.vue";
import { useAuthStore } from "@/stores/auth.js";

const auth = useAuthStore();
</script>

<template>
    <h1>Departamentos</h1>
    <DepartamentoList/>
    <template v-if="auth.isAuthenticated">
        <h2>Nuevo departamento</h2>
        <DepartamentoForm/>
    </template>
</template>

<style scoped>
</style>
