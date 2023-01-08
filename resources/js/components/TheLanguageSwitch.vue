<template>
  <v-menu
    rounded
    offset-y
    color="primary"
  >
    <template #activator="{props}">
      <v-btn
        variant="plain"
        color="primary"
        v-bind="props"
      >
        <v-icon>mdi-earth</v-icon>
        {{ global.locale }}
      </v-btn>
    </template>
    <v-list density="compact">
      <v-list-item
        v-for="(item, i) in languages"
        :key="i"
        @click="setLocale(item)"
      >
        <!--        <template v-slot:prepend>-->
        <!--          <img :src="getImageUrl(item)" :alt="item">-->
        <!--        </template>-->
        <v-list-item-title class="mr-2">
          {{ $t('languages.' + item) }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>

const { global } = window.i18n;
const languages = ['en', 'fr'];
const setLocale = function (locale) {
  global.locale = locale;
};

// TODO: FIX - for some reason new URL always returns undefined
// once this is fixed we can uncomment flag image in template
function getImageUrl (name) {
  return new URL(`@/static/svg/flags/${name}.png`, import.meta.url).href;
}
</script>

<style scoped>

</style>
