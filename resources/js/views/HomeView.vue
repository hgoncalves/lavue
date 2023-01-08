<template>
  <div>
    Home View {{ authStore.authenticated }}
    <br>
    {{ $t('routes.home') }}
  </div>
</template>
<script setup>
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
</script>
