<template>
  <MainLayout>
    <div class="p-4 lg:p-6">
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Users</h1>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage your team members</p>
        </div>
        <nuxt-link to="create">
          <button
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Add User
          </button>
        </nuxt-link>
      </div>

      <!-- Table Container -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden"
      >
        <!-- Table -->
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-gray-200 dark:border-gray-700">
                <th
                  class="text-left py-4 px-6 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  #
                </th>
                <th
                  class="text-left py-4 px-6 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  class="text-left py-4 px-6 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  class="text-left py-4 px-6 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  class="text-left py-4 px-6 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr
                v-for="(user, index) in users"
                :key="index"
                class="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <td class="py-4 px-6 text-sm text-gray-600 dark:text-gray-300">{{ index + 1 }}</td>
                <td class="py-4 px-6">
                  <div class="flex items-center">
                    <div
                      class="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3"
                    >
                      <span class="text-blue-600 dark:text-blue-300 text-xs font-medium">
                        {{ user.name.charAt(0) }}
                      </span>
                    </div>
                    <span class="text-sm font-medium text-gray-900 dark:text-white">{{
                      user.name
                    }}</span>
                  </div>
                </td>
                <td class="py-4 px-6 text-sm text-gray-600 dark:text-gray-300">{{ user.email }}</td>
                <td class="py-4 px-6">
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  >
                    Active
                  </span>
                </td>
                <td class="py-4 px-6">
                  <div class="flex items-center space-x-3">
                    <button
                      @click="editUser(index)"
                      class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      title="Edit"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>
                    <button
                      @click="deleteUser(index)"
                      class="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      title="Delete"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr v-if="users.length === 0">
                <td colspan="5" class="py-12 text-center">
                  <div class="flex flex-col items-center justify-center">
                    <div
                      class="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-4"
                    >
                      <svg
                        class="w-8 h-8 text-gray-400 dark:text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p class="text-gray-500 dark:text-gray-400 text-sm font-medium">
                      No users found
                    </p>
                    <p class="text-gray-400 dark:text-gray-500 text-xs mt-1">
                      Get started by adding a new user
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Table Footer -->
        <div
          class="flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"
        >
          <div class="text-sm text-gray-500 dark:text-gray-400">
            Showing <span class="font-medium">{{ users.length }}</span> users
          </div>
          <div class="flex items-center space-x-2">
            <button
              class="px-3 py-1.5 text-sm rounded border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Previous
            </button>
            <button class="px-3 py-1.5 text-sm rounded bg-blue-600 text-white hover:bg-blue-700">
              1
            </button>
            <button
              class="px-3 py-1.5 text-sm rounded border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
  import { reactive } from 'vue'
  import MainLayout from '~/layouts/dashboard/MainLayout.vue'

  // Users data with additional fields for modern UI
  const users = reactive([
    { name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { name: 'Jane Smith', email: 'jane@example.com', status: 'Active' },
    { name: 'Robert Johnson', email: 'robert@example.com', status: 'Active' },
    { name: 'Sarah Williams', email: 'sarah@example.com', status: 'Active' },
  ])

  const deleteUser = (index) => {
    if (confirm(`Are you sure you want to delete ${users[index].name}?`)) {
      users.splice(index, 1)
    }
  }

  const editUser = (index) => {
    console.log('Edit user:', users[index])
  }
</script>
