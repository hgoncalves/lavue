<template>
  <div>
    Storage View {{ authStore.authenticated }}
  </div>
</template>
<script setup>
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
</script>
