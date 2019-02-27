<template>
  <v-layout column xs3>
    <NewTask @addNewTask="update" v-bind:path="path" :key="newTask"/>
    <Tasks @changeTask="changeTask" :key="tasks" v-bind:path="path" />
  </v-layout>
</template>

<script>
  import Tasks from './component/Tasks';
  import NewTask from './component/NewTask';


	export default {
		name: "Dashboard",

    data() {
      return {
        tasks: 10,
        newTask: 0,
        path: '',
      }
    },

		components: {
      Tasks,
      NewTask
		},

    methods: {
      update() {
        this.tasks += 1;
        this.newTask += 1;
      },

      changeTask() {
        this.tasks += 1;
      },
    }
	}
</script>

<style scoped>
</style>
