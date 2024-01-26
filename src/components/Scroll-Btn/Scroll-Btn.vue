<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import iconUp from "../../assets/pictures/angle-up-solid.svg";

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
    <main class="right-0 bottom-0 fixed mr-5 mb-2  z-50">
        <div class="" v-show="scrollPosition > 100">
            <img
              class="w-6 h-6 2xl:w-8 2xl:h-8 hover:scale-125 transition-all duration-300"
              :src="iconUp"
              alt="icon up"
              @click="scrollToTop"
            />
          </div>
    </main>
</template>