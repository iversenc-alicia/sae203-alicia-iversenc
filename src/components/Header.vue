<template>
  <div class="relative flex h-[118px] w-[1440px] flex-col items-start justify-start gap-2.5">
    <div class="h-[104.98px] flex-shrink-0 flex-grow-0 self-stretch">
      <svg
        width="1440"
        height="109"
        viewBox="0 0 1440 109"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="absolute left-[-0.5px] top-[-0.5px]"
        preserveAspectRatio="none"
      >
        <g style="mix-blend-mode: luminosity" filter="url(#filter0_f_1272_3654)">
          <path d="M0 0H1440V104.979H0V0Z" fill="#00141D"></path>
        </g>
        <defs>
          <filter
            id="filter0_f_1272_3654"
            x="-4"
            y="-4"
            width="1448"
            height="112.979"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_1272_3654"></feGaussianBlur>
          </filter>
        </defs>
      </svg>
      <div class="h-[81px] w-[1378px]">
        <div class="absolute left-[26.5px] top-[15.51px] flex flex-col items-start justify-start gap-2.5">
          <LogoHeader />
        </div>
        <div class="w-100% h-6">
          <div class="absolute left-[244.5px] top-[35.09px] flex w-[1160px] items-center justify-between">
            <RouterLink class="flex-shrink-0 flex-grow-0 text-center text-[22px] font-bold text-gray-50" to="/Accueil"
              >Electro Bancal</RouterLink
            >
            <RouterLink class="flex-shrink-0 flex-grow-0 text-center text-[22px] font-bold text-gray-50" to="/Programmation"
              >Programmation</RouterLink
            >
            <RouterLink class="flex-shrink-0 flex-grow-0 text-center text-[22px] font-bold text-gray-50" to="/Artistes"
              >Artistes</RouterLink
            >
            <RouterLink class="flex-shrink-0 flex-grow-0 text-center text-[22px] font-bold text-gray-50" to="/Festival"
              >Festival</RouterLink
            >
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
