<template>
  <div class="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
    <!-- Sidebar -->
    <Sidebar :is-open="isSidebarOpen" @close="isSidebarOpen = false" />

    <!-- Mobile Menu Button -->
    <button
      class="md:hidden fixed top-4 left-4 z-30 p-2 bg-white dark:bg-gray-800 rounded-lg shadow"
      @click="isSidebarOpen = true"
    >
      <Icon name="heroicons:bars-3" class="w-5 h-5 text-gray-800 dark:text-white" />
    </button>

    <!-- Main Content -->
    <div class="flex flex-col flex-1 overflow-hidden">
      <!-- Top Nav -->
      <Navbar @toggle-sidebar="toggleSidebar" />

      <!-- Page content -->
      <main class="flex-1 overflow-y-auto p-4 md:p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import Sidebar from '~/layouts/dashboard/Sidebar.vue'
  import Navbar from '~/layouts/dashboard/Navbar.vue'

  const isSidebarOpen = ref(false)

  function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value
  }
</script>
