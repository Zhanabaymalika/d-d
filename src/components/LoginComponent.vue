<template>
  <div>
    <h1>Login Component</h1>
    <form @submit.prevent="loginUser">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>
      <button type="submit">Login</button>
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
    loginUser() {
      
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      
    }
  }
}
</script>
