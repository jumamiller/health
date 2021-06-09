<template>
  <div>
    <md-card v-bind:style="tableStyle">
      <WinnerTable/>
      <md-tabs md-alignment="centered">
        <md-tab id="tab-global" md-label="Global" exact>
          <FullTable context="global"/>
        </md-tab>
        <md-tab id="tab-langenfeld" md-label="Langenfeld">
          <FullTable context="langenfeld"/>
        </md-tab>
        <md-tab id="tab-siegen" md-label="Siegen">
          <FullTable context="siegen"/>
        </md-tab>
      </md-tabs>
    </md-card>

    <md-card v-bind:style="tableStyle">
      <Matches/>
    </md-card>
  </div>
</template>

<script>
import WinnerTable from "../../Tables/WinnerTable";
import FullTable from "../../Tables/FullTable";
import Matches from "../../Tables/Matches";

export default {
  name: 'Dashboard',
  components: {
    WinnerTable,
    FullTable,
    Matches
  },

  data() {
    return {
      tableStyle: this.getTableStyle()
    }
  },

  methods: {
    getTableStyle() {
      if (window.innerWidth < 800) {
        return {
          width: 'auto',
          margin: '4px',
          display: 'inline-block',
          verticalAlign: 'top'
        }
      }

      return {
        width: window.innerWidth / 2 - 50 + 'px',
        margin: '4px',
        display: 'inline-block',
        verticalAlign: 'top'
      }
    }
  }
}
</script>

<style scoped>
  .md-tabs {
    padding-top: 60px
  }
</style>
