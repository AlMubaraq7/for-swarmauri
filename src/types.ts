import { Ref } from "vue";

export interface ModalKeyProps {
  modal: Ref<boolean, boolean>;
  updateModalState: () => void;
}
export interface NoteProps {
  title: string;
  content: string;
}
export interface NoteKeyProps {
  notes: Ref<NoteProps[], NoteProps[]>;
  addNote: (note: NoteProps) => void;
  deleteNote: (note: NoteProps) => void;
}
