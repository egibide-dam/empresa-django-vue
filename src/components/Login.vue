<script setup>
import { reactive } from "vue";
import { useAuthStore } from "@/stores/auth.js";

const usuario = reactive({
    username: '',
    password: ''
});

const auth = useAuthStore();

function iniciarSesion() {
    auth.login(usuario.username, usuario.password);
    usuario.username = '';
    usuario.password = '';
}
</script>

<template>
    <li v-if="!auth.isAuthenticated">
        <div class="d-flex">
            <input class="form-control me-2" id="username" placeholder="Usuario" type="text"
                   @keyup.enter="iniciarSesion()"
                   v-model="usuario.username"/>
            <input class="form-control me-2" id="password" placeholder="Contraseña" type="password"
                   @keyup.enter="iniciarSesion()"
                   v-model="usuario.password"/>
            <button class="btn btn-secondary" @click="iniciarSesion()">Login</button>
        </div>
    </li>
    <li v-else>
        <button class="btn btn-secondary" @click="auth.logout()">Logout</button>
    </li>
</template>

<style scoped>
</style>
