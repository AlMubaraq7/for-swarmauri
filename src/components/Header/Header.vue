<script setup lang="ts">
import { DocumentPlusIcon } from "@heroicons/vue/24/solid";
import { inject } from "vue";
import { modalInjectionKey } from "../../keys";
import { ModalKeyProps } from "../../types";
const { updateModalState } = inject(modalInjectionKey) as ModalKeyProps;
</script>
<template>
  <nav class="nav-container">
    <span>Notes</span>
    <div class="button-group">
      <DocumentPlusIcon @click="updateModalState" class="add-note" />
    </div>
  </nav>
</template>
<style lang="css" scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  font-size: 2.5rem;
  letter-spacing: 2px;
}
.add-note {
  height: 40px;
  width: 40px;
  cursor: pointer;
}
.button-group {
  display: flex;
  gap: 1rem;
  align-items: center;
}
</style>
