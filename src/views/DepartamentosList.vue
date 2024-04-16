<script setup>
import { useDepartamentoStore } from "@/stores/departamentos";
import moment from "moment/min/moment-with-locales";

moment.locale('es');

const store = useDepartamentoStore();
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
        </tr>
        </thead>
        <tbody>
        <tr v-for="departamento in store.departamentos" :key="departamento.id">
            <td>{{ departamento.id }}</td>
            <td>{{ departamento.nombre }}</td>
            <td>{{ departamento.telefono }}</td>
            <td>{{ moment(departamento.created).format('LL, LTS') }}</td>
            <td :title="moment(departamento.updated).format('LL, LTS')">
                {{ moment(departamento.updated).fromNow() }}
            </td>
        </tr>
        </tbody>
    </table>
    <p v-else class="alert alert-warning">No hay datos, comprueba la consola para ver posibles errores.</p>
</template>

<style scoped>
</style>
