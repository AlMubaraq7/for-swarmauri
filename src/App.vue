<script setup lang="ts">
import Header from "./components/Header/Header.vue";
import AddCard from "./components/AddCard/AddCard.vue";
import { provide, ref } from "vue";
import { modalInjectionKey, noteItemsInjectionKey } from "./keys";
import { NoteProps } from "./types";
import CardList from "./components/CardList/CardList.vue";
const notes = ref<NoteProps[]>([]);
const addNote = (note: NoteProps) => {
  notes.value.push(note);
};
const deleteNote = (noteToRemove: NoteProps) => {
  const indexToRemove = notes.value.findIndex(
    (note) =>
      note.title === noteToRemove.title && note.content === noteToRemove.content
  );
  if (indexToRemove !== -1) {
    notes.value.splice(indexToRemove, 1);
  }
};
const modal = ref<boolean>(false);
function updateModalState() {
  modal.value = !modal.value;
}
provide(modalInjectionKey, { modal, updateModalState });
provide(noteItemsInjectionKey, { notes, addNote, deleteNote });
</script>
<template>
  <Header />
  <CardList />
  <AddCard />
</template>
<style lang="css">
.container {
  display: flex;
  column-gap: 2rem;
  flex-wrap: wrap;
  row-gap: 2rem;
  padding: 2rem;
}
</style>
