<script setup>
</script>

<template>
    <nav class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary ancho-navegacion">
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <RouterLink class="nav-link" to="/">
                    <i class="bi bi-house me-2"></i>
                    <span>Home</span>
                </RouterLink>
                <RouterLink class="nav-link" to="/departamentos">
                    <i class="bi bi-building me-2"></i>
                    <span>Departamentos</span>
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.ancho-navegacion {
    width: 15em;
}
</style>
