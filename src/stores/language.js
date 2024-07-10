import { writable } from "svelte/store";

export const language = writable(
  {
    label: "English",
    value: "en"
  }
);
