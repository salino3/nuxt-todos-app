
export const state = () => ({
  tasks: JSON.parse(sessionStorage.getItem("tasksData")) || [],
});

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks = [{content: task, done: false}, ...state.tasks];
    sessionStorage.setItem("tasksData", JSON.stringify(state.tasks));
  },
  REMOVE_TASK (state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1);
    sessionStorage.setItem("tasksData", JSON.stringify(state.tasks));
  },
  TOGGLE_TASK(state, task) {
    task.done = !task.done;
    sessionStorage.setItem("tasksData", JSON.stringify(state.tasks));


  }
}
