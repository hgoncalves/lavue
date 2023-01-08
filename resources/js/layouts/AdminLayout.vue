<template>
  <v-navigation-drawer
    v-model="drawer"
    app
  >
    <div class="d-flex flex-row align-center">
      <img
        class="ma-3"
        src="../static/svg/logo.svg"
        height="40"
        width="40"
        alt=""
      >
      <span class="logo-pre-label">La</span>
      <span class="logo-label">Vue</span>
    </div>

    <v-divider />
    <v-list
      density="compact"
      nav
    >
      <v-list-item
        active-color="primary"
        prepend-icon="mdi-home-outline"
        title="Home"
        :to="{name: 'admin-home'}"
      />
      <v-list-item
        active-color="primary"
        prepend-icon="mdi-apps"
        title="Apps"
        :to="{name: 'admin-apps'}"
      />
      <v-list-item
        active-color="primary"
        prepend-icon="mdi-archive-outline"
        title="Projects"
        :to="{name: 'admin-projects'}"
      />
      <v-list-item
        active-color="primary"
        prepend-icon="mdi-notebook-outline"
        title="Contacts"
        :to="{name: 'admin-contacts'}"
      />
      <v-list-item
        active-color="primary"
        prepend-icon="mdi-file-cabinet"
        title="Files"
        :to="{name: 'admin-storage'}"
      />
      <v-list-item
        active-color="primary"
        prepend-icon="mdi-cog-outline"
        title="Settings"
        :to="{name: 'admin-settings'}"
      />
    </v-list>
  </v-navigation-drawer>

  <v-app-bar
    app
    border
    flat
    class="outlined"
  >
    <v-app-bar-nav-icon @click="drawer = !drawer" />

    <v-toolbar-title>My Application</v-toolbar-title>

    <v-spacer />
    <the-language-switch />
    <v-menu>
      <template #activator="{props}">
        <v-avatar
          color="primary user-menu"
          class="mr-4"
          v-bind="props"
        >
          {{ initials }}
        </v-avatar>
      </template>
      <v-list density="compact">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="item.action"
        >
          <template #prepend>
            <v-icon :icon="item.icon" />
          </template>
          <v-list-item-title class="mr-2">
            {{ $t(item.title) }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>
    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <!-- If using vue-router -->
      <router-view />
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</template>

<script setup>
import { useAuthStore } from '../stores/auth';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import TheLanguageSwitch from '../components/TheLanguageSwitch.vue';

const router = useRouter();
const logout = function () {
  authStore.logout().then(() => {
    router.push('/login');
  });
};

const goToProfile = function () {
  router.push({ name: 'admin-auth-profile' });
};

const items = [
  {
    title: 'routes.profile', icon: 'mdi-card-account-details-outline', action: goToProfile
  },
  {
    title: 'actions.logout', icon: 'mdi-logout', action: logout
  }
];

const initials = computed(() => {
  const name = authStore?.user?.name || null;
  return getInitials(name);
});
const authStore = useAuthStore();
const drawer = ref(true);

const getInitials = function (name) {
  if (name) {
    let parts = name.split(' ');
    let initials = '';
    for (let i = 0; i < parts.length; i++) {
      if (parts[i].length > 0 && parts[i] !== '') {
        initials += parts[i][0];
      }
    }
    return initials;
  }
  return '';
};
</script>

<style lang="scss" scoped>
.outlined {
  border-left: unset;
  border-top: unset;
  border-right: unset;
}

.logo-pre-label {
  font-size: 40px;
  font-weight: bold;
  color: #29AAE1
}

.logo-label {
  font-size: 40px;
  font-weight: bold;

  color: #AC60A1
}

.user-menu {
  &:hover {
    cursor: pointer;
  }
}
</style>
