import { InjectionKey } from "vue";
import { NoteKeyProps, ModalKeyProps } from "./types";

export const modalInjectionKey = Symbol() as InjectionKey<ModalKeyProps>;
export const noteItemsInjectionKey = Symbol() as InjectionKey<NoteKeyProps>;
