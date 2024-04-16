import { defineStore } from 'pinia'
import axios from "axios"
import { useAuthStore } from "@/stores/auth.js";

const API_SERVER = 'http://localhost:8000';
const API_ENDPOINT = 'api';

export const useDepartamentoStore = defineStore("departamento", {
    state: () => ({
        departamentos: [],
    }),
    getters: {
        numDepartamentos(state) {
            return state.departamentos.length;
        }
    },
    actions: {
        async fetchDepartamentos() {
            try {
                const response = await axios.get(`${API_SERVER}/${API_ENDPOINT}/departamentos`);
                this.departamentos = response.data
            } catch (error) {
                console.log(error)
            }
        },
        async saveDepartamento(departamento) {
            const auth = useAuthStore();

            if (auth.isAuthenticated) {
                try {
                    const response = await axios.post(`${API_SERVER}/${API_ENDPOINT}/departamentos`, departamento, {
                        headers: {
                            'Authorization': auth.token,
                        }
                    });
                    this.fetchDepartamentos();
                } catch (error) {
                    console.log(error)
                }
            } else {
                throw new Error('User must be authenticated')
            }
        },
        async deleteDepartamento(departamento) {
            const auth = useAuthStore();

            if (auth.isAuthenticated) {
                try {
                    const response = await axios.delete(`${API_SERVER}/${API_ENDPOINT}/departamentos/${departamento.id}`, {
                        headers: {
                            'Authorization': auth.token,
                        }
                    });
                    this.fetchDepartamentos();
                } catch (error) {
                    console.log(error)
                }
            } else {
                throw new Error('User must be authenticated')
            }
        }
    },
})
