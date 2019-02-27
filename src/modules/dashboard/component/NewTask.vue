<template>
  <v-container>
    <v-layout column xs3>
      <v-flex xs3 >
          <v-text-field label="Nazwa zadania"
                        v-model="taskName"
                        @input="check"
                        required >
          </v-text-field>
      </v-flex>
      <v-btn @click="addTask" :disabled=!valid :class="valid ? 'blue white--text' : 'disabled'">Utwórz</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
  import API from '@/api';

  export default {
    name: "Upload",

    props: [
      'path'
    ],

    data() {
      return {
        taskName: "",
        valid: false,
      }
    },

    methods: {
      check() {
        this.valid = this.taskName == '' ? false : true;
      },

      addTask() {
        let task = {
          name: this.taskName
        }
        API.addTask(task);
        this.$emit('addNewTask')
      }
    }
  }
</script>

<style scoped>

</style>
