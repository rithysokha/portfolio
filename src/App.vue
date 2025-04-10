<script setup>
import { onMounted, onUnmounted } from 'vue'
import Menu from './views/Menu/Menu.vue'
import Banner from './views/Banner/Banner.vue'
import Skill from './views/Skill/Skill.vue'
import About from './views/About/About.vue'
import Work from './views/Work/Work.vue'
import Contact from './views/Contact/Contact.vue'
import ScrollBtn from './components/Scroll-Btn/Scroll-Btn.vue'
let sensor

const applyDarkMode = (isDark) => {
  document.documentElement.classList.toggle('dark', isDark)
}
onMounted(() => {
  if ('AmbientLightSensor' in window) {
    try {
      sensor = new AmbientLightSensor()
      sensor.addEventListener('reading', () => {
        const lux = sensor.illuminance
        applyDarkMode(lux < 50)
      })
      sensor.start()
    } catch (err) {
      console.warn('AmbientLightSensor error:', err)
    }
  } else {
    console.warn('Ambient Light Sensor not supported')
  }
})
onUnmounted(() => {
  if (sensor) {
    sensor.stop()
  }
})
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
