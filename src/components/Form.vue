<template>
  <form class="mx-auto w-3/4">
    <div class="-mx-3 mb-6 flex flex-wrap">
      <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
        <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-white" for="grid-first-name">Nom</label>
        <input
          class="
            text-grey-600
            mb-3
            block
            w-full
            appearance-none
            rounded
            border border-gray-500
            bg-gray-100
            py-3
            px-4
            leading-tight
            focus:bg-white focus:outline-none
          "
          id="grid-first-name"
          type="text"
          placeholder="[Entrer votre nom ici]"
        />
        <p class="text-xs text-red-600">Champ obligatoire</p>
      </div>
      <div class="w-full px-3 md:w-1/2">
        <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-200" for="grid-last-name">Prénom</label>
        <input
          class="
            text-grey-600
            block
            w-full
            appearance-none
            rounded
            border border-gray-200
            bg-gray-200
            py-3
            px-4
            leading-tight
            focus:border-gray-500 focus:bg-white focus:outline-none
          "
          id="grid-last-name"
          type="text"
          placeholder="[Entrer votre prénom ici]"
        />
      </div>
    </div>
    <div class="-mx-3 mb-6 flex flex-wrap">
      <div class="w-full px-3">
        <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-white" for="grid-password"> E-mail </label>
        <input
          class="
            mb-3
            block
            w-full
            appearance-none
            rounded
            border border-gray-200
            bg-gray-200
            py-3
            px-4
            leading-tight
            text-white
            focus:border-gray-500 focus:bg-white focus:outline-none
          "
          id="email"
          type="email"
          placeholder="[Entrer votre adresse mail ici]"
        />
      </div>
    </div>

    <div class="-mx-3 mb-6 flex flex-wrap">
      <div class="w-full px-3">
        <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-white" for="grid-password"> Message </label>
        <textarea
          class="
            no-resize
            mb-3
            block
            h-48
            w-full
            resize-none
            appearance-none
            rounded
            border border-gray-200
            bg-gray-200
            py-3
            px-4
            leading-tight
            text-gray-700
            focus:border-gray-500 focus:bg-white focus:outline-none
          "
          id="message"
          placeholder="[Entrer votre message ici]"
        ></textarea>
      </div>
    </div>
    <div class="md:flex md:items-center">
      <div class="md:w-1/3">
        <button
          class="
            focus:shadow-outline
            rounded
            border-2
            bg-cyan-600
            py-2
            px-4
            font-bold
            text-white
            shadow
            hover:bg-cyan-900
            focus:outline-none
          "
          type="button"
        >
          Envoyer
        </button>
      </div>
      <div class="md:w-2/3"></div>
    </div>
  </form>
</template>