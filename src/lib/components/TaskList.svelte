<script>
  import { navigateTo } from 'svelte-router-spa'
  import { lists, activeListId } from "../../stores";
  import AddIcon from "../icons/AddIcon.svelte";
  import TrashIcon from "../icons/TrashIcon.svelte";
  import { List } from "../models/List";

  $: listIndex = $lists.findIndex((l) => l.id === $activeListId);
  let list = null;

  $: if (listIndex >= 0) {
    list = $lists[listIndex];
  } else if ($lists.length > 0) {
    listIndex = 0;
    list = $lists[0];
    activeListId.update(() => list.id);
  } else {
    listIndex = 0;
    $lists.push(new List("Tasks"));
    list = $lists[0];
    activeListId.update(() => list.id);
  }

  let newTaskTitle = "";

  const addTask = () => {
    if (newTaskTitle === "") {
      return;
    }

    lists.update((ll) => {
      ll[listIndex].addTask(newTaskTitle);
      return ll;
    });

    newTaskTitle = "";
  };
</script>

<h1 class="text-2xl font-semibold px-2 py-2">{list.name}</h1>

<div
  class="task hover:bg-slate-200 bg-slate-100 flex rounded-sm cursor-pointer p-2 my-3"
>
  <div on:click={() => addTask()}>
    <AddIcon classes="w-6 mr-2" />
  </div>
  <input
    class="bg-transparent w-full outline-none"
    placeholder="Add task"
    bind:value={newTaskTitle}
    on:keydown={(k) => {
      if (k.key === "Enter") {
        addTask();
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
      on:click={() => navigateTo('/taskdetails/' + task.id)}
    >
      <p class="cursor-pointer w-full">{task.title}</p>
      <div
        class="invisible group-hover:visible hover:text-slate-500"
        on:click={() => {
          lists.update((ll) => {
            ll.forEach((l) => {
              if (l.id === $activeListId) {
                l.tasks = l.tasks.filter((t) => t.id !== task.id);
              }
            });
            return ll;
          });
        }}
      >
        <TrashIcon />
      </div>
    </li>
  {/each}
</ul>
