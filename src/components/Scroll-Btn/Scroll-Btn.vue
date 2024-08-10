<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const scrollPosition = ref(0);
const updateScroll = () => {
  scrollPosition.value = window.scrollY;
};
onMounted(() => {
  window.addEventListener('scroll', updateScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll);
});
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>
<template>
    <main class="right-0 bottom-0 fixed mr-5 mb-1  z-50">
        <div class="" v-show="scrollPosition > 100">
            <i class="fa-solid fa-chevron-up h-5 2xl:w-8 2xl:h-8 text-md sm:text-xl hover:scale-125 cursor-pointer transition-all duration-300" @click="scrollToTop"></i>
          </div>
    </main>
</template>