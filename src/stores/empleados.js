import { defineStore } from 'pinia';
import axios from "axios";
import { computed, ref } from "vue";

const API_SERVER = import.meta.env.VITE_API_SERVER;
const API_ENDPOINT = 'api/empleados';

export const useEmpleadoStore = defineStore('empleados', () => {

    const items = ref([]);

    const length = computed(() => items.value.length);

    async function fetch() {
        try {
            const response = await axios.get(`${API_SERVER}/${API_ENDPOINT}`);
            items.value = response.data;
        } catch (error) {
            console.log(error);
        }
    }

    return { items, length, fetch }
});
