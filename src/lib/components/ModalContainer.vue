<template>
  <div>
    <Transition
      enter-from-class="opacity-0"
      enter-active-class="transition-all transform duration-500 ease-in-out"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-active-class="transition-all transform duration-500 ease-in-out"
      leave-to-class="opacity-0"
    >
      <div v-if="container.hasModals" class="fixed inset-0 z-[9999]">
        <TransitionGroup
          enter-from-class="opacity-0"
          enter-active-class="transition-all transform duration-500 ease-in-out"
          enter-to-class="opacity-100"
          leave-from-class="opacity-100"
          leave-active-class="transition-all transform duration-500 ease-in-out"
          leave-to-class="opacity-0"
        >
          <template
            v-for="(modal, index) in container.modals.value"
            :key="modal.uuid"
          >
            <component
              :is="modal.component"
              v-bind="modal.props"
              :style="{ zIndex: index }"
            ></component>
          </template>
        </TransitionGroup>
        <div
          class="absolute inset-0"
          :class="overlay"
          :style="{ zIndex: lastIndex - 1 }"
          @click="container.destroyLast"
        ></div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useModalContainer } from "../composables";

type Props = {
  overlay?: string;
};

withDefaults(defineProps<Props>(), { overlay: "bg-black opacity-25" });

const container = useModalContainer();
const lastIndex = computed(() => container.modals.value.length - 1);
</script>
