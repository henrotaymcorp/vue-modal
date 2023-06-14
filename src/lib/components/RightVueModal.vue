<template>
  <VueModal class="inset-y-0 right-0 bg-white rounded-l-xl p-12 shadow">
    <slot />
  </VueModal>
</template>

<script setup lang="ts">
import { VueModal } from ".";
</script>
