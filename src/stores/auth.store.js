import { defineStore } from 'pinia';
import axios from "axios"

const API_SERVER = 'http://localhost:8000';
const API_ENDPOINT = 'auth/jwt';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
    }),
    getters: {
        isAuthenticated(state) {
            return state.user !== null;
        }
    },
    actions: {
        async login(username, password) {
            const response = await axios.post(`${API_SERVER}/${API_ENDPOINT}/create`, {username, password});
            this.user = response.data;
            console.log(response)
            localStorage.setItem('user', JSON.stringify(response.data));
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
        }
    }
});
