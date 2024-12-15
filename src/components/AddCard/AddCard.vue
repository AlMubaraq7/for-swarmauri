<script setup lang="ts">
import { inject, reactive, ref } from "vue";
import { ModalKeyProps, NoteKeyProps } from "../../types";
import { modalInjectionKey, noteItemsInjectionKey } from "../../keys";
import { XMarkIcon } from "@heroicons/vue/24/solid";

const title = ref<string>("");
const content = ref<string>("");
const onTitleInput = (e: Event) => {
  title.value = (e.target as HTMLInputElement).value;
};
const onContentInput = (e: Event) => {
  content.value = (e.target as HTMLInputElement).value;
};
const { modal, updateModalState } = inject(modalInjectionKey) as ModalKeyProps;
const { addNote } = inject(noteItemsInjectionKey) as NoteKeyProps;
const onSubmit = () => {
  if (title.value != "" && content.value != "") {
    const values = {
      title: title.value,
      content: content.value,
    };
    addNote(values);
    title.value = "";
    content.value = "";
    updateModalState();
  }
  return;
};

const modalObject = reactive({
  active: modal,
});
</script>

<template>
  <div class="container" :class="modalObject" @keyup.enter="onSubmit">
    <div class="inputs">
      <input
        type="text"
        :value="title"
        @input="(e) => onTitleInput(e)"
        placeholder="Title"
        required
      />
      <input
        type="text"
        :value="content"
        @input="(e) => onContentInput(e)"
        placeholder="Description"
      />
      <button class="button" @click="onSubmit">Add Note</button>
    </div>
    <XMarkIcon class="x-mark" @click="updateModalState" />
  </div>
</template>
<style lang="css" scoped>
.container {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(10px);
}
.inputs {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 2rem;
  border-radius: 20px;
  width: 75%;
  z-index: 10;
}
.inputs input {
  font-family: "DM Sans";
  padding: 1.5rem;
  font-size: 1.5rem;
}
.active {
  display: flex;
  align-items: center;
  justify-content: center;
}
.x-mark {
  position: absolute;
  top: 50px;
  right: 200px;
  height: 60px;
  width: 60px;
  cursor: pointer;
}
.button {
  font-family: "DM Sans";
  cursor: pointer;
  padding: 1rem;
  border: none;
  background-color: #24353e;
  transition: all 500ms;
}
.button:hover {
  background-color: #12191d;
}
</style>
