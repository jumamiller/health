<template>
  <div>
    <md-table v-model="users">
      <md-table-toolbar>
        <h1 class="md-title">
          Gewinner des Tages
        </h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Platz" md-sort-by="place" >{{ item.place }}</md-table-cell>
        <md-table-cell md-label="Gewonnene Punkte" md-sort-by="newPoints">{{ item.newPoints }}</md-table-cell>
        <md-table-cell md-label="Gesamtpunktzahl" md-sort-by="points">{{ item.points }}</md-table-cell>
      </md-table-row>

    </md-table>
  </div>
</template>

<script>
export default {
  name: 'WinnerTable',

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
      return [
        {
          name: 'Rafal Wesolowski',
          place: 1,
          newPoints: 23,
          points: 124
        }
      ]
    }
  }
}
</script>

<style>
.md-table-cell{
  text-align: left;
}
</style>
