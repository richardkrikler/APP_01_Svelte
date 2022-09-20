<script>
  export let listId;
  import { lists } from "../stores";
  import AddIcon from "./icons/AddIcon.svelte";
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
  $: console.log(list.tasks);
</script>

<h1 class="text-2xl font-semibold px-2 py-2">{list.name}</h1>

<div
  class="task hover:bg-slate-200 bg-slate-100 flex rounded-sm cursor-pointer p-2 my-3"
>
  <AddIcon classes="w-6 mr-2" />
  <input
    class="bg-transparent w-full"
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

<ul class="mt-2">
  {#each list.tasks as task}
    <li
      class="task hover:bg-slate-200 bg-slate-100 rounded-sm cursor-pointer p-2 my-3"
    >
      <!-- click -> false/true disabled -->
      <input
        value={task.title}
        disabled
        class="bg-transparent w-full cursor-pointer"
      />
    </li>
  {/each}
</ul>
