<template>
  <!-- Table Container -->
  <div
    class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden"
  >
    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="w-full">
        <!-- Head -->
        <thead>
        <tr class="border-b border-gray-200 dark:border-gray-700">
          <th class="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase">#</th>
          <th class="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase">
            Name
          </th>
          <th class="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase">
            Email
          </th>
          <th class="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase">
            Status
          </th>
          <th class="text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase">
            Actions
          </th>
        </tr>
        </thead>

        <!-- Body -->
        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
        <!-- Row slot -->
        <slot name="rows" />

        <!-- Empty state -->
        <tr v-if="isEmpty">
          <td colspan="5" class="py-12 text-center">
            <slot name="empty" />
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- Footer -->
    <div
      class="flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  isEmpty: Boolean,
})
</script>
