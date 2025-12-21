<script setup>
  defineProps({
    type: {
      type: String,
      default: 'button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  })
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    class="inline-flex items-center rounded-md border border-transparent bg-blue-600 hover:bg-blue-700 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out focus:bg-blue-800 focus:outline-none active:bg-blue-900"
  >
    <slot />
  </button>
</template>
