<template>
  <div>
    <md-tabs md-alignment="right" md-sync-route>
      <md-tab id="tab-dashboard" md-label="Dashboard" to="/dashboard" exact>
        <Dashboard/>
      </md-tab>

      <md-tab id="tab-tip" md-label="Tippen!" to="/tip">
        <Tip/>
      </md-tab>

      <md-tab id="tab-profile" md-label="Mein Profil" to="/profile">
        <Profile/>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import Dashboard from './Pages/Dashboard'
import Tip from './Pages/Tip'
import Profile from './Pages/Profile'

export default {
  name: 'TabRouter',
  components: {
    Dashboard,
    Tip,
    Profile
  }
}
</script>
