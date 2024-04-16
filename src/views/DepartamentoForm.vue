<script setup>
import { reactive } from 'vue';
import { useDepartamentoStore } from "@/stores/departamentos.js";

const store = useDepartamentoStore();

const departamento = reactive({
    nombre: '',
    telefono: '',
});

function botonPulsado() {
    store.saveDepartamento(departamento);
    limpiar();
}

function limpiar() {
    departamento.nombre = '';
    departamento.telefono = '';
}
</script>

<template>
    <div class="card p-3 col-4">
        <div class="mb-3">
            <label class="form-label" for="nombre">Nombre</label>
            <input class="form-control" placeholder="Escribe algo..." id="nombre" type="text"
                   v-model="departamento.nombre"/>
        </div>
        <div class="mb-3">
            <label class="form-label" for="telefono">Telefono</label>
            <input class="form-control" placeholder="Escribe algo..." id="telefono" type="text"
                   v-model="departamento.telefono"/>
        </div>
        <div>
            <button class="btn btn-primary" :disabled="!departamento.nombre" @click="botonPulsado()">Guardar</button>
            <button class="btn btn-link link-dark" :disabled="!departamento.nombre" @click="limpiar()">Cancelar</button>
        </div>
    </div>
</template>

<style scoped>
</style>
