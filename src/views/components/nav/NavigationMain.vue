<template>
  <nav id="main-nav" class="flex justify-end px-4 bg-gray-700" role="navigation">
    <div class="flex justify-center flex-1 lg:mr-32 py-2">
      <div class="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
        <div class="absolute inset-y-0 flex items-center pl-2">
          <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          class="w-full pl-8 pr-2 py-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
          type="text"
          placeholder="Search for projects"
          aria-label="Search"
        />
      </div>
    </div>
    <a
      href="#"
      class="no-underline text-white opacity-50 flex items-center px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark"
      >First</a
    >
    <a
      href="#"
      class="no-underline text-white opacity-50 flex items-center px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark"
      >Second</a
    >
    <a
      href="#"
      class="no-underline text-white opacity-50 flex items-center px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark"
      >Third</a
    >
    <a
      href="#"
      class="no-underline text-white opacity-50 flex items-center px-4 border-b border-transparent hover:opacity-100 md:hover:border-grey-dark"
    >
      <i class="fa fa-wallet fa-fw mr-3"></i>
      <span class="text-sm">Payments</span>
    </a>
    <div class="flex text-right align-middle py-2">
      <div>
        <img
          class="inline-block h-10 w-10 rounded-full border-2 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
          src="https://avatars0.githubusercontent.com/u/4323180?s=460&amp;v=4"
          alt=""
        />
      </div>
      <div class="hidden md:block md:flex md:items-center ml-2">
        <span class="text-white text-sm mr-1">Aurthur Musendame</span>
        <div>
          <svg
            class="fill-current text-white h-4 w-4 block opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </nav>
</template>