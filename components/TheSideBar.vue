<!-- eslint-disable prettier/prettier -->
<template>
  <div class="w-1/5 bg-slate-600 h-screen py-3 px-3">
    <!-- 로그아웃 버튼 -->
    <div class="text-right mb-7">
      <button
        type="button"
        class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-xs px-2 py-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700"
      >
        로그아웃
      </button>
    </div>
    <!-- 드롭다운 -->
    <div class="text-right mb-3">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        class="text-white bg-emerald-700 hover:bg-emerald-700 focus:outline-none font-medium rounded-lg text-xs px-2 py-1.5 text-center inline-flex items-center"
        type="button"
      >
        가나다 순
        <svg
          class="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li>
            <a class="block px-2 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">최신순</a>
          </li>
          <li>
            <a class="block px-2 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">오래된 순</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 리스트 -->
    <div class="pl-5">
      <ul>
        <li class="py-2">
          <button><span class="text-emerald-600 font-bold">쇼핑리스트</span></button>
        </li>
        <li class="py-2">
          <button><span class="text-slate-400 font-bold">쇼핑리스트</span></button>
        </li>
        <li class="py-2">
          <button><span class="text-slate-400 font-bold">쇼핑리스트</span></button>
        </li>
        <li class="py-2">
          <button><span class="text-slate-400 font-bold">쇼핑리스트</span></button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
