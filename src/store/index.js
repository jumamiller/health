import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

const BASE_API_URL='http://localhost:8080/';
export default new Vuex.Store({
  state: {
    patients: [],
  },
  mutations: {
    MUTATE: (state, payload) => {
      state[payload.state] = payload.data;
    },
  },
  getters: {
    patientGetter: (state) => (value) => state[value],
  },
  actions: {
    // save patient
    savePatient: (payload) => {
      axios.post(`${BASE_API_URL}patients`, payload)
          .then(res=>{
            alert(res.message)
          })
          .catch(err=>{
            alert(err.message);
          })
    },
    // get patients
    patients: ({commit}) => {
      axios.get(`${BASE_API_URL}patients`)
          .then(res=>{
            commit("MUTATE", {
              state: "patients",
              data: res.data,
            });
          })
          .catch(err=>{
            alert(err.message);
          })
    },
    // save vitals
    saveVitals: (payload) => {
      axios.post(`${BASE_API_URL}vitals`, payload)
          .then(res=>{
            alert(res.message)
          })
          .catch(err=>{
            alert(err.message);
          })
    },
    // save patient visits
    saveVisitForms: (payload) => {
      axios.post(`${BASE_API_URL}visits`, payload)
          .then(res=>{
            alert(res.message)
          })
          .catch(err=>{
            alert(err.message);
          })
    }
  },
  modules: {
  }
})
