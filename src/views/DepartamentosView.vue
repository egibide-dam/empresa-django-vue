<script setup>
import { ref, onMounted, computed } from "vue";
import { useDepartamentoStore } from "@/stores/departamentos";

const store = useDepartamentoStore();

const getDepartamentos = computed(() => {
    return store.getDepartamentos;
});

const departamentos = computed(() => {
    return store.departamentos;
});

onMounted(() => {
    store.fetchDepartamentos();
});
</script>

<template>
    <div class="hello">
        <h1>Departamentos</h1>
        <table v-if="departamentos.length" class="table table-responsive">
            <thead>
            <tr class="table-dark">
                <th>#</th>
                <th>Nombre</th>
                <th>Teléfono</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="departamento in getDepartamentos" :key="departamento.id">
                <td>{{ departamento.id }}</td>
                <td>{{ departamento.nombre }}</td>
                <td>{{ departamento.telefono }}</td>
            </tr>
            </tbody>
        </table>
        <p v-else class="alert alert-warning">No hay datos, comprueba la consola para ver posibles errores.</p>
    </div>
</template>
