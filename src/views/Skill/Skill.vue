<script setup>
const skills = [
  {
    id: 1,
    name: 'Front End',
    image: 'fa-brands fa-vuejs',
    technologies: [
      {
        id: 1,
        name: 'Vue.js'
      },
      {
        id: 2,
        name: 'React.js'
      }
    ]
  },
  {
    id: 2,
    name: 'Back End',
    image: "fa-brands fa-java",
    technologies: [
      {
        id: 1,
        name: 'Python Flask'
      },
      {
        id: 2,
        name: 'Java Spring Boot'
      }
    ]
  },
  {
    id: 3,
    name: 'Deployment',
    image: "fa-brands fa-docker",
    technologies: [
      {
        id: 1,
        name: 'Nginx'
      },
      {
        id: 2,
        name: 'Docker'
      },
      {
        id: 3,
        name: 'Linux Server'
      }
    ]
  }
]
</script>
<template>
  <main class="mt-10">
    <div class="sm:flex sm:w-auto sm:justify-center">
      <div
        v-for="skill in skills"
        :key="skill.id"
        class="w-fit-content flex flex-col text-center items-center border-b border-gray-200 dark:border-gray-700 my-5 sm:w-[30vw]"
      >
        <i class="text-[5rem] lg:w-[10vw]" :class="skill.image"></i>
        <div class="flex flex-col items-center mt-1">
          <p class="font-bold mb-1 lg:text-xl">{{ skill.name }}</p>
          <p class="lg:text-xl" v-for="technology in skill.technologies" :key="technology.id">
            {{ technology.name }}
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
