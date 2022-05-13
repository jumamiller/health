import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

const BASE_API_URL='http://localhost:8000/api/v1/';
export default new Vuex.Store({
  state: {
    patients: [],
      patient: {},
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
    savePatient: ({commit},payload) => {
      axios.post(`${BASE_API_URL}patients`, payload)
          .then((res)=>{
            alert('You have successfully registered patient', res.message)
              commit("MUTATE", {
                  'state' : "patient",
                  data:res.data
              });
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
    saveVitals: ({commit},payload) => {
        console.log(commit);
      axios.post(`${BASE_API_URL}vitals`, payload)
          .then(()=>{
              alert('You have successfully added patient vitals')
          })
          .catch(err=>{
            alert(err.message);
          })
    },
    // save patient visits
    saveVisits: ({commit},payload) => {
        console.log(commit);
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
