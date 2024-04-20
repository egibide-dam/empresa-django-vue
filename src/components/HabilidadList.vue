<script setup>
import moment from "moment/min/moment-with-locales";
import { useHabilidadStore } from "@/stores/habilidades.js";

moment.locale('es');

const habilidades = useHabilidadStore();
</script>

<template>
    <table v-if="habilidades.length" class="table table-responsive table-striped">
        <thead>
        <tr class="table-secondary">
            <th>#</th>
            <th>Nombre</th>
            <th>Fecha de alta</th>
            <th>Actualizado</th>
        </tr>
        </thead>
        <tbody class="align-middle">
        <tr v-for="habilidad in habilidades.items" :key="habilidad.id">
            <td>{{ habilidad.id }}</td>
            <td>{{ habilidad.nombre }}</td>
            <td>{{ moment(habilidad.created).format('LL, LTS') }}</td>
            <td :title="moment(habilidad.updated).format('LL, LTS')">
                {{ moment(habilidad.updated).fromNow() }}
            </td>
        </tr>
        </tbody>
    </table>
    <p v-else class="alert alert-warning">No hay datos, comprueba la consola para ver posibles errores.</p>
</template>

<style scoped>
</style>
