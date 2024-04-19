<script setup>
import { reactive } from 'vue';
import { useDepartamentoStore } from "@/stores/departamentos.js";
import { integer, minLength, required } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

const departamentos = useDepartamentoStore();

const nuevoDepartamento = reactive({
    nombre: '',
    telefono: '',
});

const reglasValidacion = {
    nombre: {
        required,
        minLength: minLength(3)
    },
    telefono: {
        required,
        minLength: minLength(6),
        integer
    },
}

const v$ = useVuelidate(reglasValidacion, nuevoDepartamento, { $autoDirty: true })

function botonPulsado() {
    const result = v$.value.$validate();
    result.then((valid) => {
        if (valid) {
            departamentos.save(nuevoDepartamento);
            limpiar();
        }
    }).catch((error) => {
        console.log(error);
    })
}

function limpiar() {
    nuevoDepartamento.nombre = '';
    nuevoDepartamento.telefono = '';
    v$.value.$reset();
}
</script>

<template>
    <div class="row p-3">
        <div class="card p-3 col-12 col-sm-8 col-lg-6 col-xl-4">
            <div class="mb-3">
                <label class="form-label" for="nombre">Nombre</label>
                <input class="form-control" placeholder="Escribe algo..." id="nombre" type="text"
                       @keyup.enter="botonPulsado()"
                       v-model="nuevoDepartamento.nombre"/>
                <p class="alert alert-warning mt-3" v-for="error of v$.nombre.$errors" :key="error.$uid">
                    {{ error.$message }}
                </p>
            </div>
            <div class="mb-3">
                <label class="form-label" for="telefono">Teléfono</label>
                <input class="form-control" placeholder="Escribe algo..." id="telefono" type="text"
                       @keyup.enter="botonPulsado()"
                       v-model="nuevoDepartamento.telefono"/>
                <p class="alert alert-warning mt-3" v-for="error of v$.telefono.$errors" :key="error.$uid">
                    {{ error.$message }}
                </p>
            </div>
            <div>
                <button class="btn btn-primary" :disabled="v$.$invalid" @click="botonPulsado()">Guardar</button>
                <button class="btn btn-link link-dark" :disabled="!v$.$anyDirty" @click="limpiar()">Cancelar
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
