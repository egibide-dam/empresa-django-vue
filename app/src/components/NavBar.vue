<script setup>
import Login from "@/components/Login.vue";
</script>

<template>
    <nav class="navbar navbar-expand-md bg-primary py-4 px-3">
        <RouterLink class="navbar-brand text-light" to="/">
            <span class="display-5 px-3">EmpresaDjango Vue</span>
        </RouterLink>
        <button class="navbar-toggler border-0 text-light" type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Navegación">
            <i class="bi bi-list"></i>
        </button>
        <div class="collapse navbar-collapse mx-3" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto"></ul>
            <ul class="navbar-nav ms-auto">
                <Login/>
            </ul>
        </div>
    </nav>
</template>
