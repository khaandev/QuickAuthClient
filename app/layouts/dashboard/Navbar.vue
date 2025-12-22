<template>
  <header
    class="bg-white dark:bg-gray-800 shadow px-4 py-3 flex justify-between items-center border-b border-gray-200 dark:border-gray-700"
  >
    <!-- Left: Sidebar toggle + Title -->
    <div class="flex items-center gap-4">
      <button
        class="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        @click="$emit('toggleSidebar')"
      >
        <Icon name="heroicons:bars-3" class="w-5 h-5" />
      </button>
      <h1 class="text-lg font-semibold text-gray-800 dark:text-white">Admin Dashboard</h1>
    </div>

    <!-- Right controls -->
    <div class="flex items-center gap-3">
      <!-- Dark/Light Mode -->

      <!-- Profile Dropdown -->
      <div v-click-outside="() => (dropdownOpen = false)" class="relative">
        <button
          class="flex items-center gap-2 hover:opacity-80 transition-opacity"
          @click="dropdownOpen = !dropdownOpen"
        >
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin"
            alt="Avatar"
            class="w-8 h-8 rounded-full border-2 border-gray-300 dark:border-gray-600"
          >
          <Icon
            name="heroicons:chevron-down"
            class="w-4 h-4 text-gray-500 dark:text-gray-300 transition-transform"
            :class="{ 'rotate-180': dropdownOpen }"
          />
        </button>

        <div
          v-if="dropdownOpen"
          class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 z-50 border border-gray-200 dark:border-gray-700"
        >
          <NuxtLink
            to="/profile"
            class="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-200"
            @click="dropdownOpen = false"
          >
            <Icon name="heroicons:user" class="w-4 h-4" /> Profile
          </NuxtLink>
          <NuxtLink
            to="/settings"
            class="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-200"
            @click="dropdownOpen = false"
          >
            <Icon name="heroicons:cog-6-tooth" class="w-4 h-4" /> Settings
          </NuxtLink>
          <div class="border-t border-gray-200 dark:border-gray-700 my-1"/>
          <button
            class="flex items-center gap-3 w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm text-red-600 dark:text-red-400"
            @click="handeLogout"
          >
            <Icon name="heroicons:arrow-right-on-rectangle" class="w-4 h-4" /> Logout
          </button>
        </div>
      </div>
    </div>

    <!-- Notification Slide-Out Panel -->
    <transition name="slide">
      <div
        v-show="showNotification"
        class="fixed top-0 right-0 z-40 w-full max-w-sm h-full bg-white dark:bg-gray-800 shadow-xl p-6 overflow-y-auto border-l border-gray-200 dark:border-gray-700"
      >
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-lg font-semibold text-gray-800 dark:text-white">Notifications</h2>
          <button
            class="text-gray-500 hover:text-gray-800 dark:hover:text-white p-1"
            @click="showNotification = false"
          >
            <Icon name="heroicons:x-mark" class="w-5 h-5" />
          </button>
        </div>
        <div class="space-y-4">
          <div
            v-for="(notification, index) in notifications"
            :key="index"
            class="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
          >
            <div class="flex items-start gap-3">
              <div
                class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                :class="{
                  'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300':
                    notification.type === 'info',
                  'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300':
                    notification.type === 'warning',
                  'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300':
                    notification.type === 'success',
                }"
              >
                <Icon :name="notification.icon" class="w-4 h-4" />
              </div>
              <div class="flex-1">
                <p class="text-sm font-medium text-gray-800 dark:text-white">
                  {{ notification.title }}
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">{{ notification.time }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
  import { ref } from 'vue'

  const dropdownOpen = ref(false)
  const showNotification = ref(false)

  // Mock notifications
  const notifications = [
    {
      type: 'info',
      icon: 'heroicons:user-plus',
      title: 'New user registered',
      time: '5 minutes ago',
    },
    {
      type: 'warning',
      icon: 'heroicons:exclamation-triangle',
      title: 'Server load high',
      time: '1 hour ago',
    },
    {
      type: 'success',
      icon: 'heroicons:megaphone',
      title: 'New announcement posted',
      time: '2 hours ago',
    },
  ]

  // function toggleDark() {
  //   colorMode.preference = isDark.value ? 'light' : 'dark'
  // }

  const handeLogout = async () => {
    // Your logout logic here
    console.log('Logging out...')
  }
</script>

<style scoped>
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.3s ease;
  }
  .slide-enter-from,
  .slide-leave-to {
    transform: translateX(100%);
  }
</style>
