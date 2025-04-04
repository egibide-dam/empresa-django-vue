<script setup>
import { useDepartamentoStore } from "@/stores/departamentos";
import moment from "moment/min/moment-with-locales";
import { useAuthStore } from "@/stores/auth.js";
import { onMounted } from "vue";

moment.locale('es');

const departamentos = useDepartamentoStore();
const auth = useAuthStore();

onMounted(() => {
    departamentos.fetch();
});
</script>

<template>
    <table v-if="departamentos.length" class="table table-responsive table-striped">
        <thead>
        <tr class="table-secondary">
            <th>#</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Fecha de alta</th>
            <th>Actualizado</th>
            <th v-if="auth.isAuthenticated"></th>
        </tr>
        </thead>
        <tbody class="align-middle">
        <tr v-for="departamento in departamentos.items" :key="departamento.id">
            <td>{{ departamento.id }}</td>
            <td>{{ departamento.nombre }}</td>
            <td>{{ departamento.telefono }}</td>
            <td>{{ moment(departamento.created).format('LL, LTS') }}</td>
            <td :title="moment(departamento.updated).format('LL, LTS')">
                {{ moment(departamento.updated).fromNow() }}
            </td>
            <td v-if="auth.isAuthenticated">
                <button class="btn btn-sm btn-danger" title="Borrar"
                        @click="departamentos.delete(departamento)">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
        </tbody>
    </table>
    <p v-else class="alert alert-warning">No hay datos, comprueba la consola para ver posibles errores.</p>
</template>

<style scoped>
</style>
