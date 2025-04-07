import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import axios from "axios";
import { useAuthStore } from "@/stores/auth.js";

const API_SERVER = import.meta.env.VITE_API_SERVER;
const API_ENDPOINT = 'api';

export const useDepartamentoStore = defineStore("departamentos", () => {
    // state
    const items = ref([]);

    // getters
    const length = computed(() => items.value.length);

    // actions
    async function fetch() {
        try {
            const response = await axios.get(`${API_SERVER}/${API_ENDPOINT}/departamentos`);
            items.value = response.data;
        } catch (error) {
            console.log(error);
        }
    }

    async function save(departamento) {
        const auth = useAuthStore();

        if (auth.isAuthenticated) {
            try {
                await axios.post(`${API_SERVER}/${API_ENDPOINT}/departamentos`, departamento, {
                    headers: {
                        'Authorization': auth.token,
                    }
                });
                await fetch();
            } catch (error) {
                console.log(error);
            }
        } else {
            throw new Error('User must be authenticated');
        }
    }

    async function deleteItem(departamento) {
        const auth = useAuthStore();

        if (auth.isAuthenticated) {
            try {
                await axios.delete(`${API_SERVER}/${API_ENDPOINT}/departamentos/${departamento.id}`, {
                    headers: {
                        'Authorization': auth.token,
                    }
                });
                await fetch();
            } catch (error) {
                console.log(error);
            }
        } else {
            throw new Error('User must be authenticated');
        }
    }

    return {
        // expose state
        items,

        // expose getters
        length,

        // expose actions
        fetch,
        save,
        delete: deleteItem // renamed to deleteItem in the implementation to avoid reserved keyword
    };
});
