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
          <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">Add User</button>
        </nuxt-link>
      </div>

      <!-- Reusable Table -->
      <CustomTable :data="users" @edit="editUser" @delete="deleteUser">
        <!-- Status slot -->
        <template #status="{ item }">
          <span
            class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
          >
            {{ item.status }}
          </span>
        </template>

        <!-- Actions slot -->
        <template #actions="{ index }">
          <div class="flex items-center space-x-3">
            <button @click="editUser(index)" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
              Edit
            </button>
            <button @click="deleteUser(index)" class="text-gray-600 dark:text-gray-400 hover:text-red-600 p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
              Delete
            </button>
          </div>
        </template>

        <!-- Footer slot -->
        <template #footer>
          <div class="text-sm text-gray-500 dark:text-gray-400">
            Showing <span class="font-medium">{{ users.length }}</span> users
          </div>
          <div class="flex items-center space-x-2">
            <button class="px-3 py-1.5 text-sm rounded border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">Previous</button>
            <button class="px-3 py-1.5 text-sm rounded bg-blue-600 text-white hover:bg-blue-700">1</button>
            <button class="px-3 py-1.5 text-sm rounded border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">Next</button>
          </div>
        </template>
      </CustomTable>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/dashboard/MainLayout.vue'
import CustomTable from '~/components/CustomTable.vue'

const users = [
  { name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
]

const editUser = (index) => console.log('Edit', users[index])
const deleteUser = (index) => users.splice(index, 1)
</script>
