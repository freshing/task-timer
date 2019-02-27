<template>
  <v-container>

    <v-data-table
   v-model="selected"
   :items="entries"
   :headers="headers"
   :pagination.sync="pagination"
   hide-actions

   item-key="name"
   class="elevation-1"
 >
 <template slot="headers" slot-scope="props">
   <tr>
     <th
       v-for="header in props.headers"
       :key="header.text"

     >
       <v-icon small>arrow_upward</v-icon>
       {{ header.text }}
     </th>
   </tr>
 </template>

   <template slot="items" slot-scope="props">
     <tr :active="props.selected" @click="props.selected = !props.selected">
       <td class="text-xs-center">{{ formatDate(props.item.start_date_time) }}</td>
       <td class="text-xs-center">{{ formatDate(props.item.end_date_time) }}</td>

     </tr>
   </template>
 </v-data-table>
</v-container>

</template>

<script>
	import API from '@/api';

	export default {
		name: "TaskDetails",

    props: [
      'id',
    ],

		data: () => ({
      entries: [],

      selected: [],
      pagination: {
        sortBy: 'name'
      },
      headers: [
        { text: 'Start'},
        { text: 'Koniec' },

      ],

		}),

		methods: {
      getEntries() {
        API.getEntries(this.$props.id).then(entries => this.entries = entries);
      },

      formatDate(date) {
        let parseDate = new Date(date);
        return parseDate.toLocaleString('pl-PL');
      },
    },

    mounted() {
      this.getEntries();
      this.formatDate();
    }

	}
</script>

<style scoped>

</style>
