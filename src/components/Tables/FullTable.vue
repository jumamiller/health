<template>
  <div>
    <md-table v-model="users">
      <md-table-toolbar>
        <h1 class="md-title">
          Tabelle
        </h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Platz" md-sort-by="place" >{{ item.place }}</md-table-cell>
        <md-table-cell md-label="Trend" md-sort-by="trend" v-if="item.trend">+</md-table-cell>
        <md-table-cell md-label="Trend" md-sort-by="trend" v-else>-</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Gesamtpunktzahl" md-sort-by="points">{{ item.points }}</md-table-cell>
      </md-table-row>

    </md-table>
  </div>
</template>

<script>
export default {
  name: 'FullTable',

  props: {
    context: String
  },

  data() {
    return {
      users: []
    }
  },

  created() {
    this.users = this.getUsers();
  },

  methods: {
    getUsers() {
      let users = [
        {
          name: 'Rafal Wesolowski',
          place: 1,
          newPoints: 23,
          points: 124,
          trend: true
        }
      ];

      if (this.context === 'global') {
        users[0].name = 'Kai Urban';
        users[0].points = '1398';
      }

      return users;
    }
  }
}
</script>

<style>
.md-table-cell {
  text-align: left;
}
</style>
