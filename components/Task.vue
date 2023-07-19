<template>
 <div :class="`task ${task.done ? 'is-complete' : ''}`">
  <div class="content">
    {{ task.content }}
  </div>
  <button :class="`${task.done ? 'Undone' : 'Done'} btn`" @click="toggleDone">{{ task.done ? 'Undone' : 'Done' }}</button>
  <button  @click="removeTask" class="delete btn">Delete</button>
 </div>
</template>

<script >
export default {
 props: ['task'],
 methods: {
  toggleDone() {
    this.$store.commit('TOGGLE_TASK', this.task);
  },
  removeTask() {
    this.$store.commit('REMOVE_TASK', this.task)
  }
 }
}
</script>

<style lang="css" scope>

.btn {
  appearance: none;
	border: none;
	outline: none;
	text-transform: uppercase;
	font-weight: bold;
  color: white;
	font-size: 0.875rem;
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	margin-left: 0.5rem;
	cursor: pointer;
}

.Undone {
  background: yellow;
}

.Done {
	background: rgb(47, 214, 111);
}
</style>
