<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100/10 px-4">
    <div class="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
      <h2 class="text-2xl font-bold text-center text-gray-800 mb-6"><slot name="heading" /></h2>
      <slot name="main" />
    </div>
  </div>
</template>

<script setup></script>
