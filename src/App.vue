<script setup>
import Menu from './views/Menu/Menu.vue'
import Banner from './views/Banner/Banner.vue'
import Skill from './views/Skill/Skill.vue'
import About from './views/About/About.vue'
import Work from './views/Work/Work.vue'
import Contact from './views/Contact/Contact.vue'
import ScrollBtn from './components/Scroll-Btn/Scroll-Btn.vue'
</script>

<template>
  <div class="bg-[#f9f9f9] dark:bg-gray-900 text-gray-900 dark:text-[#f9f9f9]">
    <Menu />
    <Banner id="banner" />
    <Skill id="skills" />
    <About id="about" />
    <Work id="work" />
    <Contact id="contact" />
    <ScrollBtn />
  </div>
 </template>
