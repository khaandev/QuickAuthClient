<template>
  <!-- Mobile Overlay -->
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
    @click="$emit('close')"
  />

  <!-- Sidebar -->
  <aside
    :class="[
      'bg-white dark:bg-gray-800 w-64 p-4 space-y-2 border-r border-gray-200 dark:border-gray-700',
      'fixed md:relative z-50 h-full overflow-y-auto transition-transform duration-300 ease-in-out md:translate-x-0',
      isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
    ]"
  >
    <!-- Logo and Close button -->
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <Icon name="heroicons:cube" class="w-5 h-5 text-white" />
        </div>
        <span class="font-semibold text-gray-800 dark:text-white">AdminKit</span>
      </div>
      <button
        class="md:hidden text-gray-500 hover:text-gray-800 dark:hover:text-white"
        @click="$emit('close')"
      >
        <Icon name="heroicons:x-mark" class="w-5 h-5" />
      </button>
    </div>

    <!-- Navigation -->
    <nav class="space-y-1">
      <template v-for="item in menu" :key="item.label">
        <!-- Parent menu with children -->
        <div v-if="item.children && item.children.length">
          <button
            class="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            @click="toggleMenu(item.label)"
          >
            <div class="flex items-center gap-3">
              <Icon
                :name="item.icon"
                class="w-5 h-5"
                :class="{
                  'text-blue-600 dark:text-blue-400':
                    isMenuOpen(item.label) || isChildActive(item.children),
                  'text-gray-500 dark:text-gray-400': !(
                    isMenuOpen(item.label) || isChildActive(item.children)
                  ),
                }"
              />
              <span class="text-sm font-medium">{{ item.label }}</span>
            </div>
            <Icon
              name="heroicons:chevron-down"
              :class="{ 'rotate-180': isMenuOpen(item.label) }"
              class="w-4 h-4 transition-transform duration-200"
            />
          </button>

          <!-- Children -->
          <div v-show="isMenuOpen(item.label)" class="ml-8 mt-1 space-y-1">
            <NuxtLink
              v-for="child in item.children"
              :key="child.label"
              :to="child.to"
              class="block py-2 px-3 rounded-lg text-sm transition-colors duration-200"
              :class="{
                'bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400':
                  route.path === child.to,
                'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700':
                  route.path !== child.to,
              }"
              @click="$emit('close')"
            >
              <Icon v-if="child.icon" :name="child.icon" class="w-4 h-4 inline mr-2" />
              {{ child.label }}
            </NuxtLink>
          </div>
        </div>

        <!-- Single menu item -->
        <div v-else>
          <NuxtLink
            :to="item.to"
            class="flex items-center gap-3 p-3 rounded-lg transition-colors duration-200"
            :class="{
              'bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400':
                route.path === item.to || route.path.startsWith(item.to + '/'),
              'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700': !(
                route.path === item.to || route.path.startsWith(item.to + '/')
              ),
            }"
            @click="$emit('close')"
          >
            <Icon :name="item.icon" class="w-5 h-5" />
            <span class="text-sm font-medium">{{ item.label }}</span>
          </NuxtLink>
        </div>
      </template>
    </nav>
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

  // Sample menu data
  const menu = [
    {
      label: 'Dashboard',
      to: '/dashboard',
      icon: 'heroicons:chart-bar',
    },
    {
      label: 'Clients',
      to: '/admin/client',
      icon: 'heroicons:user-group',
    },
    {
      label: 'Manage Users',
      icon: 'heroicons:users',
      children: [
        { label: 'User List', to: '/users/list', icon: 'heroicons:list-bullet' },
        { label: 'Create User', to: '/users/create', icon: 'heroicons:user-plus' },
        { label: 'Manage Roles', to: '/roles/list', icon: 'heroicons:shield-check' },
      ],
    },
    {
      label: 'Settings',
      to: '/settings',
      icon: 'heroicons:cog-6-tooth',
    },
  ]

  function toggleMenu(label) {
    openMenus.value[label] = !openMenus.value[label]
  }

  function isMenuOpen(label) {
    return !!openMenus.value[label]
  }

  function isChildActive(children) {
    return children.some(
      (child) => route.path === child.to || route.path.startsWith(child.to + '/')
    )
  }
</script>

<style scoped>
  /* Smooth scrolling */
  aside {
    scrollbar-width: thin;
    scrollbar-color: #cbd5e1 transparent;
  }

  aside::-webkit-scrollbar {
    width: 4px;
  }

  aside::-webkit-scrollbar-track {
    background: transparent;
  }

  aside::-webkit-scrollbar-thumb {
    background-color: #cbd5e1;
    border-radius: 20px;
  }

  .dark aside::-webkit-scrollbar-thumb {
    background-color: #4b5563;
  }
</style>
