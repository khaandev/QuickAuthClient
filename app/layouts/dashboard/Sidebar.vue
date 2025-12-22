<template>
  <!-- Mobile Overlay -->
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
    @click="$emit('close')"
  />

  <!-- Sidebar -->
  <aside
    :class="[
      'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md w-64 border-r border-gray-200 dark:border-gray-800',
      'fixed md:relative z-50 h-screen overflow-hidden transition-all duration-300 ease-in-out md:translate-x-0',
      'flex flex-col',
      isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
    ]"
  >
    <!-- Logo and Close button -->
    <div class="p-4 border-b border-gray-200 dark:border-gray-800">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div
            class="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-sm"
          >
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
          <div>
            <span class="font-semibold text-gray-900 dark:text-white text-lg"
              >QuicAuth <span class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">v1.0</span>
            </span>
          </div>
        </div>
        <button
          class="md:hidden p-2 rounded-lg text-gray-500 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          @click="$emit('close')"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Navigation -->
    <div class="flex-1 p-4 overflow-y-auto">
      <nav class="space-y-1.5">
        <!-- Navigation Groups -->
        <div class="mb-6">
          <p
            class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider px-3 mb-3"
          >
            Main
          </p>
          <div class="space-y-1.5">
            <NuxtLink
              v-for="item in mainMenu"
              :key="item.label"
              :to="item.to"
              class="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group"
              :class="{
                'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-sm': isActive(
                  item.to
                ),
                'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800':
                  !isActive(item.to),
              }"
              @click="$emit('close')"
            >
              <div
                class="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                :class="{
                  'bg-white/20': isActive(item.to),
                  'bg-gray-100 dark:bg-gray-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30':
                    !isActive(item.to),
                }"
              >
                <svg
                  class="w-4 h-4"
                  :class="isActive(item.to) ? 'text-white' : 'text-gray-500 dark:text-gray-400'"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    :d="item.icon"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <span class="font-medium text-sm">{{ item.label }}</span>
              <span
                v-if="item.badge"
                class="ml-auto px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
              >
                {{ item.badge }}
              </span>
            </NuxtLink>
          </div>
        </div>

        <!-- Management Section -->
        <div class="mb-6">
          <p
            class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider px-3 mb-3"
          >
            Management
          </p>
          <div class="space-y-1.5">
            <div v-for="item in managementMenu" :key="item.label">
              <!-- Parent menu -->
              <button
                @click="toggleMenu(item.label)"
                class="flex items-center justify-between w-full px-3 py-2.5 rounded-xl transition-colors duration-200 group hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="w-9 h-9 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors"
                  >
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        :d="item.icon"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                  <span class="font-medium text-sm text-gray-700 dark:text-gray-300">{{
                    item.label
                  }}</span>
                </div>
                <svg
                  class="w-4 h-4 text-gray-400 transition-transform duration-200"
                  :class="{ 'rotate-180': isMenuOpen(item.label) }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <!-- Children -->
              <div v-show="isMenuOpen(item.label)" class="ml-12 mt-1 space-y-1">
                <NuxtLink
                  v-for="child in item.children"
                  :key="child.label"
                  :to="child.to"
                  class="flex items-center gap-2 py-2 px-3 rounded-lg text-sm transition-colors duration-200"
                  :class="{
                    'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-800': isActive(
                      child.to
                    ),
                    'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300':
                      !isActive(child.to),
                  }"
                  @click="$emit('close')"
                >
                  <div class="w-1.5 h-1.5 rounded-full bg-current opacity-60"></div>
                  <span>{{ child.label }}</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Other Links -->
        <div>
          <p
            class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider px-3 mb-3"
          >
            System
          </p>
          <div class="space-y-1.5">
            <NuxtLink
              v-for="item in systemMenu"
              :key="item.label"
              :to="item.to"
              class="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              :class="{
                'text-blue-600 dark:text-blue-400': isActive(item.to),
                'text-gray-700 dark:text-gray-300': !isActive(item.to),
              }"
              @click="$emit('close')"
            >
              <div
                class="w-9 h-9 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-800"
              >
                <svg
                  class="w-4 h-4"
                  :class="
                    isActive(item.to)
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-500 dark:text-gray-400'
                  "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    :d="item.icon"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <span class="font-medium text-sm">{{ item.label }}</span>
            </NuxtLink>
          </div>
        </div>
      </nav>
    </div>

    <!-- User Profile & Logout -->
    <div class="p-4 border-t border-gray-200 dark:border-gray-800">
      <div class="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
        <div
          class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
        >
          <span class="text-white text-sm font-medium">A</span>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 dark:text-white truncate">Admin User</p>
          <p class="text-xs text-gray-500 dark:text-gray-400 truncate">admin@example.com</p>
        </div>
        <button
          @click="logout"
          class="p-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
          title="Logout"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </button>
      </div>
    </div>
  </aside>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'

  defineProps({
    isOpen: Boolean,
  })
  defineEmits(['close'])

  const route = useRoute()
  const openMenus = ref({})

  // Main navigation items
  const mainMenu = [
    {
      label: 'Dashboard',
      to: '/dashboard',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    },
    {
      label: 'Users',
      to: '/user/users',
      icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      label: 'Analytics',
      to: '/analytics',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      badge: 'New',
    },
  ]

  // Management menu items
  const managementMenu = [
    {
      label: 'Content',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
      children: [
        { label: 'Posts', to: '/content/posts' },
        { label: 'Pages', to: '/content/pages' },
        { label: 'Media', to: '/content/media' },
      ],
    },
    {
      label: 'E-commerce',
      icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
      children: [
        { label: 'Products', to: '/ecommerce/products' },
        { label: 'Orders', to: '/ecommerce/orders' },
        { label: 'Customers', to: '/ecommerce/customers' },
      ],
    },
  ]

  // System menu items
  const systemMenu = [
    {
      label: 'Settings',
      to: '/settings',
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z',
    },
    {
      label: 'Help & Support',
      to: '/help',
      icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
    },
  ]

  const isActive = (path) => {
    return route.path === path || route.path.startsWith(path + '/')
  }

  const toggleMenu = (label) => {
    openMenus.value[label] = !openMenus.value[label]
  }

  const isMenuOpen = (label) => {
    return !!openMenus.value[label]
  }

  const logout = () => {
    console.log('Logging out...')
    // Add logout logic here
  }
</script>

<style scoped>
  /* Custom scrollbar */
  aside {
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
  }

  aside:hover {
    scrollbar-color: #cbd5e1 transparent;
  }

  .dark aside:hover {
    scrollbar-color: #4b5563 transparent;
  }

  aside::-webkit-scrollbar {
    width: 4px;
  }

  aside::-webkit-scrollbar-track {
    background: transparent;
  }

  aside::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 20px;
  }

  aside:hover::-webkit-scrollbar-thumb {
    background-color: #cbd5e1;
  }

  .dark aside:hover::-webkit-scrollbar-thumb {
    background-color: #4b5563;
  }
</style>
