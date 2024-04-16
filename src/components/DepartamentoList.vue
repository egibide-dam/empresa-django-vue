<script setup>
import { useDepartamentoStore } from "@/stores/departamentos";
import moment from "moment/min/moment-with-locales";
import { useAuthStore } from "@/stores/auth.js";

moment.locale('es');

const store = useDepartamentoStore();
const auth = useAuthStore();
</script>

<template>
    <table v-if="store.numDepartamentos" class="table table-responsive">
        <thead>
        <tr class="table-dark">
            <th>#</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Fecha de alta</th>
            <th>Actualizado</th>
            <th v-if="auth.isAuthenticated"></th>
        </tr>
        </thead>
        <tbody class="align-middle">
        <tr v-for="departamento in store.departamentos" :key="departamento.id">
            <td>{{ departamento.id }}</td>
            <td>{{ departamento.nombre }}</td>
            <td>{{ departamento.telefono }}</td>
            <td>{{ moment(departamento.created).format('LL, LTS') }}</td>
            <td :title="moment(departamento.updated).format('LL, LTS')">
                {{ moment(departamento.updated).fromNow() }}
            </td>
            <td v-if="auth.isAuthenticated">
                <button class="btn btn-danger" title="Borrar"
                        @click="store.deleteDepartamento(departamento)">
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
