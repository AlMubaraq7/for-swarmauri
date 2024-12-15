<script setup lang="ts">
import { inject } from "vue";
import Card from "../Card/Card.vue";
import { noteItemsInjectionKey } from "../../keys";
import { NoteKeyProps } from "../../types";
const { notes } = inject(noteItemsInjectionKey) as NoteKeyProps;
</script>
<template>
  <div v-if="notes.length != 0" class="container">
    <Card v-for="(note, index) in notes" :key="index" :note="note" />
  </div>
  <div v-else class="else">
    <span>You have no notes available</span>
  </div>
</template>
<style lang="css" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  row-gap: 2rem;
  padding: 2rem;
}
.else {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.5rem;
  margin-top: 15%;
  letter-spacing: 1px;
}
</style>
