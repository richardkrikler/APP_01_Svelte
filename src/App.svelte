<script>
  import { List } from "./lib/List";
  import { lists, activeList } from "./stores";
  import ListList from "./lib/ListList.svelte";
  import TaskList from "./lib/TaskList.svelte";
  import AddListButton from "./lib/AddListButton.svelte";
</script>

<main class="w-screen min-h-screen flex flex-col">
  <div class="flex justify-between bg-slate-700 py-3">
    <h1 class="px-3 text-slate-200 font-semibold text-3xl">ToDos</h1>
    <input class="bg-slate-200 hover:bg-slate-100 py-1 rounded-sm" />
    <div />
  </div>

  <div class="flex flex-grow text-left">
    <div class="flex flex-col bg-slate-100 w-44 p-3">
      <ListList />

      <AddListButton
        callback={() => {
          $lists.push(new List(""));
          console.log($lists);
        }}
      />
    </div>

    <div class="p-3 flex-grow">
      <TaskList listId={$activeList} />
    </div>
  </div>
</main>
