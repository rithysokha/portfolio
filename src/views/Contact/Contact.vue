<script setup>
const contacts=[
    {
        id:1,
        name:'Phone',
        icon: "fa-solid fa-phone",
        value:'tel:+855 968 325 154',
        placeHolder:'096 832 5154'
    },
    {
        id:2,
        name:'Email',
        icon: "fa-solid fa-envelope",
        value:'mailto:skhrithy@gmail.com',
        placeHolder:'skhrithy@gmail.com'
    },
    {
        id:3,
        name:'Instagram',
        icon: "fa-brands fa-instagram",
        value:'https://www.instagram.com/sokharithy/',
        placeHolder:'@sokharithy'
    },
    {
        id:4,
        name:'Facebook',
        icon: "fa-brands fa-facebook",
        value:'https://facebook.com/skhrithy/',
        placeHolder:'@skhrithy'
    },
    {
        id:5,
        name:'Github',
        icon: "fa-brands fa-github",
        value:'https://github.com/rithysokha',
        placeHolder:'@rithysokha'
    },
    {
        id:6,
        name:'Telegram',
        icon: "fa-brands fa-telegram",
        value:'https://t.me/sokharithy',
        placeHolder:'@sokharithy'
    },
    {
        id:7,
        name:'Linkedin',
        icon: "fa-brands fa-linkedin",
        value:'https://kh.linkedin.com/in/sokharithy',
        placeHolder:'sokha rithy'
    }

]
</script>
<template>
    <main class="pb-40">
        <div class="text-center flex flex-col items-center">
            <p class="text-3xl font-semibold">
                Let's work together!

            </p>
            <p class="w-[90vw] sm:w-[60vw] lg:w-[45vw]">
                I'm always happy and wish to join your develop team to make things happen in a quick and efficient way.
                Feel free to contact me on any of the following platforms.
            </p>
        </div>
        <div  class="flex justify-center">
        <div class="grid grid-cols-4 gap-5 sm:gap-7 lg:grid-cols-7 my-10 w-[100vw] lg:w-[70vw] justify-items-center">
            <div v-for="contact in contacts" :key="contact.id" class="relative group">
                <a :href="contact.value">
                  <i class="w-8 text-2xl sm:text-3xl hover:scale-125 transition-all duration-300" :class="contact.icon"></i>
                </a>
                <div class="whitespace-nowrap absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gray-200 text-black text-xs rounded-md p-1">
                    {{contact.placeHolder}}
                </div>
            </div>
        </div>

    </div>
    </main>
</template>