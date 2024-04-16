<script setup>
import { reactive } from 'vue';
import { useDepartamentoStore } from "@/stores/departamentos.js";

const departamentos = useDepartamentoStore();

const nuevoDepartamento = reactive({
    nombre: '',
    telefono: '',
});

function botonPulsado() {
    departamentos.save(nuevoDepartamento);
    limpiar();
}

function limpiar() {
    nuevoDepartamento.nombre = '';
    nuevoDepartamento.telefono = '';
}
</script>

<template>
    <div class="card p-3 col-4">
        <div class="mb-3">
            <label class="form-label" for="nombre">Nombre</label>
            <input class="form-control" placeholder="Escribe algo..." id="nombre" type="text"
                   @keyup.enter="botonPulsado()"
                   v-model="nuevoDepartamento.nombre"/>
        </div>
        <div class="mb-3">
            <label class="form-label" for="telefono">Teléfono</label>
            <input class="form-control" placeholder="Escribe algo..." id="telefono" type="text"
                   @keyup.enter="botonPulsado()"
                   v-model="nuevoDepartamento.telefono"/>
        </div>
        <div>
            <button class="btn btn-primary" :disabled="!nuevoDepartamento.nombre" @click="botonPulsado()">Guardar
            </button>
            <button class="btn btn-link link-dark" :disabled="!nuevoDepartamento.nombre" @click="limpiar()">Cancelar
            </button>
        </div>
    </div>
</template>

<style scoped>
</style>
