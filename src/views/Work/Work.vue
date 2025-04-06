<script setup>
const feImage =
  'https://res.cloudinary.com/dbiso7uht/image/upload/f_auto,q_5/v1706158671/Screenshot_2024-01-25_114849_cd9lge.png'
const evaImage =
  'https://res.cloudinary.com/dbiso7uht/image/upload/f_auto,q_5/v1706158663/Screenshot_2024-01-25_115150_wfgq5v.png'
const webboardImage =
  'https://res.cloudinary.com/dbiso7uht/image/upload/f_auto,q_5/v1743947750/Screenshot_2025-04-06_205327_dnod8z.png'
const works = [
  {
    id: 1,
    name: 'FE RUPP Website',
    image: feImage,
    link: 'https://www.fe.rupp.edu.kh/',
    technologies: [
      {
        id: 1,
        name: 'Vue.js, '
      },
      {
        id: 2,
        name: 'Bootstrap, '
      },
      {
        id: 3,
        name: 'Strapi CMS'
      }
    ]
  },
  {
    id: 2,
    name: 'Evaluation System',
    image: evaImage,
    link: 'https://eva.rupp.support/',
    technologies: [
       {
        id: 1,
        name: 'Next.js,'
      },
       {
        id: 2,
        name: 'Tailwind CSS,'
      },
      {
        id: 3,
        name: 'Python Flask'
      }
    ]
  },
  {
    id: 3,
    name: 'Webboard (In development stage)',
    image: webboardImage,
    link: 'https://derleng.site/',
    technologies: [
      {
        id: 1,
        name: 'Nuxt3 (Full stack), '
      },
      {
        id: 2,
        name: 'Tailwind CSS, '
      },
      {
        id: 3,
        name: 'Websocket (Real time update)'
      }
    ]
  }
]
</script>
<template>
  <main class="my-20">
    <p class="text-center text-3xl font-semibold">Contributed projects</p>
  <div class="flex justify-center items-center ">
    <div class="my-2 w-[90vw] grid-cols-1 sm:flex sm:w-screen items-center sm:justify-center sm:gap-10">
      <div
        v-for="work in works"
        :key="work.id"
        class="rounded-md my-2 sm:w-[25vw] lg:w-[30vw] xl:h-[25vw] shadow-md  hover:shadow-xl transition-all duration-300 dark:hover:shadow-gray-800"
      >
        <a :href="work.link" target="_blank">
        <div class="flex flex-col items-center text-center sm:h-[28vw] xl:h-[25vw] border-2 border-gray-200 dark:border-gray-800">
          <img loading="lazy" class=" " :src="work.image" alt="Work" />
          <div class="flex flex-col items-center text-center">
            <p class="font-bold mt-2">{{ work.name }}</p>
            <div class="flex sm:block">
              <p v-for="technology in work.technologies" :key="technology.id" class="mr-1">
                {{ technology.name }}
              </p>
            </div>
          </div>
        </div>
    </a>
      </div>
    </div>
  </div>
</main>
</template>
