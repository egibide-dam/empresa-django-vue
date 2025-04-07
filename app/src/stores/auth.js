import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import axios from "axios";

const API_SERVER = import.meta.env.VITE_API_SERVER;
const API_ENDPOINT = 'auth/jwt';

export const useAuthStore = defineStore('auth', () => {
    // state
    const user = ref(JSON.parse(localStorage.getItem('user')));

    // getters
    const isAuthenticated = computed(() => user.value !== null);
    const token = computed(() => `JWT ${user.value?.access}`);

    // actions
    async function login(username, password) {
        try {
            const response = await axios.post(`${API_SERVER}/${API_ENDPOINT}/create`, { username, password });
            user.value = response.data;
            localStorage.setItem('user', JSON.stringify(response.data));
        } catch (error) {
            console.log(error);
        }
    }

    function logout() {
        user.value = null;
        localStorage.removeItem('user');
    }

    return {
        // expose state
        user,

        // expose getters
        isAuthenticated,
        token,

        // expose actions
        login,
        logout
    };
});
