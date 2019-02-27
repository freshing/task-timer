<template>
  <v-container>
    <v-data-table
   v-model="selected"
   :headers="headers"
   :items="tasks"
   :pagination.sync="pagination"

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
     <tr :active="props.selected" @click="props.expanded = !props.expanded">
       <td>{{ props.item.name }}</td>
       <td class="text-xs-center">{{ props.item.duration }}</td>
       <!-- <td class="text-xs-center">{{ 3 }}</td> -->
       <td class="text-xs-center">
         <v-btn @click="startTask(props.item.id)" icon color="blue" flat v-if="!props.item.is_running && !props.item.is_finished">
           <v-icon>fa-play</v-icon>
         </v-btn>
         <v-btn @click="pauseTask(props.item.id)" icon color="blue" flat v-if=props.item.is_running>
           <v-icon>fa-pause</v-icon>
         </v-btn>
         <v-btn @click="finishTask(props.item.id)" icon color="blue" flat v-if=!props.item.is_finished>
           <v-icon>fa-square</v-icon>
         </v-btn>
         <v-btn @click="deleteTask(props.item.id)" icon color="blue" flat v-if=props.item.is_finished>
           <v-icon>fa-trash</v-icon>
         </v-btn>
       </td>
     </tr>
   </template>
   <template slot="expand" slot-scope="props">
      <TaskDetails v-bind:id="props.item.id"/>
    </template>
  </v-data-table>
  </v-container>

</template>

<script>
	import API from '@/api';
  import TaskDetails from './TaskDetails';

	export default {
		name: "Tasks",

    components: {
      TaskDetails,
		},

    props: [
      'path',
    ],

		data: () => ({
      tasks: [],
      id: null,
      pagination: {
        sortBy: 'name'
      },
      selected: [],
      headers: [
        {
          text: 'Nazwa',
          align: 'left',
          value: 'name'
        },
        { text: 'Czas trwania', value: 'duration' },
        { text: 'Akcje'},
      ],
		}),

		methods: {

      getTasks() {
        API.getTasks().then((tasks) => this.tasks = tasks);
      },

      changeTask() {
        this.$emit('changeTask');
      },

      startTask(id) {
        let task = {
          is_running: true
        }

        API.startTask(id, task).then(() => this.changeTask());
      },

      pauseTask(id) {
        let task = {
          is_running: false
        }

        API.pauseTask(id, task).then(() => this.changeTask());
      },

      finishTask(id) {
        let task = {
          is_finished: true
        }

        API.finishTask(id, task).then(() => this.changeTask());
      },

      deleteTask(id) {
        API.deleteTask(id).then(() => this.changeTask());
      },

      selectTask(id) {
        props.expanded = !props.expanded;
      },

		},

		mounted() {
      this.getTasks();
		},

	}
</script>

<style scoped>

</style>
