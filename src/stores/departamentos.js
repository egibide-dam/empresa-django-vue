import { defineStore } from 'pinia'
import axios from "axios"

export const useDepartamentoStore = defineStore("departamento", {
    state: () => ({
        departamentos: [],
    }), getters: {
        getDepartamentos(state) {
            return state.departamentos
        }
    }, actions: {
        async fetchDepartamentos() {
            try {
                const data = await axios.get('http://localhost:8000/api/departamentos')
                this.departamentos = data.data
            } catch (error) {
                console.log(error)
            }
        }
    },
})
