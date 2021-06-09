<template>
  <div>
    <h1 class="md-title">
      Spielplan
    </h1>

    <md-table
        v-for="dayMatches in matches"
        :key="dayMatches.key"
    >

      <md-table-row>
        <md-table-head>{{ dayMatches[0].matchDate }}</md-table-head>
        <md-table-head>Live</md-table-head>
        <md-table-head>Dein Tipp</md-table-head>
        <md-table-head></md-table-head>
      </md-table-row>

      <md-table-row
          slot="md-table-row"
          v-for="match in dayMatches"
          :key="match.matchId"
      >
        <md-table-cell>{{ match.team1 }} : {{ match.team2 }}</md-table-cell>
        <md-table-cell>{{ match.scoreTeam1 }} : {{ match.scoreTeam2 }}</md-table-cell>
        <md-table-cell>{{ match.tipTeam1 }} : {{ match.tipTeam1 }}</md-table-cell>
        <md-table-cell>{{ match.matchTime }}</md-table-cell>
      </md-table-row>

    </md-table>
  </div>
</template>

<script>
export default {
  name: 'Matches',

  data() {
    return {
      matches: this.getSortedMatches()
    }
  },

  methods: {
    getDate(value) {
      return new Date(value).toLocaleDateString(navigator.language, {day: '2-digit', month:'2-digit', year: 'numeric'});
    },

    getTime(value) {
      return new Date(value).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
    },

    getMatches() {
      return [
        {
          matchId: "2021-06-04:1010:IT-SP",
          matchDate: this.getDate("2021-06-04 10:10"),
          matchTime: this.getTime("2021-06-04 10:10"),
          tipTeam1: 1,
          tipTeam2: 0,
          scoreTeam1: 1,
          scoreTeam2: 4,
          team1: "IT",
          team2: "SP",
          score: 0
        },
        {
          matchId: "2021-06-04:1210:FR-DE",
          matchDate: this.getDate("2021-06-04 12:10"),
          matchTime: this.getTime("2021-06-04 12:10"),
          tipTeam1: 1,
          tipTeam2: 3,
          scoreTeam1: 2,
          scoreTeam2: 6,
          team1: "FR",
          team2: "DE",
          score: 0
        },
        {
          matchId: "2021-06-04:1210:PL-PO",
          matchDate: this.getDate("2021-06-05 12:10"),
          matchTime: this.getTime("2021-06-05 12:10"),
          tipTeam1: 1,
          tipTeam2: 2,
          scoreTeam1: 5,
          scoreTeam2: 4,
          team1: "PL",
          team2: "PO",
          score: 0
        }
      ];
    },

    getSortedMatches() {
      let matches = this.getMatches();

      let sortedMatches = [];

      matches.forEach((match) => {
        let itemKey = -1;

        sortedMatches.forEach((sMatch, subKey) => {
          if (sMatch[0].matchDate === match.matchDate) {
            itemKey = subKey
          }
        });

        if (sortedMatches[itemKey] === undefined || itemKey < 0) {
          sortedMatches.push([match]);
        } else {
          sortedMatches[itemKey].push(match);
        }
      });

      return sortedMatches;
    }
  }
}
</script>

<style>

</style>
