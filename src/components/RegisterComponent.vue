<template>
  <v-container>
    <v-stepper v-model="stepper">
      <v-stepper-header>
        <v-stepper-step
            :complete="stepper > 1"
            step="1"
        >
          Patient Registration
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
            :complete="stepper > 2"
            step="2"
        >
          Patient Vitals
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3" :complete="stepper > 3">
          Patient Vitals Form A
        </v-stepper-step>
        <v-divider/>

        <v-stepper-step step="4" :complete="stepper > 4">
          Patient Vitals Form B
        </v-stepper-step>
        <v-divider/>

        <v-stepper-step step="5">
          Patient Listing
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card flat>
            <v-form ref="registrationForm">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                      label="Patient Number"
                      outlined
                      v-model="patientFormData.patientID"
                      dense
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                      type="date"
                      label="Registration Date"
                      v-model="patientFormData.registrationDate"
                      outlined
                      dense
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                      label="First Name"
                      outlined
                      v-model="patientFormData.firstName"
                      dense
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                      label="Last Name"
                      outlined
                      v-model="patientFormData.lastName"
                      dense
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                      label="Date of Birth"
                      outlined
                      dense
                      type="date"
                      v-model="patientFormData.dateOfBirth"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-select
                      outlined
                      dense
                      label="Gender"
                      v-model="patientFormData.gender"
                      :items="gender"
                      :item-text="item=>item.value"
                      :item-value="item=>item.value"
                  />
                </v-col>
              </v-row>
            </v-form>
          </v-card>

          <v-btn
              color="primary"
              @click="savePatient"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card flat>
            <v-form ref="vitalsForm">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                      label="Patient Name"
                      outlined
                      readonly
                      :value="`${patientFormData.firstName+' '+ patientFormData.lastName}`"
                      dense
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                      type="date"
                      label="Visit Date"
                      outlined
                      v-model="vitalsFormData.visitDate"
                      dense
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                      label="Height"
                      outlined
                      type="number"
                      v-model="vitalsFormData.height"
                      dense
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                      label="Weight"
                      outlined
                      type="number"
                      v-model="vitalsFormData.weight"
                      dense
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                      label="BMI"
                      outlined
                      readonly
                      type="number"
                      :value="`${vitalsFormData.weight/vitalsFormData.height}`"
                      v-model="vitalsFormData.BMI"
                      dense
                  />
                </v-col>
              </v-row>
            </v-form>
          </v-card>

          <v-btn
              color="primary"
              @click="saveVitals"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card flat>
            <v-form ref="formA">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                      label="Patient Name"
                      outlined
                      readonly
                      :value="`${patientFormData.firstName+' '+ patientFormData.lastName}`"
                      dense
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                      type="date"
                      label="Visit Date"
                      outlined
                      v-model="visitFormData.dietVisitDate"
                      dense
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <p>General Health</p>
                  <v-radio-group>
                    <v-radio
                        :label="val.value"
                        :value="val.value"
                        v-model="visitFormData.dietGeneralHealth"
                        v-bind:key="index"
                        v-for="(val, index) in health"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12" md="6">
                  <p>Have you ever been on a diet to lose weight?</p>
                  <v-radio-group>
                    <v-radio
                        :label="yes.value"
                        :value="yes.value"
                        v-bind:key="index"
                        v-model="visitFormData.isOnDietToLoseWeight"
                        v-for="(yes, index) in yesOrNo"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                      label="Comments"
                      outlined
                      v-model="visitFormData.dietComments"
                  />
                </v-col>
              </v-row>
            </v-form>
          </v-card>

          <v-btn
              color="primary"
              @click="stepper = 4"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
        <v-stepper-content step="4">
          <v-card flat>
            <v-form ref="formB">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                      label="Patient Name"
                      outlined
                      dense
                      readonly
                      :value="`${patientFormData.firstName+' '+ patientFormData.lastName}`"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                      type="date"
                      label="Visit Date"
                      outlined
                      v-model="visitFormData.drugsVisitDate"
                      dense
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <p>General Health</p>
                  <v-radio-group>
                    <v-radio
                        :label="val.value"
                        :value="val.value"
                        v-model="visitFormData.isOnDrugs"
                        v-bind:key="index+1"
                        v-for="(val, index) in health"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12" md="6">
                  <p>Are you currently taking any drugs?</p>
                  <v-radio-group>
                    <v-radio
                        v-model="visitFormData.drugsGeneralHealth"
                        :label="yes.value" :value="yes.value"
                        v-bind:key="index+2" v-for="(yes, index) in yesOrNo"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                      label="Comments"
                      outlined
                      v-model="visitFormData.drugsComments"
                  />
                </v-col>
              </v-row>
            </v-form>
          </v-card>

          <v-btn
              color="primary"
              @click="saveVisits"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
        <v-stepper-content step="5">
          <v-card>
            <v-data-table
                :items="patients"
                :headers="headers"
            />
          </v-card>

          <v-btn
              color="primary"
              @click="stepper = 1"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
export default {
  name: "RegisterComponent",
  beforeRouteEnter(to,from,next){
    next((v) =>{
      v.$store.dispatch('patients')
    })
  },
  data () {
    return {
      patientFormData:{
        patientID: "",
        registrationDate: "",
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
      },
      vitalsFormData: {
        patientID: "",
        visitDate: "",
        height: null,
        weight: null,
        BMI: null,
      },
      visitFormData: {
        patientID: "",
        dietVisitDate: "",
        drugsVisitDate: "",
        dietGeneralHealth: "",
        drugsGeneralHealth: "",
        isOnDietToLoseWeight: "",
        isOnDrugs: "",
        dietComments: "",
        drugsComments: "",
      },
      stepper: 1,
      gender: [
        {"value":"Male"},
        {"value":"Female"},
        {"value":"Other"},
      ],
      yesOrNo: [
        {"value":"Yes"},
        {"value":"No"},
      ],
      health: [
        {"value":"Good"},
        {"value":"Poor"},
      ],
      headers: [
        {text: 'Patient Name', value: 'first_name'},
        {text: 'Age', value: 'patient_number'},
        {text: 'BMI Status', value: 'gender'}
      ],
    }
  },
  computed:{
    patient(){
      return this.$store.getters['patientGetter']('patient')
    },
    patients(){
      return this.$store.getters['patientGetter']('patients')
    }
  },
  methods: {
    savePatient() {
      this.stepper = 2
      this.$store.dispatch('savePatient', {...this.patientFormData})
    },
    saveVitals() {
      this.stepper = 3
      this.vitalsFormData.patientID=this.patientFormData.patientID;
      this.vitalsFormData.BMI=this.vitalsFormData.weight/this.vitalsFormData.height
      this.$store.dispatch('saveVitals', {...this.vitalsFormData})
    },
    saveVisits() {
      this.stepper = 5
      this.visitFormData.patientID=this.patientFormData.patientID;
      this.$store.dispatch('saveVisits', {...this.visitFormData})
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Baloo+2&family=PT+Sans+Caption&display=swap');
*{
  font-family: 'PT Sans Caption', sans-serif;
}
</style>
