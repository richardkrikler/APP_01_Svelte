<script>
  import { navigate } from "svelte-routing";
  export let id = "";
  import { lists, activeListId } from "../../stores";

  $: listIndex = $lists.findIndex((l) => l.id === $activeListId);
  $: if (listIndex < 0) {
    navigate("/");
  }
  $: list = $lists[listIndex]
  $: taskIndex = listIndex >= 0 ? $lists[listIndex].tasks.findIndex((t) => t.id === id) : 0;
  $: task = list.tasks[taskIndex]
</script>

<h1 class="text-2xl font-semibold px-2 py-2">{list.name}</h1>
<div class="bg-slate-100 w-full h-0.5 my-3" />

<h2 class="text-2xl font-semibold px-2 py-2">{task.title}</h2>

