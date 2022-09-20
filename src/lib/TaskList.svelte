<script>
  export let listId;
  import { lists } from "../stores";
  import AddIcon from "./icons/AddIcon.svelte";
  import TrashIcon from "./icons/TrashIcon.svelte";
  import { List } from "./List";

  let list = null;

  $: {
    const listIndex = $lists.findIndex((l) => l.id === listId);
    if (listIndex >= 0) {
      list = $lists[listIndex];
    } else if ($lists.length > 0) {
      list = $lists[0];
    } else {
      $lists.push(new List("Tasks"));
      list = $lists[0];
    }
  }

  let newTaskTitle = "";

  $: console.log($lists[0].tasks);
</script>

<h1 class="text-2xl font-semibold px-2 py-2">{list.name}</h1>

<div
  class="task hover:bg-slate-200 bg-slate-100 flex rounded-sm cursor-pointer p-2 my-3"
>
  <AddIcon classes="w-6 mr-2" />
  <input
    class="bg-transparent w-full outline-none"
    placeholder="Add task"
    bind:value={newTaskTitle}
    on:keydown={(k) => {
      if (k.key === "Enter") {
        list.addTask(newTaskTitle);
        newTaskTitle = "";
      } else if (k.key === "Escape") {
        newTaskTitle = "";
      }
    }}
  />
</div>

<div class="bg-slate-100 w-full h-0.5 my-3" />

<ul class="mt-2 scroll">
  {#each list.tasks as task}
    <li
      class="task group hover:bg-slate-200 bg-slate-100 rounded-sm cursor-pointer p-2 my-3 flex"
    >
      <p class="cursor-pointer w-full">{task.title}</p>
      <div class="invisible group-hover:visible hover:text-slate-500">
        <TrashIcon />
      </div>
    </li>
  {/each}
</ul>
