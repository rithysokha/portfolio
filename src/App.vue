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
    <Menu />
    <Banner id="banner" />
    <Skill id="skills" />
    <About id="about" />
    <Work id="work" />
    <Contact id="contact" />
    <ScrollBtn />
 </template>
