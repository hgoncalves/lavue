<template>
  <div class="d-flex flex-row align-center justify-center page-container">
    <v-card
      variant="flat"
      style="background-color: transparent"
    >
      <div
        class="d-flex flex-column justify-center align-center"
        style="max-width: 800px"
      >
        <img
          class="image"
          src="../static/svg/404.svg"
          alt="404"
        >
        <div class="text-center pt-12">
          <h2 class="message">
            SORRY PAGE NOT FOUND
          </h2>
        </div>
        <div>
          <v-btn
            class="mt-4"
            color="primary"
            :block="false"
            @click="goHome"
          >
            Back Home
          </v-btn>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = function () {
  router.push({ name: 'admin-home' });
};
</script>

<style scoped lang="scss">
.page-container {
  height: 100%;
  width: 100%;
}

.message {
  color: #3F3D56;
}

.image {
  max-width: 100%;
  max-height: 100%;
}
</style>
