<template>
  <div class="h-screen bg-gray-200 font-roboto">
    <div class="grid grid-cols-12">
      <div class="col-span-2 h-screen bg-gray-700">
        <side-bar />
      </div>
      <div class="col-span-10">
        <header-main />
        <main class="bg-gray-100 p-4">
          <slot />
        </main>
        <footer class="col-span-12 bg-gray-700 text-center mx-4">Site footer Copyright 2020</footer>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import SideBar from '../components/nav/NavigationAside.vue';
import HeaderMain from '../components/nav/NavigationMain.vue';
export default defineComponent({
  components: {
    HeaderMain,
    SideBar,
  },
});
</script>