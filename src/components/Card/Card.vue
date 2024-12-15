<script setup lang="ts">
import CardHeader from "@swarmakit/vue/src/components/CardHeader/CardHeader.vue";
import CardBody from "@swarmakit/vue/src/components/CardBody/CardBody.vue";
import { TrashIcon } from "@heroicons/vue/24/solid";
import { inject, PropType } from "vue";
import { noteItemsInjectionKey } from "../../keys";
import { NoteKeyProps, NoteProps } from "../../types";
defineProps({
  note: { type: Object as PropType<NoteProps>, required: true },
});
const { deleteNote } = inject(noteItemsInjectionKey) as NoteKeyProps;
</script>
<template>
  <div class="card">
    <CardHeader :title="note.title.toUpperCase()" />
    <CardBody>
      {{ note.content }}
    </CardBody>
    <TrashIcon class="trash" @click="deleteNote(note)" />
  </div>
</template>
<style lang="css" scoped>
.card {
  padding: 1rem;
  position: relative;
  width: 350px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #24353e;
  box-shadow: 10px 9px 70px 0 rgba(36, 53, 62, 0.4);
}
.trash {
  position: absolute;
  top: 15px;
  right: 15px;
  height: 20px;
  width: 20px;
  cursor: pointer;
}
.trash:hover {
  color: rgb(233, 85, 85);
}
</style>
