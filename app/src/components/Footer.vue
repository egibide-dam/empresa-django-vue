<script setup>
import dayjs from "dayjs";
import "dayjs/locale/es";

dayjs.locale('es')
</script>

<template>
    <footer class="footer mt-auto py-3 bg-secondary-subtle">
        <div class="container text-center">
        <span class="text-body-tertiary">
            &copy; {{ dayjs().format('YYYY') }} Egibide
        </span>
        </div>
    </footer>
</template>
