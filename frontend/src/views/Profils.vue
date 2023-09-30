<template>
  <NavBar />
  <div>
    <div id="main">
      <div class="profile-container">
        <div class="profile-info">
          <div class="profile-image-container">
            <img
              v-if="!isEditing"
              src="https://placekitten.com/200/200"
              alt="Profile Image"
              class="profile-image"
            />
          </div>
          <div class="profile-details">
            <h1 v-if="!isEditing">{{ editedName }}</h1>
            <p v-if="!isEditing">Email: {{ editedEmail }}</p>
            <p v-if="!isEditing">Interests: {{ editedInterests }}</p>
            <!-- Add other details here -->
          </div>
        </div>
        <div class="button-container">
          <button @click="toggleEditing" class="edit-button">
            {{ isEditing ? 'Save' : 'Edit' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
      editedName: 'John Doe',
      editedEmail: 'john.doe@example.com',
      editedLocation: 'New York, USA',
      editedInterests: 'Web Development, Design, Music',
      editedBio:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere varius urna vitae suscipit.'
    };
  },
  methods: {
    toggleEditing() {
      this.isEditing = !this.isEditing;
    }
  }
};
</script>

<style scoped>
#main {
  margin-top: 6rem;
  display: flex;
  justify-content: center;
}

.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

.profile-info {
  display: flex;
  flex-direction: row;
  padding: 20px;
  align-items: center;
}

.profile-image-container {
  display: inline-block;
  margin-right: 20px; /* Adjust as needed */
}

.profile-image {
  border-radius: 50%;
  object-fit: cover;
  width: 150px;
  height: 150px;
}

.profile-details {
  padding: 0 20px;
  text-align: left;
}

.profile-details h1 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333333;
}

.profile-details p {
  font-size: 16px;
  margin-bottom: 5px;
  color: #555555;
}

.profile-details textarea {
  width: 100%;
  height: 80px;
  padding: 5px;
}

.button-container {
  margin-top: 20px;
  text-align: center;
}

.edit-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.edit-button:hover {
  background-color: #45a049;
}

.edit-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
