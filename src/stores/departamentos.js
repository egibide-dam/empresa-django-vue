import { defineStore } from 'pinia'
import axios from "axios"

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
        }
    },
})
