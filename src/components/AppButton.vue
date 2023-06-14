<template>
  <button
    class="bg-gradient-to-br to-cyan-600 from-blue-500 text-white p-4 rounded text-normal"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
type Events = {
  (e: "click"): void;
};
defineEmits<Events>();
</script>
