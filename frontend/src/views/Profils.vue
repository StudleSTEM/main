<template>
  <div class="profile">
    <div class="profile-photo">
      <img :src="profileData.photo" alt="Profile Photo" @click="uploadPhoto">
      <input type="file" ref="photoInput" style="display: none" @change="handlePhotoChange">
    </div>
    <div class="info">
      <div class="info-item">
        <strong>Name:</strong>
        <span v-if="!isEditing">{{ profileData.name }}</span>
        <input v-else v-model="editedProfileData.name" placeholder="Enter your name" />
      </div>
      <div class="info-item">
        <strong>Grade:</strong>
        <span v-if="!isEditing">{{ profileData.grade }}</span>
        <input v-else v-model="editedProfileData.grade" placeholder="Enter your grade" />
      </div>
      <div class="info-item">
        <strong>School:</strong>
        <span v-if="!isEditing">{{ profileData.school }}</span>
        <input v-else v-model="editedProfileData.school" placeholder="Enter your school" />
      </div>
      <div class="info-item">
        <strong>Email:</strong>
        <span v-if="!isEditing">{{ profileData.email }}</span>
        <input v-else v-model="editedProfileData.email" placeholder="Enter your email" />
      </div>
      <button v-if="!isEditing" @click="toggleEdit">Edit Profile</button>
      <button v-else @click="saveChanges">Save Changes</button>
    </div>
    <div class="grades">
      <h3>Grades:</h3>
      <ul>
        <li v-for="(grade, subject) in profileData.grades" :key="subject">
          <strong>{{ subject }}:</strong> {{ grade }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileData: {
        name: 'John Doe',
        grade: 10,
        school: 'Online High School',
        email: 'john.doe@example.com',
        photo: 'https://via.placeholder.com/100', // Placeholder photo URL
        grades: {
          Math: 'A',
          Science: 'B',
          English: 'A-',
          History: 'B+',
          Art: 'A'
        }
      },
      editedProfileData: {},
      isEditing: false
    };
  },
  methods: {
    uploadPhoto() {
      this.$refs.photoInput.click();
    },
    handlePhotoChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.profileData.photo = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    toggleEdit() {
      this.isEditing = !this.isEditing;
      if (this.isEditing) {
        // Make a copy of the original data for editing
        this.editedProfileData = { ...this.profileData };
      }
    },
    saveChanges() {
      // Update the profile data with edited data
      this.profileData = { ...this.editedProfileData };
      this.isEditing = false;
    }
  }
};
</script>

<style scoped>
.profile {
  margin-top: 250px;

  display: flex;
  align-items: flex-start;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #f0f8ff; /* Light blue background */
}

.profile .profile-photo {
  margin-right: 20px;
}

.profile .profile-photo img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
}

.profile .profile-photo input[type="file"] {
  display: none;
}

.profile .info {
  flex: 1;
}

.profile .info-item {
  margin-bottom: 10px;
}

.profile .grades {
  flex: 1;
}

.profile .grades h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.profile .grades ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.profile .grades li {
  margin-bottom: 5px;
}

.profile strong {
  font-weight: bold;
  margin-right: 5px;
}

.profile button {
  padding: 10px 20px;
  margin-top: 10px;
  font-size: 1em;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #008000; /* Зелёный цвет */
  color: #fff; /* Белый текст */
}

.profile button:hover {
  background-color: #006400; /* Темно-зелёный при наведении */
}

.profile button:focus {
  outline: none;
}

.profile .info-item input {
  border: 1px solid #ccc; /* Стандартная рамка */
  padding: 5px;
  width: 100%; /* Заполнение всей доступной ширины */
}

.profile .info-item input:focus {
  border: 1px solid #008000; /* Зелёная рамка при активации поля */
}

.profile .info-item input::placeholder {
  color: #ccc; /* Цвет placeholder */
}

.profile button {
  padding: 10px 20px;
  margin-top: 10px;
  font-size: 1em;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #008000; /* Зелёный цвет */
  color: #fff; /* Белый текст */
}

.profile button:hover {
  background-color: #006400; /* Темно-зелёный при наведении */
}

.profile button:focus {
  outline: none;
}
</style>
