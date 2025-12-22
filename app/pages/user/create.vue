<template>
  <MainLayout>
    <div class="p-4 lg:p-6">
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Add New User</h1>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Create a new user account</p>
        </div>
        <button
          class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          @click="$router.back()"
        >
          ← Back to Users
        </button>
      </div>

      <!-- Form Container -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden"
      >
        <!-- Form Header -->
        <div class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white">User Information</h2>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Fill in the user's details below
          </p>
        </div>

        <!-- Form Content -->
        <form @submit.prevent="createClient" class="p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Name -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    class="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Enter full name"
                  class="pl-10 w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>

            <!-- Email -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Address <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    class="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email address"
                  class="pl-10 w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>

            <!-- Password -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    class="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <input
                  v-model="form.password"
                  type="password"
                  required
                  placeholder="Create a secure password"
                  class="pl-10 w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>

            <!-- Confirm Password -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Confirm Password <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    class="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <input
                  v-model="form.confirmPassword"
                  type="password"
                  required
                  placeholder="Confirm your password"
                  class="pl-10 w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>

            <!-- Role Selection (Optional but modern touch) -->
            <div class="space-y-2 md:col-span-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                User Role
              </label>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label
                  v-for="role in roleOptions"
                  :key="role.value"
                  class="relative flex items-center p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer transition-colors"
                  :class="{
                    'ring-2 ring-blue-500 border-blue-500 dark:border-blue-500':
                      form.role === role.value,
                  }"
                >
                  <input
                    v-model="form.role"
                    type="radio"
                    :value="role.value"
                    name="role"
                    class="sr-only"
                  />
                  <div class="flex items-center">
                    <div
                      class="h-5 w-5 rounded-full border border-gray-400 dark:border-gray-500 flex items-center justify-center mr-3"
                    >
                      <div
                        v-if="form.role === role.value"
                        class="h-2.5 w-2.5 rounded-full bg-blue-500"
                      ></div>
                    </div>
                    <div>
                      <p class="text-sm font-medium text-gray-900 dark:text-white">
                        {{ role.label }}
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {{ role.description }}
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <!-- Form Footer -->
          <div
            class="flex items-center justify-between pt-8 mt-8 border-t border-gray-200 dark:border-gray-700"
          >
            <button
              type="button"
              @click="resetForm"
              class="px-5 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Reset Form
            </button>
            <div class="flex items-center space-x-3">
              <button
                type="button"
                @click="$router.back()"
                class="px-5 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors flex items-center"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Create User
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
  import { reactive } from 'vue'
  import MainLayout from '~/layouts/Dashboard/MainLayout.vue'

  const roleOptions = [
    {
      label: 'Admin',
      value: 'admin',
      description: 'Full system access',
    },
    {
      label: 'Editor',
      value: 'editor',
      description: 'Can edit content',
    },
    {
      label: 'Viewer',
      value: 'viewer',
      description: 'Read-only access',
    },
  ]

  const form = reactive({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'viewer',
    login_status: null,
    verify_email: null,
  })

  const createClient = async () => {
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match!')
      return
    }

    console.log('Creating user:', form)

    // Show success toast
    toast.add({
      title: 'User created successfully!',
      color: 'success',
      icon: 'i-lucide-check-circle',
    })

    // Reset form after successful creation
    resetForm()
  }

  const resetForm = () => {
    form.name = ''
    form.email = ''
    form.password = ''
    form.confirmPassword = ''
    form.role = 'viewer'
  }
</script>
