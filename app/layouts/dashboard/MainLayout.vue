<template>
  <div class="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
    <!-- Sidebar -->
    <Sidebar :is-open="isSidebarOpen" @close="isSidebarOpen = false" />

    <!-- Mobile Menu Button -->
    <button
      v-if="!isSidebarOpen"
      class="md:hidden fixed top-4 left-4 z-30 p-2.5 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
      @click="isSidebarOpen = true"
    >
      <svg
        class="w-5 h-5 text-gray-700 dark:text-gray-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <!-- Main Content -->
    <div class="flex flex-col flex-1 overflow-hidden">
      <!-- Top Nav -->
      <Navbar @toggle-sidebar="toggleSidebar" />

      <!-- Page content -->
      <main class="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <div class="max-w-full mx-auto p-4 md:p-6 lg:p-8">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
  import { ref, watch } from 'vue'
  import { useRoute } from '#imports'
  import Sidebar from '~/layouts/dashboard/Sidebar.vue'
  import Navbar from '~/layouts/dashboard/Navbar.vue'

  const route = useRoute()
  const isSidebarOpen = ref(false)

  function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  // Close sidebar on mobile when route changes
  watch(
    () => route.path,
    () => {
      if (window.innerWidth < 768) {
        isSidebarOpen.value = false
      }
    }
  )
</script>

<style>
  /* Smooth scrolling */
  main {
    scroll-behavior: smooth;
  }
</style>
