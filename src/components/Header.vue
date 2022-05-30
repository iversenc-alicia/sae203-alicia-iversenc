<template>
  <div class="relative flex h-[118px] w-full flex-col gap-2.5">
    <div class="h-[104.98px] flex-shrink-0 flex-grow-0 self-stretch">
      <div class="h-[81px] w-[1378px]">
        <div class="absolute left-[26.5px] top-[15.51px] flex flex-col items-start justify-start gap-2.5">
          <LogoHeader />
        </div>
        <div class="w-100% h-6">
          <div class="absolute left-[244.5px] top-[35.09px] flex w-[1160px] items-center justify-between">
            <RouterLink class="flex-shrink-0 flex-grow-0 text-center text-[22px] font-bold text-gray-50" to="/Accueil"
              >Electro Bancal</RouterLink
            >
            <RouterLink class="flex-shrink-0 flex-grow-0 text-center text-[22px] font-bold text-gray-50" to="/Artistes"
              >Artistes</RouterLink
            >
            <RouterLink class="flex-shrink-0 flex-grow-0 text-center text-[22px] font-bold text-gray-50" to="/Programmation"
              >Programmation</RouterLink
            >
            <RouterLink class="flex-shrink-0 flex-grow-0 text-center text-[22px] font-bold text-gray-50" to="/Festival"
              >Festival</RouterLink
            >
            <RouterLink class="flex-shrink-0 flex-grow-0 text-center text-[22px] font-bold text-gray-50" to="/Festival">Concert</RouterLink>
            <RouterLink class="flex-shrink-0 flex-grow-0 text-center text-[22px] font-bold text-gray-50" to="/Contact">Contact</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoHeader from "./icons/LogoHeader.vue";
export default {
  components: { LogoHeader },
};
</script>
