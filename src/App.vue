<template>
  <div
    class="h-screen w-screen flex items-center justify-center bg-gradient-to-br to-cyan-600 from-blue-500"
  >
    <div
      class="text-center p-8 rounded-full bg-white w-[650px] h-[650px] shadow-lg relative"
    >
      <div>
        <div class="text-[300px]">🎉</div>
        <div
          class="text-2xl text-gray-600 font-thin flex items-center justify-center gap-6"
        >
          <AppButton @click="openFirst"> open first </AppButton>
          <AppButton @click="openSecond"> open second </AppButton>
        </div>
      </div>
    </div>
    <ModalsContainer />
  </div>
</template>

<script setup lang="ts">
import { AppButton } from "./components";
import { useFirstModal, useSecondModal } from "./composables";
import { ModalsContainer } from "./lib";
import "./main.css";

const { open: openFirst } = useFirstModal();
const { open: openSecond } = useSecondModal();
</script>
