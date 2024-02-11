<template>
  <div>
    <h1>Registration Page</h1>
    <form @submit.prevent="registerUser">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    registerUser() {
      if (!this.username || !this.password) {
   
        alert('Please fill in all fields');
        return;
      }

   
      console.log('Username:', this.username);
      console.log('Password:', this.password);
    }
  }
}
</script>
