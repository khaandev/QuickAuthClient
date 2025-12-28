<template>
  <MainLayout>
    <!-- Dashboard Header -->
    <div class="mb-6 md:mb-8">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p class="text-gray-600 dark:text-gray-400 mt-2">
            Welcome back {{auth.user.name}}, Administrator! Here's what's happening today.
          </p>
        </div>
        <div class="flex items-center gap-3">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                class="h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <select
              class="pl-10 pr-8 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              <option>Today</option>
              <option>Last 7 Days</option>
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
            </select>
          </div>
          <button
            class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Generate Report
          </button>
        </div>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
      <!-- Revenue Card -->
      <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
        <div class="flex justify-between items-start">
          <div>
            <p class="text-sm font-medium text-blue-100">Total Revenue</p>
            <p class="text-2xl md:text-3xl font-bold mt-2">$24,580</p>
            <div class="flex items-center gap-1 mt-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <span class="text-sm text-blue-100">+12.5% from last month</span>
            </div>
          </div>
          <div class="p-3 bg-white/20 rounded-xl">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- Users Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <div class="flex justify-between items-start">
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Total Users</p>
            <p class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-2">2,847</p>
            <div class="flex items-center gap-1 mt-2">
              <svg
                class="w-4 h-4 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <span class="text-sm text-green-600 dark:text-green-400">+8.2% new users</span>
            </div>
          </div>
          <div class="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
            <svg
              class="w-6 h-6 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- Orders Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <div class="flex justify-between items-start">
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400">New Orders</p>
            <p class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-2">128</p>
            <div class="flex items-center gap-1 mt-2">
              <svg
                class="w-4 h-4 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                />
              </svg>
              <span class="text-sm text-yellow-600 dark:text-yellow-400">Processing 12 orders</span>
            </div>
          </div>
          <div class="p-3 bg-green-50 dark:bg-green-900/30 rounded-xl">
            <svg
              class="w-6 h-6 text-green-600 dark:text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- Conversion Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <div class="flex justify-between items-start">
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Conversion Rate</p>
            <p class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-2">3.24%</p>
            <div class="flex items-center gap-1 mt-2">
              <svg
                class="w-4 h-4 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                />
              </svg>
              <span class="text-sm text-red-600 dark:text-red-400">-2.1% from target</span>
            </div>
          </div>
          <div class="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-xl">
            <svg
              class="w-6 h-6 text-purple-600 dark:text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Charts and Graphs Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
      <!-- Revenue Chart -->
      <div
        class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <div class="flex justify-between items-center mb-6">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Revenue Overview</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Monthly revenue performance</p>
          </div>
          <button
            class="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
          >
            View Details
          </button>
        </div>
        <div
          class="h-64 flex items-center justify-center bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900/20 rounded-lg"
        >
          <!-- Chart would go here - using placeholder for now -->
          <div class="text-center">
            <div class="text-2xl font-bold text-gray-900 dark:text-white mb-2">$24,580</div>
            <p class="text-gray-600 dark:text-gray-400">Total Revenue This Month</p>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-4 mt-6">
          <div class="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <p class="text-sm text-gray-600 dark:text-gray-400">Jan</p>
            <p class="font-semibold text-gray-900 dark:text-white">$18.2K</p>
          </div>
          <div class="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <p class="text-sm text-gray-600 dark:text-gray-400">Feb</p>
            <p class="font-semibold text-gray-900 dark:text-white">$22.1K</p>
          </div>
          <div class="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <p class="text-sm text-gray-600 dark:text-gray-400">Mar</p>
            <p class="font-semibold text-gray-900 dark:text-white">$24.6K</p>
          </div>
          <div class="text-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <p class="text-sm text-blue-600 dark:text-blue-400">Apr</p>
            <p class="font-semibold text-blue-700 dark:text-blue-300">$26.8K</p>
          </div>
        </div>
      </div>

      <!-- User Growth Chart -->
      <div
        class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <div class="flex justify-between items-center mb-6">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">User Growth</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">New users per month</p>
          </div>
          <div class="flex gap-2">
            <button
              class="px-3 py-1.5 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors"
            >
              Month
            </button>
            <button
              class="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
            >
              Quarter
            </button>
          </div>
        </div>
        <div class="h-64 flex items-center justify-center">
          <!-- Growth chart placeholder -->
          <div class="w-full">
            <div class="flex items-end justify-between h-48 gap-2 mb-4">
              <div class="flex-1">
                <div class="h-24 bg-gradient-to-t from-green-400 to-green-300 rounded-t-lg"></div>
                <p class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">Jan</p>
              </div>
              <div class="flex-1">
                <div class="h-32 bg-gradient-to-t from-green-400 to-green-300 rounded-t-lg"></div>
                <p class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">Feb</p>
              </div>
              <div class="flex-1">
                <div class="h-40 bg-gradient-to-t from-green-400 to-green-300 rounded-t-lg"></div>
                <p class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">Mar</p>
              </div>
              <div class="flex-1">
                <div class="h-48 bg-gradient-to-t from-green-400 to-green-300 rounded-t-lg"></div>
                <p class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">Apr</p>
              </div>
            </div>
            <div class="text-center">
              <div class="text-lg font-bold text-gray-900 dark:text-white">+28% Growth</div>
              <p class="text-gray-600 dark:text-gray-400">Compared to last quarter</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activity & Top Products -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
      <!-- Recent Activity -->
      <div
        class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <div class="flex justify-between items-center mb-6">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Latest system activities</p>
          </div>
          <button
            class="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
          >
            See All →
          </button>
        </div>
        <div class="space-y-4">
          <div
            v-for="activity in recentActivities"
            :key="activity.id"
            class="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <div :class="activity.iconBg" class="p-2 rounded-lg">
              <svg
                class="w-5 h-5"
                :class="activity.iconColor"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  :d="activity.icon"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div class="flex-1">
              <p class="font-medium text-gray-900 dark:text-white">{{ activity.title }}</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ activity.description }}</p>
              <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">{{ activity.time }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Top Products -->
      <div
        class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <div class="flex justify-between items-center mb-6">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Top Products</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Best selling products this month</p>
          </div>
          <button
            class="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
          >
            View All →
          </button>
        </div>
        <div class="space-y-4">
          <div
            v-for="product in topProducts"
            :key="product.id"
            class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <div
              class="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <div class="flex-1">
              <p class="font-medium text-gray-900 dark:text-white">{{ product.name }}</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">{{ product.category }}</p>
            </div>
            <div class="text-right">
              <p class="font-semibold text-gray-900 dark:text-white">{{ product.sales }}</p>
              <p class="text-sm text-green-600 dark:text-green-400">{{ product.growth }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Stats Bar -->
    <div class="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div
        class="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700"
      >
        <p class="text-sm text-gray-600 dark:text-gray-400">Avg. Session</p>
        <p class="text-xl font-bold text-gray-900 dark:text-white">4m 32s</p>
      </div>
      <div
        class="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700"
      >
        <p class="text-sm text-gray-600 dark:text-gray-400">Bounce Rate</p>
        <p class="text-xl font-bold text-gray-900 dark:text-white">42.8%</p>
      </div>
      <div
        class="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700"
      >
        <p class="text-sm text-gray-600 dark:text-gray-400">Page Views</p>
        <p class="text-xl font-bold text-gray-900 dark:text-white">12.4K</p>
      </div>
      <div
        class="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700"
      >
        <p class="text-sm text-gray-600 dark:text-gray-400">Satisfaction</p>
        <p class="text-xl font-bold text-gray-900 dark:text-white">92%</p>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/store/auth'

  import MainLayout from '~/layouts/dashboard/MainLayout.vue'
const auth = useAuthStore();

  // Sample data for recent activities
  const recentActivities = [
    {
      id: 1,
      title: 'New user registered',
      description: 'John Doe joined the platform',
      time: '2 minutes ago',
      icon: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z',
      iconBg: 'bg-blue-50 dark:bg-blue-900/30',
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      id: 2,
      title: 'Order completed',
      description: 'Order #ORD-7890 has been delivered',
      time: '1 hour ago',
      icon: 'M5 13l4 4L19 7',
      iconBg: 'bg-green-50 dark:bg-green-900/30',
      iconColor: 'text-green-600 dark:text-green-400',
    },
    {
      id: 3,
      title: 'Payment received',
      description: '$2,500 received from Acme Inc.',
      time: '3 hours ago',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      iconBg: 'bg-purple-50 dark:bg-purple-900/30',
      iconColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      id: 4,
      title: 'System update',
      description: 'Security patches applied successfully',
      time: '5 hours ago',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      iconBg: 'bg-yellow-50 dark:bg-yellow-900/30',
      iconColor: 'text-yellow-600 dark:text-yellow-400',
    },
  ]

  // Sample data for top products
  const topProducts = [
    {
      id: 1,
      name: 'Premium Theme',
      category: 'Digital Product',
      sales: '$4,280',
      growth: '+24%',
    },
    {
      id: 2,
      name: 'Web Hosting',
      category: 'Service',
      sales: '$3,150',
      growth: '+18%',
    },
    {
      id: 3,
      name: 'UI Kit',
      category: 'Digital Product',
      sales: '$2,890',
      growth: '+32%',
    },
    {
      id: 4,
      name: 'Consulting',
      category: 'Service',
      sales: '$1,950',
      growth: '+12%',
    },
  ]
</script>
