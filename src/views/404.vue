<template>
  <div>
    <main aria-labelledby="pageTitle" class="t flex h-screen items-center justify-center">
      <div class="space-y-4 p-4">
        <div class="flex flex-col items-start space-y-3 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-3">
          <p class="text-9xl font-semibold text-red-600">404</p>
          <div class="space-y-2">
            <h1 id="pageTitle" class="flex items-center space-x-2">
              <svg
                aria-hidden="true"
                class="h-6 w-6 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span class="text-xl font-medium text-gray-200 sm:text-2xl"> Oups! Page non trouvée. </span>
            </h1>
            <p class="text-base font-normal">La page que vous recherchez n'a pas été trouvée</p>
            <p class="text-base font-normal">
              Nous vous conseillons de retourner sur
              <a href="./Accueil" class="text-blue-300 hover:underline">la page d'accueil</a> or ou essayer d'utiliser la fonction
              recherche.
            </p>
          </div>
        </div>

        <form action="#" method="POST">
          <div class="flex items-center justify-center text-black">
            <input
              type="text"
              name="search"
              placeholder="Que recherchez-vous ?"
              class="w-full rounded-l-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-400"
            />
            <button class="focus:ring-primary-light text-grey rounded-r-md bg-cyan-600 p-2 hover:bg-cyan-800">
              <span class="sr-only">Search</span>
              <svg
                aria-hidden="true"
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </main>
    <div class="fixed bottom-5 left-5"></div>
    <div class="fixed bottom-5 right-5">
      <a
        href="./Contact"
        target="_blank"
        class="
          z-50
          inline-block
          rounded-md
          bg-cyan-900
          px-4
          py-2
          text-white
          shadow-sm
          transition-colors
          hover:bg-cyan-800
          focus:outline-none focus:ring
        "
      >
        Nous contacter
      </a>
    </div>
  </div>
</template>

