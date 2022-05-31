<template>
  <div class="relative mb-20 h-[404px] w-full">
    <img src="/public/img/baniere.webp" class="absolute -z-10 h-[370px] w-full object-cover" />

    <div class="absolute left-10 top-[344px] flex items-center justify-center bg-cyan-900 px-5 py-3">
      <p class="flex-shrink-0 flex-grow-0 text-left text-2xl font-semibold text-gray-50 lg:text-4xl">{{ page }}</p>
    </div>
  </div>
</template>

<script>
import LogoHeader from "./icons/LogoHeader.vue";
export default {
  props: {
    page: String,
  },
  components: { LogoHeader },
};
</script>