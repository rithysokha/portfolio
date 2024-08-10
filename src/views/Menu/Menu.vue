<script setup>
import { RouterLink } from "vue-router";

</script>
<template> 
  <main class="flex justify-center sm:justify-end h-10 fixed w-[100vw]  bottom-0 sm:top-0 z-40 items-center">
    <nav class="absolute">
      <div class="flex space-x-6 items-center justify-center sm:mr-10">
        <RouterLink class="hover:translate-y-1 2xl:text-xl transition-all duration-300 text-gray-900 dark:text-[#f9f9f9]" to="/about">About me</RouterLink>
        <RouterLink class="hover:translate-y-1 2xl:text-xl transition-all duration-300 text-gray-900 dark:text-[#f9f9f9]" to="/works">Works</RouterLink>
        <RouterLink class="hover:translate-y-1 2xl:text-xl transition-all duration-300 text-gray-900 dark:text-[#f9f9f9]" to="/contact">Contact</RouterLink>
      </div>
    </nav>
    
  </main>
</template>