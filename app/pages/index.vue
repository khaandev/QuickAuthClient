<template>
  <div class="relative min-h-screen bg-gray-100">
    <!-- Navbar (Laravel style) -->
    <nav class="fixed top-0 left-0 right-0 bg-white shadow border-b border-gray-200 z-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <!-- Logo / Brand -->
          <a href="#" class="text-xl font-bold text-gray-900">Laravel Clone</a>
          <!-- Navbar Links -->
          <div class="space-x-4">
            <a href="#" class="text-gray-700 hover:text-red-600">Home</a>
            <a href="#" class="text-gray-700 hover:text-red-600">Docs</a>
            <a href="#" class="text-gray-700 hover:text-red-600">Blog</a>
            <a href="#" class="text-gray-700 hover:text-red-600">Login</a>
            <a href="#" class="text-gray-700 hover:text-red-600">Register</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="max-w-6xl mx-auto sm:px-6 lg:px-8 pt-24">
      <!-- Heading with Red Gradient -->
      <div class="flex justify-center sm:justify-start">
        <h1
          class="text-6xl font-bold text-white px-6 py-2 rounded-lg bg-gradient-to-r from-red-500 via-red-600 to-red-700 shadow-lg"
        >
          Laravel Clone
        </h1>
      </div>

      <!-- Links below heading -->
      <div class="mt-6 flex justify-center space-x-4 sm:justify-start">
        <a href="https://laravel.com/docs" class="text-sm text-gray-700 underline">Docs</a>
        <a href="https://laracasts.com" class="text-sm text-gray-700 underline">Laracasts</a>
        <a href="https://laravel-news.com" class="text-sm text-gray-700 underline">News</a>
        <a href="https://blog.laravel.com" class="text-sm text-gray-700 underline">Blog</a>
        <a href="https://nova.laravel.com" class="text-sm text-gray-700 underline">Nova</a>
        <a href="https://forge.laravel.com" class="text-sm text-gray-700 underline">Forge</a>
        <a href="https://vapor.laravel.com" class="text-sm text-gray-700 underline">Vapor</a>
        <a href="https://github.com/laravel/laravel" class="text-sm text-gray-700 underline"
          >GitHub</a
        >
      </div>

      <!-- Example Sections -->
<!--      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg">-->
<!--        <div class="grid grid-cols-1 md:grid-cols-2">-->
<!--          <div class="p-6">-->
<!--            <div class="flex items-center">-->
<!--              <svg-->
<!--                class="w-8 h-8 text-gray-500"-->
<!--                fill="none"-->
<!--                stroke="currentColor"-->
<!--                viewBox="0 0 24 24"-->
<!--              >-->
<!--                <path-->
<!--                  stroke-linecap="round"-->
<!--                  stroke-linejoin="round"-->
<!--                  stroke-width="2"-->
<!--                  d="M12 8v4l3 3"-->
<!--                />-->
<!--              </svg>-->
<!--              <div class="ml-4 text-lg leading-7 font-semibold text-gray-900">Tailwind Example</div>-->
<!--            </div>-->
<!--            <div class="ml-12">-->
<!--              <div class="mt-2 text-gray-600 text-sm">-->
<!--                This is a Laravel welcome page clone in Nuxt 3 using Tailwind CSS.-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="p-6 border-t border-gray-200 md:border-t-0 md:border-l">-->
<!--            <div class="flex items-center">-->
<!--              <svg-->
<!--                class="w-8 h-8 text-gray-500"-->
<!--                fill="none"-->
<!--                stroke="currentColor"-->
<!--                viewBox="0 0 24 24"-->
<!--              >-->
<!--                <path-->
<!--                  stroke-linecap="round"-->
<!--                  stroke-linejoin="round"-->
<!--                  stroke-width="2"-->
<!--                  d="M3 10h18M3 14h18"-->
<!--                />-->
<!--              </svg>-->
<!--              <div class="ml-4 text-lg leading-7 font-semibold text-gray-900">Another Section</div>-->
<!--            </div>-->
<!--            <div class="ml-12">-->
<!--              <div class="mt-2 text-gray-600 text-sm">-->
<!--                You can continue adding sections exactly like Laravel’s welcome page.-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

      <!-- Footer -->
      <div class="flex justify-center mt-4 sm:items-center sm:justify-between">
        <div class="text-center text-sm text-gray-500 sm:text-left">Laravel Clone &copy; 2025</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Empty script section
</script>
