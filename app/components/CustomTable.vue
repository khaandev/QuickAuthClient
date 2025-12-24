<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="w-full">
        <!-- Head -->
        <thead>
        <tr class="border-b border-gray-200 dark:border-gray-700">
          <th class="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">#</th>
          <th class="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
          <th class="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
          <th class="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
          <th class="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
        </thead>

        <!-- Body -->
        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
        <tr v-for="(item, index) in data" :key="index" class="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <td class="py-4 px-6 text-sm text-gray-600 dark:text-gray-300">{{ index + 1 }}</td>

          <!-- Name -->
          <td class="py-4 px-6">
            <div class="flex items-center">
              <div class="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                <span class="text-blue-600 dark:text-blue-300 text-xs font-medium">{{ item.name.charAt(0) }}</span>
              </div>
              <span class="text-sm font-medium text-gray-900 dark:text-white">{{ item.name }}</span>
            </div>
          </td>

          <!-- Email -->
          <td class="py-4 px-6 text-sm text-gray-600 dark:text-gray-300">{{ item.email }}</td>

          <!-- Status Slot -->
          <td class="py-4 px-6">
            <slot name="status" :item="item">{{ item.status || 'Active' }}</slot>
          </td>

          <!-- Actions Slot -->
          <td class="py-4 px-6">
            <slot name="actions" :item="item" :index="index">
              <!-- Default actions -->
              <div class="flex items-center space-x-3">
                <button @click="$emit('edit', index)" class="text-gray-600 hover:text-blue-600 p-1.5 rounded hover:bg-gray-100">✏️</button>
                <button @click="$emit('delete', index)" class="text-gray-600 hover:text-red-600 p-1.5 rounded hover:bg-gray-100">🗑️</button>
              </div>
            </slot>
          </td>
        </tr>

        <!-- Empty state -->
        <tr v-if="data.length === 0">
          <td colspan="5" class="py-12 text-center">
            <slot name="empty">
              <div class="flex flex-col items-center justify-center">
                <div class="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-4">
                  <svg class="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p class="text-gray-500 dark:text-gray-400 text-sm font-medium">No users found</p>
                <p class="text-gray-400 dark:text-gray-500 text-xs mt-1">Get started by adding a new user</p>
              </div>
            </slot>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- Footer -->
    <div class="flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
    default: () => [],
  },
})
</script>
