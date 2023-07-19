<template>
 <main>
  <h1>Task Board</h1>
  <h2>Create a list of tasks</h2>
  <div class="create-new">
    <input
     type="text"
     v-model="newTask"
     placeholder="Add a new task"
     @keypress.enter="addTask"
    >
    <button @click="addTask">Add</button>
  </div>
  <div class="tasks">
    <Task
     v-for="(task, index) in $store.state.tasks"
     :key="index"
     :task="task"
    />
    <p class="text-no-tasks" v-if="$store.state.tasks.length === 0">
      * There are no tasks.. *
    </p>

  </div>
 </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      newTask: ""
    }
  },
  methods:  {
    addTask() {
      if(this.newTask) {
        this.$store.commit('ADD_TASK', this.newTask);
        this.newTask = '';
      }
    }
  }
}
</script>

<style>

.text-no-tasks {
  text-align: center;
  font-size: 22px;
}
</style>
