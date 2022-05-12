<template>
  <v-container class="vitals">
    <v-card>
      <v-card-text>
        <v-form ref="vitalsForm">
          <v-row>
            <v-col cols="12">
              <v-text-field
                  outlined
                  label="Patient Name"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                  outlined
                  label="Visit Date"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                  outlined
                  label="Height"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                  outlined
                  label="Weight"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                  outlined
                  label="BMI"
              />
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "VitalsComponent"
}
</script>

<style scoped>

</style>
