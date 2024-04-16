import { defineStore } from 'pinia'
import axios from "axios"
import { useAuthStore } from "@/stores/auth.store.js";

const API_SERVER = 'http://localhost:8000';
const API_ENDPOINT = 'api';

export const useDepartamentoStore = defineStore("departamento", {
    state: () => ({
        departamentos: [],
    }),
    getters: {
        getNumDepartamentos(state) {
            return state.departamentos.length;
        }
    },
    actions: {
        async fetchDepartamentos() {
            try {
                const data = await axios.get(`${API_SERVER}/${API_ENDPOINT}/departamentos`);
                this.departamentos = data.data
            } catch (error) {
                console.log(error)
            }
        },
        async saveDepartamento(departamento) {
            const auth = useAuthStore();

            if (auth.user !== null) {
                try {
                    const response = await axios.post(`${API_SERVER}/${API_ENDPOINT}/departamentos`, departamento, {
                        headers: {
                            'Authorization': `JWT ${auth.user.access}`,
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
