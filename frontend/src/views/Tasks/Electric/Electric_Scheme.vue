<template>
  <div>
    <h1>To-Do List</h1>
    <div class="column">
      <h2>Tasks</h2>
      <ul class="list">
        <li v-for="task in tasks" @click="markAsDone(task)">{{ task.name }}</li>
      </ul>
    </div>
    <div class="column">
      <h2>Done Tasks</h2>
      <ul class="list">
        <li v-for="task in doneTasks" @click="markAsUndone(task)">{{ task.name }}</li>
      </ul>
    </div>
    
    <!-- Add the button here -->
    <button @click="checkIdsAndNavigate">Check and Navigate</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "ToDoList",
  data() {
    return {
      tasks: [
        { id: 1, name: 'Variables' },
        { id: 5, name: 'Game End' },
        { id: 2, name: 'Move' },
        { id: 3, name: 'Collect Food' },
        { id: 4, name: 'Game Logic' },
        { id: 6, name: 'Game Restart' },
      ],
      doneTasks: [],
    };
  },
  methods: {
    markAsDone(task) {
      this.doneTasks.push(task);
      this.tasks.splice(this.tasks.indexOf(task), 1);
    },
    markAsUndone(task) {
      this.tasks.push(task);
      this.doneTasks.splice(this.doneTasks.indexOf(task), 1);
    },
    checkIdsAndNavigate() {
      // Check if all IDs are in order
      const allIdsInOrder = this.tasks.every((task, index) => task.id === index + 1);

      if (allIdsInOrder) {
        // If all IDs are in order, navigate to /uzdevumi/electricscheme/reward
        this.$router.push('/uzdevumi/electricscheme/reward');
      } else {
        // If not, you can show a message or handle it accordingly
        alert('Not all IDs are in order!');
      }
    },
  },
};
</script>

<style scoped>
.column {
  float: left;
  width: 25vw;
  padding: 15px;
}

.list li {
  cursor: pointer;
}
</style>
