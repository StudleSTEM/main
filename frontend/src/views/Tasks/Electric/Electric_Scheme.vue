<template>
  <div id="container">
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

      <button id="button" @click="checkIdsAndNavigate">Check your answer</button>
      <h2 id="txt">Your task is to arrange the given parts of code in a correct order to unlock what you made by doing this task aka a reward (click on the dark blue rectangles to move them from one container to another)</h2>
    </div>
    
    
    <!-- Add the button here -->
    
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
  width: 40vw;
  min-width: 16rem;
  padding: 15px;
  min-height: 20rem;
  margin-left: 5vw;
  margin-right: 5vw;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: var(--accent-color);
}

.list ul{
  display: flex;
  align-items: center;
  
}

.list li {
  cursor: pointer;
  width: 30vw;
  min-height: 2rem;

  background: var(--secondary-color);
  margin: 0.25rem 0 0.25rem;
  color: var(--background-color);
  list-style-type: none;
  border-radius: 1rem;


  display: flex;
  justify-content: center;
  align-items: center;
}

#container{
  margin-top: 3.5rem;
  width: 100vw;
  flex-direction: row;
}

#button{
  position: absolute;
  top: 44vh;
  left: 42vw;

  height: 2rem;
  width: auto;
  padding: 0.25rem 0.75rem 0.25rem;
  background: var(--secondary-color);
  color: var(--background-color);
  border-radius: 1rem;

}

#txt{
  top: 48vh;
  position: absolute;
  left: 1vh;
}
</style>
