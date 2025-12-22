<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- Hero Section -->
    <div class="container mx-auto px-6 py-24 text-center">
      <!-- Framework badges -->
      <div class="inline-flex items-center gap-4 mb-8">
        <span class="flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20">
          <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
          </svg>
          Laravel 12
        </span>
        <span class="flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/20">
          <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          </svg>
          Nuxt 4
        </span>
      </div>

      <!-- Title -->
      <h1 class="text-5xl font-bold mb-4">Quick Auth & Admin Panel</h1>
      <p class="text-gray-300 max-w-2xl mx-auto mb-8">
        Rapid authentication system with Laravel 12 API backend, Nuxt 4 frontend, Pinia state
        management, Tailwind CSS, and a ready-to-use admin panel.
      </p>

      <!-- Buttons -->
      <div class="flex justify-center gap-4 mb-16">
        <button
          class="px-6 py-2 rounded-lg font-semibold bg-red-600 hover:bg-red-500 transition-colors"
        >
          Get Started
        </button>
        <button
          class="px-6 py-2 rounded-lg font-semibold border border-gray-600 hover:bg-gray-800 transition-colors"
        >
          Documentation
        </button>
      </div>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <div class="mb-4">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold mb-2">{{ feature.title }}</h3>
          <p class="text-gray-400 text-sm">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const features = [
    {
      title: 'Quick Authentication',
      description: 'JWT / Sanctum ready auth for APIs & Nuxt frontend',
    },
    { title: 'Admin Panel Ready', description: 'Roles, permissions, and user management included' },
    { title: 'SaaS Multi-Tenant', description: 'Architecture ready for scalable SaaS apps' },
    { title: 'Modern Stack', description: 'Nuxt 4 + Pinia + Tailwind CSS + TypeScript + Vite' },
  ]
</script>
