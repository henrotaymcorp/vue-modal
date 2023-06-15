<template>
  <StylelessModal
    class="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-12 rounded-xl shadow"
  >
    <slot />
  </StylelessModal>
</template>

<script setup lang="ts">
import { StylelessModal } from ".";
</script>
