import { defineStore } from 'pinia'
import axios from "axios"
import { useAuthStore } from "@/stores/auth.js";

const API_SERVER = 'http://localhost:8000';
const API_ENDPOINT = 'api';

export const useDepartamentoStore = defineStore("departamentos", {
    state: () => ({
        items: [],
    }),
    getters: {
        length(state) {
            return state.items.length;
        }
    },
    actions: {
        async fetch() {
            try {
                const response = await axios.get(`${API_SERVER}/${API_ENDPOINT}/departamentos`);
                this.items = response.data
            } catch (error) {
                console.log(error)
            }
        },
        async save(departamento) {
            const auth = useAuthStore();

            if (auth.isAuthenticated) {
                try {
                    const response = await axios.post(`${API_SERVER}/${API_ENDPOINT}/departamentos`, departamento, {
                        headers: {
                            'Authorization': auth.token,
                        }
                    });
                    this.fetch();
                } catch (error) {
                    console.log(error)
                }
            } else {
                throw new Error('User must be authenticated')
            }
        },
        async delete(departamento) {
            const auth = useAuthStore();

            if (auth.isAuthenticated) {
                try {
                    const response = await axios.delete(`${API_SERVER}/${API_ENDPOINT}/departamentos/${departamento.id}`, {
                        headers: {
                            'Authorization': auth.token,
                        }
                    });
                    this.fetch();
                } catch (error) {
                    console.log(error)
                }
            } else {
                throw new Error('User must be authenticated')
            }
        }
    },
})
