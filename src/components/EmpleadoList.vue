<script setup>
import moment from "moment/min/moment-with-locales";
import { useEmpleadoStore } from "@/stores/empleados.js";

moment.locale('es');

const empleados = useEmpleadoStore();
</script>

<template>
    <table v-if="empleados.length" class="table table-responsive table-striped">
        <thead>
        <tr class="table-secondary">
            <th>#</th>
            <th>Nombre</th>
            <th>Fecha de nacimiento</th>
            <th>Antigüedad</th>
            <th>Departamento</th>
            <th>Fecha de alta</th>
            <th>Actualizado</th>
        </tr>
        </thead>
        <tbody class="align-middle">
        <tr v-for="empleado in empleados.items" :key="empleado.id">
            <td>{{ empleado.id }}</td>
            <td>{{ empleado.nombre }}</td>
            <td>{{ moment(empleado.fecha_nacimiento).format('LL') }}</td>
            <td>{{ empleado.antiguedad }}</td>
            <td>{{ empleado.departamento }}</td>
            <td>{{ moment(empleado.created).format('LL, LTS') }}</td>
            <td :title="moment(empleado.updated).format('LL, LTS')">
                {{ moment(empleado.updated).fromNow() }}
            </td>
        </tr>
        </tbody>
    </table>
    <p v-else class="alert alert-warning">No hay datos, comprueba la consola para ver posibles errores.</p>
</template>

<style scoped>
</style>
