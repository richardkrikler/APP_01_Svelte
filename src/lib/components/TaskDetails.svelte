<script>
  import { navigateTo } from 'svelte-router-spa'
  import { lists, activeListId } from "../../stores";
  import BackIcon from "../icons/BackIcon.svelte";
  import ClearIcon from "../icons/ClearIcon.svelte";
  export let currentRoute;
  export let id = currentRoute.namedParams.id;

  $: listIndex = $lists.findIndex((l) => l.id === $activeListId);
  $: if (listIndex < 0) {
    navigateTo('/')
  }
  $: list = $lists[listIndex];
  $: taskIndex =
    listIndex >= 0 ? $lists[listIndex].tasks.findIndex((t) => t.id === id) : 0;
  $: task = list.tasks[taskIndex];
</script>

<div class="flex">
  <div class="mr-1 flex cursor-pointer hover:text-slate-500"
  on:click={() => navigateTo('/')}>
    <BackIcon classes="w-5"/>
  </div>
  <h1 class="text-2xl font-semibold px-2 py-2">{list.name}</h1>
</div>
<div class="bg-slate-100 w-full h-0.5 my-3" />

<h2 class="text-2xl font-semibold px-2 py-2">Task: {task.title}</h2>

<div
  class="detail group hover:bg-slate-200 bg-slate-100 rounded-sm cursor-pointer p-2 my-3 flex"
>
  <div class="w-full">
    <p class="font-semibold">Title</p>
    <input
      class="bg-transparent w-full cursor-pointer outline-none"
      bind:value={task.title}
      on:change={() => {
        lists.update((ll) => {
          ll[listIndex].tasks[taskIndex].title = task.title;
          return ll;
        });
      }}
    />
  </div>
</div>

<div
  class="detail group hover:bg-slate-200 bg-slate-100 rounded-sm cursor-pointer p-2 my-3 flex"
>
  <div class="w-full">
    <p class="font-semibold">Due</p>
    <input
      type="date"
      class="bg-transparent w-full cursor-pointer outline-none"
      bind:value={task.dueDate}
      on:change={() => {
        lists.update((ll) => {
          ll[listIndex].tasks[taskIndex].dueDate = task.dueDate;
          return ll;
        });
      }}
    />
  </div>
  <div
    class="my-auto invisible group-hover:visible hover:text-slate-500"
    on:click={() => {
      lists.update((ll) => {
        ll[listIndex].tasks[taskIndex].dueDate = null;
        return ll;
      });
    }}
  >
    <ClearIcon />
  </div>
</div>

<div
  class="detail group hover:bg-slate-200 bg-slate-100 rounded-sm p-2 my-3 flex flex-col"
>
  <div class="flex justify-between">
    <p class="font-semibold">Description</p>
    <div
      class="my-auto invisible group-hover:visible hover:text-slate-500 max-h-16"
      on:click={() => {
        lists.update((ll) => {
          ll[listIndex].tasks[taskIndex].description = "";
          return ll;
        });
      }}
    >
      <ClearIcon />
    </div>
  </div>
  <div class="w-full cursor-text">
    <textarea
      class="bg-transparent w-full cursor-text outline-none"
      bind:value={task.description}
      on:change={() => {
        lists.update((ll) => {
          ll[listIndex].tasks[taskIndex].description = task.description;
          return ll;
        });
      }}
    />
  </div>
</div>
