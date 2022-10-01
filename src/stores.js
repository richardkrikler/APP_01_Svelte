import { writable } from "svelte/store";
import { List } from "../src/lib/List";

export const activeListId = writable(null);

export const lists = writable([
  new List("Liste1"),
  new List("Liste2")
]);
