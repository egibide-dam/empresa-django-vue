<script setup>
import { onMounted } from "vue";
import { useDepartamentoStore } from "@/stores/departamentos";
import DepartamentosList from "@/components/DepartamentoList.vue";
import DepartamentoForm from "@/components/DepartamentoForm.vue";
import { useAuthStore } from "@/stores/auth.store.js";

const store = useDepartamentoStore();
const auth = useAuthStore();

onMounted(() => {
    store.fetchDepartamentos();
});
</script>

<template>
    <h1>Departamentos</h1>
    <DepartamentosList/>
    <template v-if="auth.isAuthenticated">
        <h2>Nuevo departamento</h2>
        <DepartamentoForm/>
    </template>
</template>

<style scoped>
</style>
