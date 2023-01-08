<template>
  <div
    style="height: 100%; width: 100%; "
    class="d-flex flex-row align-center justify-center"
  >
    <v-card
      class="elevation-1 flex-grow-1"
      max-width="600px"
    >
      <v-toolbar
        dark
        color="primary"
      >
        <v-toolbar-title>Login form</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="authStore.loginData.email"
            variant="outlined"
            prepend-icon="mdi-account-outline"
            name="login"
            label="Login"
            type="text"
          />
          <v-text-field
            id="password"
            v-model="authStore.loginData.password"
            variant="outlined"
            prepend-icon="mdi-lock-outline"
            name="password"
            label="Password"
            type="password"
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          @click="submitForm"
        >
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
import { useAuthStore } from '../../stores/auth';
import router from '../../router';

const authStore = useAuthStore ();
function submitForm () {
    authStore.login(authStore.loginData).then(()=> {
      authStore.fetchUser().then(()=>{
        router.push('/admin/home');
      });
    });
}
</script>
