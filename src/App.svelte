<script>
  import AddListButton from "./lib/AddListButton.svelte";
import Counter from "./lib/Counter.svelte";

  const lists = [
    ["Liste1", ["Item1", "Item2"]],
    ["Liste2", ["Item1.1", "Item1.2"]],
  ];
</script>

<main class="w-screen min-h-screen flex flex-col">
  <div class="flex justify-between bg-slate-700 py-3">
    <h1 class="px-3 text-slate-200 font-semibold text-3xl">ToDos</h1>
    <input class="bg-slate-200 hover:bg-slate-100 py-1 rounded-sm" />
    <div />
  </div>

  <div class="flex flex-grow text-left">
    <div class="flex flex-col bg-slate-200 w-44 p-3">
      <ul class="flex-grow">
        {#each lists as list}
          <li
            class="hover:bg-slate-300 rounded-sm cursor-pointer py-1 px-2 my-2"
          >
            {list[0]}
          </li>
        {/each}
      </ul>

      <AddListButton/>
    </div>

    <div class="p-3 flex-grow">
      <h1 class="text-2xl font-semibold px-2 py-2">Listen Name</h1>
      <ul class="mt-2">
        <li class="hover:bg-slate-100 rounded-sm cursor-pointer p-2">
          <!-- click -> false/true disabled -->
          <input value="Aufgabe1" disabled class="bg-transparent w-full">
        </li>
      </ul>
    </div>
  </div>
</main>

<style>
</style>
