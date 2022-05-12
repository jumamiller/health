<template>
  <v-container>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step
            :complete="e1 > 1"
            step="1"
        >
          Patient Registration
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
            :complete="e1 > 2"
            step="2"
        >
          Patient Vitals
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3" :complete="e1 > 3">
          Patient Vitals Form A
        </v-stepper-step>
        <v-divider/>

        <v-stepper-step step="4" :complete="e1 > 4">
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
            <v-form ref="registration">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                      label="Patient Number"
                      outlined
                      dense
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                      type="date"
                      label="Registration Date"
                      outlined
                      dense
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                      label="First Name"
                      outlined
                      dense
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                      label="Last Name"
                      outlined
                      dense
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                      label="Date of Birth"
                      outlined
                      dense
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-select
                      outlined
                      dense
                      label="Gender"
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
              @click="e1 = 2"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card flat>
            <v-form ref="vitals">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                      label="Patient Name"
                      outlined
                      dense
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                      type="date"
                      label="Visit Date"
                      outlined
                      dense
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                      label="Height"
                      outlined
                      dense
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                      label="Weight"
                      outlined
                      dense
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                      label="BMI"
                      outlined
                      dense
                  />
                </v-col>
              </v-row>
            </v-form>
          </v-card>

          <v-btn
              color="primary"
              @click="e1 = 3"
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
                      dense
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                      type="date"
                      label="Visit Date"
                      outlined
                      dense
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <p>General Health</p>
                  <v-radio-group>
                    <v-radio :label="val.value" :value="val.value" v-bind:key="index" v-for="(val, index) in health"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12" md="6">
                  <p>Have you ever been on a diet to lose weight?</p>
                  <v-radio-group>
                    <v-radio :label="yes.value" :value="yes.value" v-bind:key="index" v-for="(yes, index) in yesOrNo"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                      label="Comments"
                      outlined
                  />
                </v-col>
              </v-row>
            </v-form>
          </v-card>

          <v-btn
              color="primary"
              @click="e1 = 4"
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
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                      type="date"
                      label="Visit Date"
                      outlined
                      dense
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <p>General Health</p>
                  <v-radio-group>
                    <v-radio :label="val.value" :value="val.value" v-bind:key="index" v-for="(val, index) in health"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12" md="6">
                  <p>Are you currently taking any drugs?</p>
                  <v-radio-group>
                    <v-radio :label="yes.value" :value="yes.value" v-bind:key="index" v-for="(yes, index) in yesOrNo"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                      label="Comments"
                      outlined
                  />
                </v-col>
              </v-row>
            </v-form>
          </v-card>

          <v-btn
              color="primary"
              @click="e1 = 5"
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
              @click="e1 = 1"
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
  data () {
    return {
      e1: 1,
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
        {text: 'Patient Name', value: 'name'},
        {text: 'Age', value: 'age'},
        {text: 'BMI Status', value: 'bmi'}
      ],
      patients: [
        {name: 'Miller Juma',age: 23, bmi: 20},
        {name: 'Miller Juma',age: 23, bmi: 20}
      ],
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Baloo+2&family=PT+Sans+Caption&display=swap');
*{
  font-family: 'PT Sans Caption', sans-serif;
}
</style>
